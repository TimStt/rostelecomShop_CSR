import { Db } from "mongodb";
import bcrypt from "bcryptjs";
import { createToken } from "@/shared/lib/auth/utils/create-token";
import { IAuth } from "@/shared/config/types/auth";

export const createUser = async (db: Db, reqBody: IAuth) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(reqBody.password, salt);
    await db.collection("users").insertOne({
      name: reqBody.name,
      email: reqBody.email,
      password: hashedPassword,
      image: "",
      role: "user",
    });

    return createToken(reqBody.name as string, reqBody.email as string);
  } catch (error: any) {
    return { error: error };
  }
};
