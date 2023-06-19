import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
    host: "mail.kalinaopalinska.pl",
    port: 465,
    secure: true,
    auth: {
        user: "kontakt@kalinaopalinska.pl",
        pass: "kalina1369!"
    }
})

