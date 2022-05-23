const cron = require("node-cron");
const { parse } = require("csv-parse");
const fs = require("fs");
const { google } = require("googleapis");

require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

async function getBirthdays() {
  try {
    const target = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      (process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
      target
    );
    const sheets = google.sheets({ version: "v4", auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: "full", // sheet name
    });
    return response.data.values;
  } catch (err) {
    console.log(err);
  }
}

async function sendBirthdayReminder(name, reminderType, date) {
  console.log(`Sending birthday reminder for ${name}.`);
  let text = "";
  switch (reminderType) {
    case "upcoming":
      text = `in three days, on the ${date} ➡️`;
      break;
    case "advance":
      text = `in six days, on the ${date} ➡️`;
      break;
    case "dayOf":
      text = `on ${date}!! 🎈`;
      break;
  }

  let numMessagesSent = 0;
  await client.messages
    .create({
      body: `It's ${name}'s birthday ${text}`,
      from: "+15593541895",
      to: "+19549559235",
    })
    .then((message) => {
      numMessagesSent += 1;
      console.log(message.sid);
    });
  return 5;
}

function getDayMonth(dateObj) {
  return dateObj
    .toLocaleString("en-US", {
      timeZone: "America/New_York",
    })
    .split(",")[0];
}

const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

export async function scanBirthdaysAndSendText() {
  const response = await getBirthdays();
  const rows = response.slice(1);

  const year_today = new Date().getFullYear();

  const matches = [];
  const data = [];

  let row_counter = 0;
  let numMessagesSent = 0;
  while (row_counter < rows.length) {
    let vals = rows[row_counter];
    let label = vals[0];
    let name = vals[1];

    let dateStrFromFile = year_today + "-" + vals[3] + "-" + vals[4];
    let dateObj = new Date(
      year_today,
      parseInt(vals[3]) - 1,
      parseInt(vals[4]) + 1
    );

    let dateStr = getDayMonth(dateObj);
    const todayDateObj = new Date();
    let dateToday = todayDateObj.getDate();
    let refDate = getDayMonth(todayDateObj);

    let dayMatch = dateStr == refDate;

    // Upcoming in three days
    todayDateObj.setDate(todayDateObj.getDate() + 3);
    let upcomingRefDate = getDayMonth(todayDateObj);
    let upcomingDay = daysOfWeek[todayDateObj.getDay()];
    let upcomingDate = todayDateObj.getDate();
    let upcomingDayMatch = dateStr == upcomingRefDate;

    // Advance six days notice
    todayDateObj.setDate(todayDateObj.getDate() + 6);
    let advanceRefDate = getDayMonth(todayDateObj);
    let advanceDay = daysOfWeek[todayDateObj.getDay()];
    let advanceDate = todayDateObj.getDate();
    let advanceDayMatch = dateStr == advanceRefDate;

    data.push([
      name,
      dateStrFromFile,
      dateStr,
      label,
      upcomingRefDate,
      advanceRefDate,
    ]);

    if (dayMatch && label != "") {
      matches.push(name);
      numMessagesSent += await sendBirthdayReminder(name, "dayOf", dateToday);
    }
    if (upcomingDayMatch && ["2", "1"].includes(label)) {
      matches.push(name);
      numMessagesSent += await sendBirthdayReminder(
        name,
        "upcoming",
        upcomingDate
      );
    }
    if (advanceDayMatch && label == "1") {
      matches.push(name);
      numMessagesSent += await sendBirthdayReminder(
        name,
        "advance",
        advanceDate
      );
    }
    row_counter += 1;
  }

  return {
    numMessagesSent: numMessagesSent,
    info: { today: new Date(), matches: matches, data: data },
  };
}
