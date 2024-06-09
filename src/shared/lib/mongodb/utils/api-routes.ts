import { Db, MongoClient } from "mongodb";
import { NextApiRequest } from "next";

let db: Db | null;

export const getdbAndRequest = async (
  clientPromise: Promise<MongoClient>,
  req: NextApiRequest | null
) => {
  try {
    if (!db) db = (await clientPromise).db(process.env.NEXT_PUBLIC_DB_NAME);

    if (req) {
      const reqBody = await req.body;

      return { db, reqBody };
    }

    return { db };
  } catch (error) {
    console.error(error);
    throw new Error("Error connecting to database");
  }
};
