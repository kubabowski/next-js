import {  transporter } from "../../mail_config/nodemailer";
import axios from 'axios';



const handler = async (req, res) => {
    if (req.method === 'POST') {
      const data = req.body;
  
      try {
        // Verify the reCAPTCHA token on the server
        const response = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
          params: {
            secret: '6LcssqYmAAAAALquC1er9bYKD8sjXO1PkwgO3oPy',
            response: data.recaptchaToken,
          },
        });
  
        if (response.data.success) {
          // reCAPTCHA verification successful, proceed with sending the form data
          await transporter.sendMail({
            from: 'kontakt@kalinaopalinska.pl',
            to: 'kontakt@kalinaopalinska.pl',
            subject: `Kontakt ${data.name}`,
            html: `
              <h3>Imię i nazwisko - ${data.name}</h3>
              <h3>adres e-mail - ${data.email}</h3>
              <h3>Temat - ${data.subject}</h3>
              <h3>napisała/napisał</h3><br>
              <p>${data.text}</p>
            `,
          });
          await transporter.sendMail({
            from: 'kontakt@kalinaopalinska.pl',
            to: data.email,
            subject: data.subject,
            html: `
              <h3>Cześć ${data.text}!</h3>
              <h4>Jest to potwierdzenie wypełnienia formularza kontaktowego na stronie kalinaopalinska.pl</h4><br><br>
              <h3>treść twojego pytania:</h3>
              <p>${data.text}</p><br<br>
              <h3>Wkrótcę odezwę się do Ciebie :)</h3>
            `,
          });
  
          return res.status(200).json({ message: 'Success' });
        } else {
          // reCAPTCHA verification failed
          return res.status(400).json({ message: 'reCAPTCHA verification failed' });
        }
      } catch (error) {
        console.log(error);
        return res.status(400).json({ message: error.message });
      }
    }
  
    return res.status(400).json({ message: 'Bad request' });
  };

export default handler;