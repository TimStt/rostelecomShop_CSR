import { IFilters } from "@/shared/config/types/filters";
import { Db, SortDirection } from "mongodb";

export interface Isettings {
  db: Db;
  limit?: number;
  filter?: IFilters;
  sort?: {
    [key: string]: SortDirection;
  };
  page?: number;
  returnTotatCount?: boolean;
}
