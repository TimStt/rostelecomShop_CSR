import { IFilters } from "@/shared/config/types/filters";
import {
  IBasketGoods,
  IGoods,
  Tcollections,
} from "@/shared/config/types/goods";
import { IUser } from "@/shared/config/types/user/types";
import { tr } from "@faker-js/faker";
import { Db, Filter } from "mongodb";
import { FilterQuery } from "mongoose";

interface IFindOneOnCollection {
  db: Db;
  collectionName: Tcollections;
  filter?: Filter<IUser | IBasketGoods | IGoods>;
  limit?: number;
}

export const findOneOnCollection = async ({
  db,
  collectionName,
  filter,
  limit,
}: IFindOneOnCollection) => {
  try {
    const result = await db
      .collection<IUser | IBasketGoods | IGoods>(collectionName)
      .find(filter || {})
      .limit(limit || 0)
      .toArray();
    return result;
  } catch (error) {
    new Error((error as Error).message);
  }
};
