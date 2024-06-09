import {
  IExtendedNextApiRequest,
  IResponseData,
} from "@/shared/config/types/auth";
import { createToken } from "@/shared/lib/auth/utils/create-token";
import { clientPromise } from "@/shared/lib/mongodb/client-promise";
import { getdbAndRequest } from "@/shared/lib/mongodb/utils/api-routes";
import { createUser } from "@/shared/lib/mongodb/utils/create-user";
import { findOneOnCollection } from "@/shared/lib/mongodb/utils/find-one-on-collection";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { IUser } from "@/shared/config/types/user/types";

const handler = async (
  req: IExtendedNextApiRequest,
  res: NextApiResponse<IResponseData>
) => {
  try {
    const { db, reqBody } = await getdbAndRequest(clientPromise, req);

    if (!reqBody) {
      return res.status(400).json({
        error: "Не удалось получить данные для авторизации",
      });
    }

    const { email, password } = reqBody;

    const userFind = (
      (await findOneOnCollection({
        db: db,
        collectionName: "users",
        filter: { email: email as string },
      })) as IUser[]
    )[0];

    if (!userFind) {
      const user = await createUser(db, req.body);

      if (user.error) {
        return res.status(500).json({
          error: `Не удалось создать пользователя ${user.error}`,
        });
      }

      return res.status(200).json(user);
    }
    const isValid = bcrypt.compareSync(password, userFind.password);

    if (!isValid) {
      return res.status(200).json({
        warningMessage: "Неверный логин или пароль",
      });
    }

    const tokens = createToken(
      userFind?.name as string,
      userFind?.email as string
    );

    return res.status(200).json(tokens);
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export default handler;
