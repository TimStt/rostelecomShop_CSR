import { getAuthRouteData } from "@/shared/lib/auth/utils/getAuthRouteData";
import { MongoClient, ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { findOneOnCollection } from "../find-one-on-collection";
import { IUser } from "@/shared/config/types/user/types";
import { parseJwt } from "@/shared/lib/auth/utils/parseJwt";
import { IBasketGoods, IGoods } from "@/shared/config/types/goods";
const logger = require("../../../../../../winston");
export const replaceProductInCollection = async ({
  clientPromise,
  req,
  res,
  collection,
}: {
  clientPromise: Promise<MongoClient>;
  req: NextApiRequest;
  res: NextApiResponse;
  collection: string;
}) => {
  const { db, reqBody, validationTokenResult, token } = await getAuthRouteData(
    clientPromise,
    req,
    true
  );

  if (validationTokenResult.status !== 200) {
    res.status(401).json(validationTokenResult);
  }
  logger.error("reqBody", reqBody);
  if (!req.body?.items) {
    res.status(400).json({ error: "No items provided" });
  }

  const user = (
    (await findOneOnCollection({
      db: db,
      collectionName: "users",
      filter: { email: parseJwt(token as string).email },
    })) as IUser[]
  )[0];

  if (!user) {
    res.status(401).json({ error: "User not found" });
  }

  const items = (req.body.items as { productId: string }[]).map((item) => {
    return {
      ...item,
      userId: user._id,
      productId: ObjectId.createFromHexString(item.productId as string) as any,
    };
  });
  await db.collection(collection).deleteMany({ userId: user._id });
  if (!items.length) {
    res.status(201).json({ item: [] });
  }

  await db.collection(collection).insertMany(items);

  res.status(200).json(items);
};
