import React, { useEffect } from 'react'
import Link from 'next/link'

const blog = ({data}) => {
  

  return (
    <div className='flex flex-col justify-center items-center mt-[5rem] h-100 '>
      
      {Object.values(data).map((offer)=> {

        return(
          
          <div className='container mb-1'>
            <Link className='text-white text-md animated-underline pb-1 ' key={offer.id} href={`/cennik/${offer.slug}`}>
              {offer.title}
            </Link>
          </div>
          
        )
      })}
      
    </div>
  )
}

export default blog

export async function getServerSideProps() {
  const { offer } = await import('../../data/daneCennik.json')
  
  return{
      props: {
        "data": offer,
      }
    
  }
}