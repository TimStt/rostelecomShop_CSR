import { stat } from "fs";
import jwt, { VerifyErrors } from "jsonwebtoken";

export const validateAccessToken = async (token: string | undefined) => {
  const baseError = {
    message: "Unauthorized",
    status: 401,
  };

  let jwtError = null;

  if (!token) {
    return {
      ...baseError,
      error: { message: "jwt is required" },
    };
  }

  await jwt.verify(
    token,
    process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY as string,
    async (err: VerifyErrors | null) => {
      if (err) {
        jwtError = err;
      }
    }
  );

  if (jwtError) {
    return {
      ...baseError,
      error: jwtError,
    };
  }

  return {
    status: 200,
  };
};
