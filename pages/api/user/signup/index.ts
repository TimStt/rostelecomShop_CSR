import {
  IExtendedNextApiRequest,
  IAuth,
  IResponseData,
} from "@/shared/config/types/auth";
import { clientPromise } from "@/shared/lib/mongodb/client-promise";
import { getdbAndRequest } from "@/shared/lib/mongodb/utils/api-routes";
import { createUser } from "@/shared/lib/mongodb/utils/create-user";
import { findOneOnCollection } from "@/shared/lib/mongodb/utils/find-one-on-collection";
import { th } from "@faker-js/faker";
import { on } from "events";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (
  req: IExtendedNextApiRequest,
  res: NextApiResponse<IResponseData>
) => {
  try {
    const { email } = req.body;
    const { db } = await getdbAndRequest(clientPromise, null);
    const user = (
      (await findOneOnCollection({
        db: db,
        collectionName: "users",
        filter: { email: email as string },
      })) as IAuth[]
    )[0];

    if (user) {
      return res.status(200).json({
        warningMessage: "Пользователь с таким email уже существует",
      });
    }

    const tokens = await createUser(db, req.body);
    if (tokens.error) {
      return res.status(500).json({
        error: `Не удалось создать пользователя ${tokens?.error}`,
      });
    }
    return res.status(200).json(tokens);
  } catch (error: any) {
    return res.status(500).json({ error: error });
  }
};

export default handler;
