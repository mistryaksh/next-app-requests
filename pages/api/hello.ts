// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const BackendUrl = `https://swayamhealth.info/api`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch(
    `${BackendUrl}/category/gettestfromkiosk/MUMSAN2`,
    {
      method: "GET",
    }
  );
  const data = await response.json();
  console.log("data", data);
  res.status(200).json(data);
}
