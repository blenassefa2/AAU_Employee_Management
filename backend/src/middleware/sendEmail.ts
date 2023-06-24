import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: "gmail",
 port: 465,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});