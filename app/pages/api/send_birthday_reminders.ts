import type { NextApiRequest, NextApiResponse } from "next";
import { scanBirthdaysAndSendText } from "../../functions/birthday_reminders";

type Data = {
  result?: string;
  error?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    await scanBirthdaysAndSendText();
    res.status(200).json({ result: "Sent reminders!" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
}
