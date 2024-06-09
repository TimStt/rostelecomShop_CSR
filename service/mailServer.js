import nodemailer from "nodemailer";

export const sendMail = async (subject, toEmail, otpText) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: `${process.env.NEXT_PUBLIC_EMAIL_NODEMAILER}`,
      pass: `${process.env.NEXT_PUBLIC_PW_NODEMAILER}`,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  const mailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL_NODEMAILER,
    to: toEmail,
    subject: subject,
    text: otpText,
  };
  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);

        return reject(error);
      } else {
        return resolve(info);
      }
    });
  });
};
