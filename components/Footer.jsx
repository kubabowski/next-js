import React from 'react'
import insta from '../images/instagram.svg'
import Image from 'next/image'


const Footer = () => {
  return (
    <>
    <div className='footer-line' />
<div className='container flex w-[100%] mx-auto mt-[2rem] justify-between'>
    
        
    <div>
        <div>
            <span className='text-sm text-white mb-6'>kalinaopalinska@icloud.com</span>
        </div>
        <div>
            <span className='text-sm text-white mb-6'>instagram.com/kalinaopalinska</span>
        </div>
        
        <div>
            <span className='text-sm text-white mb-6'>730 737 974</span>
        </div>
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
    
    </div>
    </>
  )
}

export default Footer