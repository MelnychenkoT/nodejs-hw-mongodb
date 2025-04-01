import nodemailer from "nodemailer";
import { getEnvVar } from "./utils/getEnvVar.js"; // Імпортуємо утиліту getEnvVar

const transporter = nodemailer.createTransport({
  host: getEnvVar("SMTP_HOST"), // Переконайся, що тут smtp-relay.brevo.com
  port: Number(getEnvVar("SMTP_PORT")), // 587
  secure: false, // Для 587 має бути false
  auth: {
    user: getEnvVar("SMTP_USER"),
    pass: getEnvVar("SMTP_PASSWORD"),
  },
});

const mailOptions = {
  from: getEnvVar("SMTP_FROM"),
  to: "tanyadance30@gmail.com",
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