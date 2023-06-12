import { useRouter } from 'next/router';
import React from 'react'
import insta from '../images/instagram.svg'
import Image from 'next/image'

function contact() {

  // const {inputEmail, inputName, inputSubject, inputText} = React.useRef([]);
  const inputEmail    = React.useRef();
  const inputName     = React.useRef();
  const inputSubject  = React.useRef();
  const inputText     = React.useRef();

  const router = useRouter(

  )

  // const onSubmit__OLD = async(e) => {
  //   e.preventDefault();
  //   const emailValue   = inputEmail.current.value;
  //   const namelValue   = inputName.current.value;
  //   const subjectValue = inputSubject.current.value;
  //   const textValue    = inputText.current.value;
  //   const eventId     = router?.query.id;

  //   try {
  //     const response = await fetch('./api/email-registration', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         email   : emailValue, 
  //         name    : namelValue,
  //         subject : subjectValue, 
  //         text    : textValue,
  //         eventId
  //       })
  //     });

  //     if(!response.ok) throw new Error(`Error: ${response.status}`);
  //     const data = await response.json();
  //     console.log('POST', data)

  //     //POST fetch request
  //     // dend body emailValue and event ID
  //   } catch (e) {
  //     console.log('ERROR', e)
  //   }
  // };

    async function onSubmit (e) {
      e.preventDefault();

      const formData = {}
      Array.from(e.currentTarget.elements).forEach(field => {
        if ( !field.name ) return;
        formData[field.name] = field.value;
      });
      fetch('/api/mail', {
        method: 'post', 
        body: JSON.stringify(formData)
      })
      console.log(formData);
    } 


  return (
    <>
    <div className='container flex flex-col md:flex-row mx-auto mt-[2rem] contact'>
    <div className='md:w-[50%] md:pr-[6rem]'>
      
      <div className=' mb-[3rem]'>
        <span className='text-lg text-white'>POZOSTAŃMY W KONTAKCIE </span>
      </div>
      <div>
        <span className='text-md text-white mb-6'>kalinaopalinska@icloud.com</span>
      </div>
      <div>
        <span className='text-md text-white mb-6'>instagram.com/kalinaopalinska</span>
      </div>
      <div>
        <a href="https://instagram.com/kalinaopalinska">
              <Image 
              
              src={insta}
              alt='insta'
              className='about-me-img'
              width='30'
              
              />
          </a>
      </div>
      
      <div>
        <span className='text-md text-white mb-6'>730 737 974</span>
      </div>
    </div>
      <div className='mt-[3rem] md:mt-0 md:w-[35%]'>
        <div className='mb-6'>
          <span className='text-lg text-white mb-6'>lub skorzystaj z formularza</span>
        </div>
        <form className='flex flex-col' method='post' onSubmit={onSubmit}>
            {/* <label className=' mr-6 text-white'>Imię i nazwisko</label> */}
            <input ref={inputName} name="name" type='text' id='name' placeholder='Imię i nazwisko'></input>

            {/* <label className=' mr-6 text-white'>e-mail</label> */}
            <input ref={inputEmail} name="email" type='email' id='email' placeholder='Wpisz swój adres e-mail'></input>

            {/* <label className=' mr-6 text-white'>Temat</label> */}
            <input ref={inputSubject} name="subject" type='text' id='subject' placeholder='Temat'></input>

            {/* <label className=' mr-6 text-white'>Wiadomość</label> */}
            <textarea ref={inputText} name="text" type='textarea' rows="6" id='message' placeholder='Wiadomość'></textarea>

            <button className=' bg-white w-[20%] mt-20' type='submit'>Wyślij</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default contact