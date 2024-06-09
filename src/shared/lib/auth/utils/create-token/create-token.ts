import jwt from "jsonwebtoken";

export const createToken = (name: string, email: string) => {
  try {
    const accessToken = jwt.sign(
      {
        name,
        email,
      },
      process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY as string,
      {
        expiresIn: "10m",
      }
    );
    const refreshToken = jwt.sign(
      {
        email,
      },
      process.env.NEXT_PUBLIC_REFRESH_TOKEN_KEY as string,
      {
        expiresIn: "30d",
      }
    );
    return { accessToken, refreshToken };
  } catch (error: any) {
    return { error: error };
  }
};
