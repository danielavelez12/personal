const cron = require("node-cron");
const { parse } = require("csv-parse");
const fs = require("fs");

require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

async function sendBirthdayReminder(name, reminderType) {
  let text = "";
  switch (reminderType) {
    case "advance":
      text = "in three days ➡️";
      break;
    case "dayOf":
      text = "today!! 🎈";
      break;
  }

  client.messages
    .create({
      body: `It's ${name}'s birthday ${text}`,
      from: "+15593541895",
      to: "+19549559235",
    })
    .then((message) => console.log(message.sid));
}

function sameDate(a, b) {
  return a.getMonth() == b.getMonth() && a.getDate() == b.getDate();
}

function getDayMonth(dateObj) {
  return dateObj
    .toLocaleString("en-US", {
      timeZone: "America/New_York",
    })
    .split(",")[0];
}

async function scanBirthdaysAndSendText() {
  const rows = fs
    .readFileSync("./birthdays.csv", "utf8")
    .trim()
    .split("\r\n")
    .slice(1);

  const year_today = new Date().getFullYear();

  let row_counter = 0;
  while (row_counter < rows.length) {
    let i = 0;
    let vals = rows[row_counter].split(",");
    let label = vals[0];
    let name = vals[1];

    let dateStr = year_today + "-" + vals[3] + "-" + vals[4];
    let dateObj = new Date(dateStr);
    dateStr = getDayMonth(dateObj);
    const todayDateObj = new Date();
    let refDate = getDayMonth(todayDateObj);

    let dayMatch = dateStr == refDate;

    todayDateObj.setDate(todayDateObj.getDate() + 3);
    refDate = getDayMonth(todayDateObj);
    let advanceDayMatch = dateStr == refDate;

    if (dayMatch) {
      await sendBirthdayReminder(name, "dayOf");
    }
    if (advanceDayMatch) {
      await sendBirthdayReminder(name, "advance");
    }
    row_counter += 1;
  }
}

cron.schedule("* * * * *", async function () {
  await scanBirthdaysAndSendText();
});
