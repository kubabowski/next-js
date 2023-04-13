import React from 'react'
import aboutImg from './sesja9.jpg'
import Image from 'next/image'

const about = () => {

  // const img = require('./../images/sesja9.jpg');
  return (
    <div className='flex flex-col md:flex-row container lg:w-[74%] mx-auto'>
      <div className=' w10 md:w-[35%] order-2 md:order-1'>
        <Image 
          // src={require('./../images/sesja9.jpg').default}
          src={aboutImg}
          alt='about-me'
          className='about-me-img'
          width='360'
          
        />
      </div>
      <div className='md:w-[65%] flex items-center lh order-1 md:order-2'>
        <div className='text-white text-md leading-relaxed fira-extra font-extralight'>
        <p>TWORZENIE WIZERUNKU JEST SZTUKĄ. KAŻDA Z NAS JEST NIEPOWTARZALNA, JEST INSPIRACJĄ, JEST PIĘKNA. NIE TYLKO NA ZEWNĄTRZ.</p>

        <p>PRZEZ LATA DZIAŁAŃ WYMAGAJĄCYCH MOJEJ KREATYWNOŚCI, DBAŁOŚCI O KAŻDY SZCZEGÓŁ, JAKOŚĆ I PREZENTACJE, NAUCZYŁAM SIĘ, ŻE KAŻDA Z NAS POTRZEBUJE CZASU, ABY ZROZUMIEĆ KIM JEST, JAK SIĘ CZUJE I JAKIE WYBORY SĄ DLA NIEJ NAJLEPSZE. CO SPRAWIA, ŻE CZUJE SIĘ PEWNA I W PEŁNI SOBĄ.</p>

        <p>NATURALNE PIĘKNO KAŻDEJ Z WAS INSPIRUJE MNIE DO TWORZENIA WIZERUNKU, KTÓRY DOPEŁNIA URODĘ – NIE ZMIENIAJĄC JEJ NIE DO POZNANIA – I POZWALA CI POKOCHAĆ SAMĄ SIEBIE, POCZUĆ SIĘ SILNĄ I ŚWIADOMĄ SWOJEGO PIĘKNA WEWNĘTRZNEGO, KTÓRE TYLKO PODKREŚLAMY NA ZEWNĄTRZ MAKIJAŻEM.</p>

        <p> MÓJ ZAWÓD WYKONUJĘ OD PONAD 14 LAT. MAM ZA SOBĄ UDZIAŁ W TWORZENIU NOWYCH MAREK I WIZJI, PRACĘ PRZY SESJACH ZDJĘCIOWYCH, POKAZACH MODY, PRODUKCJE REKLAMOWE, EDYTORIALE, ALE PRZEDE WSZYSTKIM PRACĘ Z KLIENTEM INDYWIDUALNYM, KTÓRĄ CENIĘ SOBIE NAJBARDZIEJ. MAM ZA SOBĄ WSPÓŁPRACĘ Z MARKAMI TAKIMI JAK YVES SAINT LAURENT, BOBBI BROWN, LAURA MERCIER CZY GIORGIO ARMANI MIN. W KRAKOWIE I WROCŁAWIU.</p>

        <p>W CODZIENNEJ PRACY KŁADĘ DUŻY NACISK NA KONDYCJE SKÓRY I SZACUNEK DO NIEJ, CODZIENNĄ RUTYNĘ PIELĘGNACYJNĄ, HIGIENĘ PRODUKTÓW I AKCESORIÓW DO APLIKACJI. LUBIĘ ROZMAWIAĆ, UMIEM MILCZEĆ. BO PODCZAS MAKIJAŻU BYWA RÓŻNIE, CZASAMI ROZMOWY NIE MAJA KOŃCA A CZASAMI POTRZEBUJEMY CISZY, KTÓRA NAS DOPEŁNIA.</p>
        <p>TU JEST CAŁE MOJE SERCE, LATA DOŚWIADCZEŃ, PRZESTRZEŃ TWÓRCZA I MIEJSCE NA ROZWÓJ.</p>
        <p>TO JEST MÓJ ŚWIAT. ZAPRASZAM CIĘ DO NIEGO.</p>
        </div>
      </div>

    </div>
  )
}

export default about