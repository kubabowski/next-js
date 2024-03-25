import Link from 'next/link'



const Home = () => {
  

  return (
    <div className=' min-h-screen flex items-center justify-center'>
      
      <div className='z-[1] mx-auto my-auto text-white flex flex-col items-center'>
        <Link href='/o-mnie'><span className='text-xl md:text-4xl font-thin fira-extra ht-23'>KALINA OPALIŃSKA</span></Link>
        <div className="white-line" />
        <span className="poiret text-md md:text-lg">BEAUTY EXPERT - MAKEUP ARTIST - HAIR STYLIST</span>
      </div>
      
      
    </div>
  )
}

export default Home


