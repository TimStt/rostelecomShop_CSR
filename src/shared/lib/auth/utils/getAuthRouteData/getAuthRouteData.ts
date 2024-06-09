import { getdbAndRequest } from "@/shared/lib/mongodb/utils/api-routes";
import { MongoClient } from "mongodb";
import { NextApiRequest } from "next";
import { validateAccessToken } from "../validateAccessToken";

export const getAuthRouteData = async (
  clientPromise: Promise<MongoClient>,
  req: NextApiRequest,
  withReqBody: boolean
) => {
  const { db, reqBody } = await getdbAndRequest(
    clientPromise,
    withReqBody ? req : null
  );

  const token = req.headers.authorization?.split(" ")[1];
  const validationTokenResult = await validateAccessToken(token);

  return { db, reqBody, validationTokenResult, token };
};
