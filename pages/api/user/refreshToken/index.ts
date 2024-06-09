import { clientPromise } from "@/shared/lib/mongodb/client-promise";
import { getdbAndRequest } from "@/shared/lib/mongodb/utils/api-routes";
import { NextApiRequest, NextApiResponse } from "next";
import { createToken } from "@/shared/lib/auth/utils/create-token";
import jwt, { JwtPayload, VerifyErrors } from "jsonwebtoken";
import { parseJwt } from "@/shared/lib/auth/utils/parseJwt";
import { findOneOnCollection } from "@/shared/lib/mongodb/utils/find-one-on-collection";
import { IUser } from "@/shared/config/types/user/types";

const logger = require("../../../../winston");

// interface IJwtPayload extends JwtPayload {
//   email: string;
// }

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { db, reqBody } = await getdbAndRequest(clientPromise, req);
    logger.info("Refresh token request", reqBody.jwt);
    if (reqBody?.jwt) {
      const refreshToken = reqBody.jwt;
      let accessToken = {};
      let tokens = {};
      let error = null;

      await jwt.verify(
        refreshToken,
        process.env.NEXT_PUBLIC_REFRESH_TOKEN_KEY as string,
        async (err: VerifyErrors | null) => {
          const user = (
            (await findOneOnCollection({
              db: db,
              filter: { email: parseJwt(reqBody.jwt).email },
              collectionName: "users",
            })) as IUser[]
          )[0];

          if (!user) {
            error = { message: "Invalid jwt token" };
            return;
          }

          if (err) {
            if (err.name === "TokenExpiredError") {
              tokens = createToken(user?.name as string, user?.email);
            }

            error = err;
            return;
          }

          accessToken = jwt.sign(
            {
              name: user.name,
              email: user.email,
            },
            process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY as string,
            {
              expiresIn: "10m",
            }
          );
        }
      );

      if ((error as unknown as VerifyErrors)?.name === "TokenExpiredError") {
        return res.status(200).json(tokens);
      }

      if (error) {
        return res.status(401).json({
          message: "Unauthorized",

          error,
        });
      }

      return res.status(200).json({ accessToken, refreshToken });
    } else {
      return res.status(404).json({
        message: "jwt is required",
        status: 404,
      });
    }
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export default handler;
