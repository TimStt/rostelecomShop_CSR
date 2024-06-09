import { IGoods, Tcollections } from "@/shared/config/types/goods";
import { clientPromise } from "@/shared/lib/mongodb/client-promise";
import { getdbAndRequest } from "@/shared/lib/mongodb/utils/api-routes";
import { findOneOnCollection } from "@/shared/lib/mongodb/utils/find-one-on-collection";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const { db } = await getdbAndRequest(clientPromise, null);
      const category = req.query.category as Tcollections;
      const id_product = req.query.id_product as string;

      const product = (
        (await findOneOnCollection({
          db: db,
          filter: {
            _id: ObjectId.createFromHexString(id_product as string) as any,
          },
          collectionName: category,
          limit: 2,
        })) as IGoods[]
      )[0];

      return res.status(200).json(product);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
  res.setHeader("Allow", "GET");
  res.status(425).end(`Method ${req.method} Not Allowed`);
};

export default handler;
