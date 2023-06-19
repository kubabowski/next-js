import React from 'react'
import insta from '../images/instagram.svg'
import Image from 'next/image'
import logo from '../images/logo.svg';
import Modal from '../components/Modal'



const Footer = () => {
  return (
<footer className='pb-10 z-20 relative'>
<div className='footer-line' />
    <div className='container flex w-[100%] mx-auto justify-between items-end pt-10'>  
        <div className='flex items-center w-[100%]'>
            <div className='w-[40%] md:w-[20%] lg:w-[10%]'>
                <Image src={logo}
                alt='logo'
                className='logo-footer'
                width='120'
                
                />
            </div>
            <div className="flex flex-col w-[60%] md:w-[100%]">
                <div className="flex flex-col md:flex-row">
                    <div className="md:ml-20"> 
                        <div className='text-center'>
                            <div className="mb-3">
                                <span className='text-sm md:text-base text-white font-medium'>Dane firmy</span>
                            </div>
                            <div>
                                <a href="mailto: kontakt@kalinaopalinska.pl" className='text-sm md:text-base text-white font-extralight'>kontakt@kalinaopalinska.pl</a>
                            </div>
                            <div>
                                <a href="tel: +48 730 737 974" className='text-sm md:text-base text-white font-extralight'>730 737 974</a>
                            </div>
                            <div>
                                <span className='text-sm md:text-base text-white font-extralight'>Wrocław</span>
                            </div>
                            <div className='flex justify-center'>
                                <a href="https://instagram.com/kalinaopalinska">
                                    <Image 
                                    
                                    src={insta}
                                    alt='insta'
                                    className='about-me-img'
                                    width='30'
                                    
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="md:ml-20 mt-10 md:mt-0 text-center">
                        <div className="mb-3">
                            <span className='text-sm md:text-base text-white font-medium'>Godziny otwarcia</span>
                        </div>
                        <div>
                            <span className='text-sm md:text-base text-white font-extralight'>Pon - Ndz</span>
                        </div>
                        <div>
                            <span className='text-sm md:text-base text-white font-extralight'>Dostępność według umówionych spotkań</span>
                        </div>
                        <div>
                            <span className='text-sm md:text-base text-white font-extralight'>Dojazd do klienta</span>
                        </div>

                    </div>
                </div>
                <div className="flex hidden md:flex lg:flex-row justify-between container mt-10 lg:ml-20">
                    <div>
                        <span className='text-sm md:text-base text-gray-300 font-extralight'>Wszelkie prawa zastrzeżone © 2023 Kalina Opalińska</span>
                    </div>
                    {/* <div className="flex">
                        <Modal customClass={'text-sm text-white font-extralight mr-4'} className='' text={'test test'} label={`Polityka prywatności`} />
                        <Modal customClass={'text-sm text-white font-extralight mr-4'} className='' text={'test test'} label={`Regulamin`} />
                        <Modal customClass={'text-sm text-white font-extralight'} className='' text={'test test'} label={`Klauzula poufności`} />
                    </div> */}
                    <div>
                        <span className='text-sm md:text-base text-gray-300 font-extralight'>Wsparcie i realizacja strony <a className='animated-underline' href="https://www.linkedin.com/in/kuba-kacper-jakubowski-/">Kuba Jakubowski</a></span>
                    </div>

                </div>
            </div>
        </div>
        
    </div>
    <div className="flex flex-col justify-between container mx-auto mt-10 md:hidden">
        <div>
            <span className='text-sm text-gray-300 font-extralight'>Wszelkie prawa zastrzeżone © 2023 Kalina Opalińska</span>
        </div>
        {/* <div className="flex">
            <Modal customClass={'text-sm text-white font-extralight mr-4'} className='' text={'test test'} label={`Polityka prywatności`} />
            <Modal customClass={'text-sm text-white font-extralight mr-4'} className='' text={'test test'} label={`Regulamin`} />
            <Modal customClass={'text-sm text-white font-extralight'} className='' text={'test test'} label={`Klauzula poufności`} />
        </div> */}
        <div>
            <span className='text-sm text-gray-300 font-extralight'>Wsparcie i realizacja strony <a className='animated-underline' href="https://www.linkedin.com/in/kuba-kacper-jakubowski-/">Kuba Jakubowski</a></span>
        </div>

    </div>
    
</footer>
  )
}

export default Footer