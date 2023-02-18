import React from 'react'

const Hero = ({ text }) => {
  return (
    <div className='flex bg-fixed bg-cover bc-center home-img items-end'>
      <div className='text-white text-2xl z-[1] mx-auto my-auto'>
        {text}
      </div>
    </div>
  )
}

export default Hero;