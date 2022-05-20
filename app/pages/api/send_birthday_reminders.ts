import type { NextApiRequest, NextApiResponse } from "next";
import {
  sendBirthdayReminder,
  scanBirthdaysAndSendText,
} from "../../functions/birthday_reminders";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await scanBirthdaysAndSendText();
  res.status(200).json({ name: "John Doe" });
}
