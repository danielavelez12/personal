import type { NextApiRequest, NextApiResponse } from "next";
import { scanBirthdaysAndSendText } from "../../functions/birthday_reminders";

type Data = {
  result?: string;
  error?: any;
  info?: {
    today: Date;
    sheet: any;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const result = await scanBirthdaysAndSendText();
    const numMessagesSent = result.numMessagesSent;
    const info = result.info;
    res.status(200).json({
      result:
        `Sent ${numMessagesSent} reminder` +
        (numMessagesSent == 1 ? "." : "s."),
      info: info,
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
}
