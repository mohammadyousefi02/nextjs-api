import { NextApiResponse } from "next";
import { NextApiRequest } from "next";
import token from "@/data/token";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const refreshToken = req.headers["authorization"];
  if (refreshToken !== token.refreshToken)
    return res.status(401).send({ message: "boro biroon kolan" });
  token.accessToken = "newAccessToken" + (Math.random() * 10).toString(16);
  token.refreshToken = "newRefreshToken" + (Math.random() * 10).toString(16);
  return res.status(200).send(token);
}
