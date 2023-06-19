import React from 'react';
import '../styles/globals.scss';
import Navbar from '../components/Navbar';
import Head from 'next/head'
import { useRouter } from 'next/router';
import dynamic from "next/dynamic";
import Footer from '../components/Footer';




 


function MyApp({ Component, pageProps }) {

  const [navHeight, setNavHeight] = React.useState();
  const { pathname } =  useRouter();
  const currentRoute = pathname.replace("/", "page");

  const getNavHeight = (height) => {
    React.useEffect(()=> {
      setNavHeight(height);
    })
    
  }

  return (
    <>
      <Head>
          <title>Kalina Opalińska</title>
          <link rel="icon" href="/favicon.ico" />
        
      </Head>
  
      <Navbar getNavHeight={getNavHeight} />

      <div className={`${currentRoute} home-gradient`}>
        <div id='bg-shadow' />
        <div id='scrollMargin'  style={{ height: navHeight }} />
        <div className='min-h-[90vh] relative'>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default MyApp

