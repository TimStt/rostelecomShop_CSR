import { NextApiRequest, NextApiResponse } from "next";
import { getAllGoods } from "@/shared/lib/mongodb/utils/get-all-goods/get-all-goods";
import { clientPromise } from "@/shared/lib/mongodb/client-promise";
import { IGoodsList } from "@/shared/config/types/goods/types";
import { getdbAndRequest } from "@/shared/lib/mongodb/utils/api-routes";
import { IFilters } from "@/shared/config/types/filters";

const logger = require("../../../../winston");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const DEFAULT_SORT = {
        popularity: -1,
      };

      const page = parseInt(req.query.page as string, 10) || 0;
      const limit = parseInt(req.query.limit as string, 10) || 0;
      const price_min = parseInt(req.query.price_min as string, 10);
      const price_max = parseInt(req.query.price_max as string, 10);
      const sizes = req.query?.sizes as string;
      const category = req.query?.category as string;
      const type = req.query?.type as string;
      logger.info("type", type);

      let filter: IFilters = {};
      delete filter.$and;
      !!category?.length && category !== "undefined"
        ? (filter.category = { $in: category.split(" ") })
        : null;

      !!price_min && !!price_max
        ? (filter.price = {
            $gte: parseInt(req.query.price_min as string, 10),
            $lte: parseInt(req.query.price_max as string, 10),
          })
        : null;
      sizes.length > 0 && sizes !== "undefined" && sizes !== "null"
        ? (filter.$and = sizes.split(",").map((size) => ({
            ["sizes"]: {
              ["$elemMatch"]: { [size.toLowerCase()]: true },
            },
          })))
        : null;

      !!type && type !== "undefined" ? (filter.type = type) : null;

      const sort =
        Object.fromEntries([(req.query?.sort as string).split(":")]) ||
        DEFAULT_SORT;

      logger.info(filter);

      const { db } = await getdbAndRequest(clientPromise, null);

      const { data, count } = await getAllGoods({
        db: db,

        filter: filter,
        sort: sort,
        limit: limit,
        page: page,
        returnTotatCount: true,
      });

      return res.status(200).json({ data, count });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
  res.setHeader("Allow", "GET");
  res.status(425).end(`Method ${req.method} Not Allowed`);
}
