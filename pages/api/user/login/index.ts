import { getdbAndRequest } from "@/shared/lib/mongodb/utils/api-routes";
import { findOneOnCollection } from "@/shared/lib/mongodb/utils/find-one-on-collection";
import { NextResponse } from "next/server";
import { clientPromise } from "@/shared/lib/mongodb/client-promise";
import { createToken } from "@/shared/lib/auth/utils/create-token";
import bcrypt from "bcryptjs";
import { IUser } from "@/shared/config/types/user/types";
import { NextApiRequest, NextApiResponse } from "next";
import {
  IExtendedNextApiRequest,
  IResponseData,
} from "@/shared/config/types/auth";

const handler = async (
  req: IExtendedNextApiRequest,
  res: NextApiResponse<IResponseData>
) => {
  try {
    const { db, reqBody } = await getdbAndRequest(clientPromise, req);
    const user = (
      (await findOneOnCollection({
        db: db,
        collectionName: "users",
        filter: {
          email: reqBody.email as string,
        },
      })) as IUser[]
    )[0];

    if (!user) {
      return res.status(200).json({
        warningMessage: "Такого пользователя не существует",
      });
    }

    const isValid = bcrypt.compareSync(req.body.password, user.password);

    if (!isValid) {
      return res.status(200).json({
        warningMessage: "Неверный логин или пароль",
      });
    }

    const tokens = createToken(user.name as string, user.email);

    return res.status(200).json({
      tokens,
    });
  } catch (error: any) {
    return res.status(500).json({ error: error });
  }
};

export default handler;
