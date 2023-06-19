import { useRouter } from 'next/router';
import React from 'react';
import insta from '../images/instagram.svg';
import Image from 'next/image';
import { sendContactForm } from '../mail_config/api';

function Contact() {
  const [valInput, setValInput] = React.useState(false);
  const [isSent, setIsSent] = React.useState(false);
  const [recaptchaToken, setRecaptchaToken] = React.useState('');

  const key = process.env.CAPTCHA_KEY;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = {};
    let isFormValid = true;

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;

      if (!field.value) {
        isFormValid = false;
        setValInput(true);
      }

      formData[field.name] = field.value;
    });

    if (!isFormValid) {
      return;
    }

    formData['recaptchaToken'] = recaptchaToken;

    try {
      await sendContactForm(formData);
      setIsSent(true);
      e.currentTarget.reset(); // Clear form inputs
    } catch (error) {
      console.log('error in handler');
    }
  };

  React.useEffect(() => {
    const loadRecaptcha = async () => {
      await new Promise((resolve) => {
        const intervalId = setInterval(() => {
          if (typeof grecaptcha !== 'undefined') {
            clearInterval(intervalId);
            resolve();
          }
        }, 100);
      });
  
      
      grecaptcha.ready(() => {
        grecaptcha.execute( key, { action: 'submit' }).then((token) => {
          setRecaptchaToken(token);
        });
      });
    };
  
    loadRecaptcha();
  }, []);

  return (
    <>
      <div className='container flex flex-col md:flex-row mx-auto mt-[2rem] contact relative pb-10'>
        <div className='md:w-[50%] md:pr-[6rem]'>
          <div className='mb-[3rem]'>
            <span className='text-lg text-white'>pozostańmy w kontakcie</span>
          </div>
          <div>
            <span className='text-md text-white mb-6'>kontakt@kalinaopalinska.pl</span>
          </div>
          <div className='my-10 lg:my-5'>
            <a href='https://instagram.com/kalinaopalinska'>
              <Image src={insta} alt='insta' className='about-me-img' width='30' />
            </a>
          </div>

          <div>
            <span className='text-md text-white mb-6'>730 737 974</span>
          </div>
        </div>
        <div className='mt-[3rem] md:mt-0  lg:w-[35%]'>
          <div className='mb-6'>
            <span className='text-lg text-white mb-6'>lub skorzystaj z formularza</span>
          </div>
          <form className='flex flex-col' method='post' onSubmit={onSubmit}>
            <input name='name' type='text' id='name' placeholder='Imię i nazwisko' required />
            <input name='email' type='email' id='email' placeholder='Wpisz swój adres e-mail' required />
            <input name='subject' type='text' id='subject' placeholder='Temat' required />
            <textarea name='text' type='textarea' rows='6' id='message' placeholder='Wiadomość' required></textarea>
            {recaptchaToken && <input type="hidden" name="recaptchaToken" value={recaptchaToken} />}


            {valInput && <span className='text-red-500'>Wszystkie pola są wymagane</span>}

            {isSent ? (
              <span className='text-green-500'>Dziękuję za wypełnienie formularza</span>
            ) : (
              <button className='bg-white w-[30%] lg:w-[20%] mx-auto lg:mx-0 mt-10 lg:mt-20' type='submit'>
                Wyślij
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
