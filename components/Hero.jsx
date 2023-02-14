import React from 'react'

const Hero = ({text}) => {
  return (
    <div className='flex  bg-fixed bg-cover bc-center home-img items-end'>
        <div className=' absolute top-0 bottom-0 left-0 right-0 z-[1] ' />        
        <div className=' text-white text-2xl z-[1] mx-auto my-auto '>
            {text}
            
        </div>
    </div>
  )
}

export default Hero;



