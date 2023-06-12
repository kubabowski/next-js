import React from 'react'
import aboutImg from './sesja9.jpg'
import Image from 'next/image'

const about = () => {

  // const img = require('./../images/sesja9.jpg');
  return (
    <div className='flex flex-col md:flex-row container lg:w-[75%] mx-auto m mb-20'>
      <div className=' w10 md:w-[30%] order-2 md:order-1 mr-10'>
        <Image 
          // src={require('./../images/sesja9.jpg').default}
          src={aboutImg}
          alt='about-me'
          className='about-me-img'
          width='500'
          
        />
      </div>
      <div className='md:w-[55%] flex items-center lh order-1 md:order-2'>
        <div className='text-white text-md leading-relaxed fira-extra font-extralight uppercase'>
        <p className='mb-3'>Tworzenie wizerunku jest sztuką. Każda z nas jest niepowtarzalna, jest inspiracją, jest piękna. Nie tylko na zewnątrz. </p>

        <p className='mb-3'>Naturalne piękno każdej z Was inspiruje mnie do tworzenia wizerunku, który dopełnia urodę - nie zmieniając jej nie do poznania - i pozwala Ci pokochać samą siebie, poczuć się silną i świadomą swojego piękna wewnętrznego, które tylko podkreślamy na zewnątrz makijażem. </p>

        <p className='mb-3'>Z makijażem i stylizacją związana jestem od ponad 15 lat. Mam za sobą udział w tworzeniu nowych marek i wizji, pracę przy sesjach zdjęciowych, pokazach mody, produkcje reklamowe, edytoriale, współprace korporacyjne, ale przede wszystkim pracę z klientem indywidualnym, którą cenię sobie najbardziej. Mam za sobą współpracę z markami takimi jak Yves Saint Laurent, Bobbi Brown, Laura Mercier czy Giorgio Armani min. w Krakowie i Wrocławiu. </p>

        <p className='mb-3'>W mojej pracy kładę duży nacisk na codzienną rutynę pielęgnacyjną, kondycję skóry i szacunek do niej. Skóra jest jak płótno. Dobrze przygotowana daje piękną powierzchnię do pracy. Ogromne znaczenie ma dla mnie indywidualne podejście, Wasze inspiracje i aktualny nastrój, to, czy szukamy efektu wow, czy może lekkości w makijażu.</p>

        <p className='mb-3'>Lubię rozmawiać, umiem milczeć. Bo podczas makijażu bywa różnie, czasami rozmowy nie maja końca a czasami potrzebujemy ciszy, która nas dopełnia.</p>

        <p className='mb-3'>Tu jest całe moje serce, lata doświadczeń, przestrzeń twórcza i miejsce na rozwój. To jest mój świat. Zapraszam Cię do niego.</p>
        </div>
      </div>

    </div>
  )
}

export default about