import { NextApiRequest, NextApiResponse } from "next";
import token from "@/data/token";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const accessToken = req.headers["authorization"];
  if (token.accessToken == accessToken)
    return res.status(200).send({ message: "oke dadash" });
  res.status(401).send({ message: "ok nist" });
}
