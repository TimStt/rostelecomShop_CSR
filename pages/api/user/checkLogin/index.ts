import { IUser } from "@/shared/config/types/user/types";
import { getAuthRouteData } from "@/shared/lib/auth/utils/getAuthRouteData";
import { parseJwt } from "@/shared/lib/auth/utils/parseJwt";
import { clientPromise } from "@/shared/lib/mongodb/client-promise";
import { findOneOnCollection } from "@/shared/lib/mongodb/utils/find-one-on-collection";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { db, validationTokenResult, token } = await getAuthRouteData(
      clientPromise,
      req,
      false
    );

    if (validationTokenResult.status !== 200) {
      res.status(401).json(validationTokenResult);
      return;
    }

    const user = (
      (await findOneOnCollection({
        db: db,
        collectionName: "users",
        filter: { email: parseJwt(token as string).email },
      })) as IUser[]
    )[0];

    if (!user) {
      res.status(200).json({ status: 401, message: "User not found" });
    }

    res.status(200).json({
      status: 200,
      message: "token is valid",
      user: {
        _id: user._id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    new Error((error as Error).message);
  }
};

export default handler;
