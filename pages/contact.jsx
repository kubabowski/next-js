import { useRouter } from 'next/router';
import React from 'react'

function contact() {

  const inputEmail = React.useRef();
  const router = useRouter(

  )

  const onSubmit = async(e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;

    try {
      const response = await fetch('./api/email-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: emailValue, eventId})
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
    <div className='container flex justify-between px-[13rem] '>
      <div>
        <form className='flex flex-col' onSubmit={onSubmit}>
            <label className=' mr-6 text-white'>Imię i nazwisko</label>
            <input  type='text' id='name' placeholder='Imię i nazwisko'></input>

            <label className=' mr-6 text-white'>e-mail</label>
            <input ref={inputEmail} type='email' id='email' placeholder='Wpisz swój adres e-mail'></input>

            <label className=' mr-6 text-white'>Temat</label>
            <input  type='text' id='subject' placeholder='Temat'></input>

            <label className=' mr-6 text-white'>Wiadomość</label>
            <input  type='textarea' id='message' placeholder='Wiadomość'></input>

            <button className=' bg-white ml-6 p-4 my-5' type='submit'>Wyślij</button>
        </form>
      </div>
      <div>
        sadasd
      </div>
    </div>
    </>
  )
}

export default contact