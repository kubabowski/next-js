import { useRouter } from 'next/router';
import React from 'react'

function contact() {

  // const {inputEmail, inputName, inputSubject, inputText} = React.useRef([]);
  const inputEmail    = React.useRef();
  const inputName     = React.useRef();
  const inputSubject  = React.useRef();
  const inputText     = React.useRef();

  const router = useRouter(

  )

  const onSubmit = async(e) => {
    e.preventDefault();
    const emailValue   = inputEmail.current.value;
    const namelValue   = inputName.current.value;
    const subjectValue = inputSubject.current.value;
    const textValue    = inputText.current.value;
    const eventId     = router?.query.id;

    try {
      const response = await fetch('./api/email-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email   : emailValue, 
          name    : namelValue,
          subject : subjectValue, 
          text    : textValue,
          eventId
        })
      });

      if(!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      console.log('POST', data)

      //POST fetch request
      // dend body emailValue and event ID
    } catch (e) {
      console.log('ERROR', e)
    }
  };

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
        <span className='text-md text-white mb-6'>730 737 974</span>
      </div>
    </div>
      <div className='mt-[3rem] md:mt-0 md:w-[35%]'>
        <div className='mb-6'>
          <span className='text-xl text-white mb-6'>lub skorzystaj z formularza</span>
        </div>
        <form className='flex flex-col' onSubmit={onSubmit}>
            <label className=' mr-6 text-white'>Imię i nazwisko</label>
            <input ref={inputName} type='text' id='name' placeholder='Imię i nazwisko'></input>

            <label className=' mr-6 text-white'>e-mail</label>
            <input ref={inputEmail} type='email' id='email' placeholder='Wpisz swój adres e-mail'></input>

            <label className=' mr-6 text-white'>Temat</label>
            <input ref={inputSubject} type='text' id='subject' placeholder='Temat'></input>

            <label className=' mr-6 text-white'>Wiadomość</label>
            <textarea ref={inputText} type='textarea' rows="6" id='message' placeholder='Wiadomość'></textarea>

            <button className=' bg-white w-[20%] mt-20' type='submit'>Wyślij</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default contact