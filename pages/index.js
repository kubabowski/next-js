import Head from 'next/head'
import Hero from '../components/Hero'


const Home = () => {
  const mainHeroText = "Kalina Opalińska";

  return (
    <div >
      <Head>
        <title>Kalina Opalińska</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero text={mainHeroText} />
      
    </div>
  )
}

export default Home


