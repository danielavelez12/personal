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

async function sendBirthdayReminder(name, reminderType, day = "") {
  console.log(`Sending birthday reminder for ${name}.`);
  let text = "";
  switch (reminderType) {
    case "upcoming":
      text = `in three days, on ${day} ➡️`;
      break;
    case "advance":
      text = `in six days, on ${day} ➡️`;
      break;
    case "dayOf":
      text = "today!! 🎈";
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

  let row_counter = 0;
  let numMessagesSent = 0;
  while (row_counter < rows.length) {
    let vals = rows[row_counter];
    let label = vals[0];
    let name = vals[1];

    let dateStr = year_today + "-" + vals[3] + "-" + vals[4];
    let dateObj = new Date(dateStr);
    dateStr = getDayMonth(dateObj);
    const todayDateObj = new Date();
    let refDate = getDayMonth(todayDateObj);

    let dayMatch = dateStr == refDate;

    // Upcoming in three days
    todayDateObj.setDate(todayDateObj.getDate() + 3);
    refDate = getDayMonth(todayDateObj);
    let upcomingDay = daysOfWeek[todayDateObj.getDay()];
    let upcomingDayMatch = dateStr == refDate;

    // Advance six days notice
    todayDateObj.setDate(todayDateObj.getDate() + 6);
    refDate = getDayMonth(todayDateObj);
    let advanceDay = daysOfWeek[todayDateObj.getDay()];
    let advanceDayMatch = dateStr == refDate;

    if (dayMatch && label != "") {
      numMessagesSent += await sendBirthdayReminder(name, "dayOf");
    }
    if (upcomingDayMatch && ["2", "1"].includes(label)) {
      numMessagesSent += await sendBirthdayReminder(
        name,
        "upcoming",
        upcomingDay
      );
    }
    if (advanceDayMatch && label == "1") {
      numMessagesSent += await sendBirthdayReminder(
        name,
        "advance",
        advanceDay
      );
    }
    row_counter += 1;
  }

  return 6;
}
