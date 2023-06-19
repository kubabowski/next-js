import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;
const domain = process.env.DOMAIN;

export const transporter = nodemailer.createTransport({
    host: domain,
    port: 465,
    secure: true,
    auth: {
        user: email,
        pass: pass
    }
})

