import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,  // Переконайся, що тут smtp-relay.brevo.com
  port: Number(process.env.SMTP_PORT), // 587
  secure: false, // Для 587 має бути false
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

const mailOptions = {
  from: process.env.SMTP_FROM,
  to: "тестовий_емейл@gmail.com",
  subject: "Test Email",
  text: "This is a test email from Brevo SMTP",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Помилка надсилання:", error);
  } else {
    console.log("Email надіслано:", info.response);
  }
});