import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: any) {
  try {
    await res.revalidate("/speed/isr");
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}
