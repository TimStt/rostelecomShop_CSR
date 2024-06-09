import { clientPromise } from "@/shared/lib/mongodb/client-promise";
import { getdbAndRequest } from "@/shared/lib/mongodb/utils/api-routes";
import foundAllProduct from "@/shared/lib/mongodb/utils/found-product/found-product";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "GET") {
      if (!req.query.value && !req.query.type && !req.query.category) {
        res.status(400).json({ error: "Missing values" });
        return;
      }
      const { db } = await getdbAndRequest(clientPromise, null);
      const products = await foundAllProduct({
        db: db,
        value: req.query.value as string,
        type: req.query?.type as string,
        category: req.query?.category as string,
      });

      res.status(200).json(products);
      return;
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
    return;
  }
};

export default handler;
