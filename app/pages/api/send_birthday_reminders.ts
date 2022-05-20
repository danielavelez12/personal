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
    const numMessagesSent = await scanBirthdaysAndSendText();
    res.status(200).json({
      result:
        `Sent ${numMessagesSent} reminder` +
        (numMessagesSent == 1 ? "." : "s."),
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
}
