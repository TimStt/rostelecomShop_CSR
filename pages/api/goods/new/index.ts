import { IGoods } from "@/shared/config/types/goods";
import { clientPromise } from "@/shared/lib/mongodb/client-promise";
import { getdbAndRequest } from "@/shared/lib/mongodb/utils/api-routes";
import { findOneOnCollection } from "@/shared/lib/mongodb/utils/find-one-on-collection";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const { db } = await getdbAndRequest(clientPromise, null);

      const clothes = (await findOneOnCollection({
        db: db,
        filter: { isNew: true },
        collectionName: "clothes",
        limit: 2,
      })) as IGoods[];
      const accessories = (await findOneOnCollection({
        db: db,
        filter: { isNew: true },
        collectionName: "accessories",
        limit: 2,
      })) as IGoods[];

      return res.status(200).json([...clothes, ...accessories]);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
  res.setHeader("Allow", "GET");
  res.status(425).end(`Method ${req.method} Not Allowed`);
};

export default handler;
