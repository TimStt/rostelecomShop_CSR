import { ObjectId } from "mongoose";

export interface IUser {
  _id: string;

  email: string;
  password: string;
  role: string;
  name?: string;
  image?: string;
}
