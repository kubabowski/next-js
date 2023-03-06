
import Hero from '../components/Hero'


const Home = () => {
  const mainHeroText = "Kalina Opalińska";

  return (
    <div className=' min-h-screen flex items-center justify-center'>
      
      
      <Hero text={mainHeroText} />
      
    </div>
  )
}

export default Home


