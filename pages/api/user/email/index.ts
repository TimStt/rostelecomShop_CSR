import { NextApiRequest, NextApiResponse } from "next";
import { sendMail } from "../../../../service/mailServer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = req.body;

  try {
    await sendMail(
      "Rostelecom-Shop",
      email,
      `Ваши данные для входа: пароль - ${password}, email - ${email}`
    );
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
