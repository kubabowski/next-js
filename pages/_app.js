import React from 'react';
import '../styles/globals.scss';
import Navbar from '../components/Navbar';
import Head from 'next/head'
import { useRouter } from 'next/router';
 
function MyApp({ Component, pageProps }) {

  const [navHeight, setNavHeight] = React.useState();
  const { pathname } =  useRouter();
  const currentRoute = pathname.replace("/", "page");

  const getNavHeight = (height) => {
    React.useEffect(()=> {
      setNavHeight(height);
    })
    
  }
  const [navPadding, setNavPadding] = React.useState(0)

  

  // React.useEffect(()=> {
  //     const addPad = () => {
  //         if(window.scrollY >= 90){ 
  //             setNavPadding('h-[70px]')
  //         } else {
  //             setNavPadding('h-[95px]')
  //         }
  //     }
  //     window.addEventListener('scroll', addPad)
  // }, [])

  return (
    <>
      <Head>
          <title>Kalina Opalińska</title>
          <link rel="icon" href="/favicon.ico" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@200&family=Fira+Sans+Extra+Condensed:wght@100;200&family=Poiret+One&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@200&family=Fira+Sans+Extra+Condensed:wght@100;200&family=Poiret+One&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@200&family=Fira+Sans+Extra+Condensed:wght@100;200&family=Poiret+One&display=swap" rel="stylesheet"></link>
        </Head>

        <Navbar getNavHeight={getNavHeight} />

        <div className={`${currentRoute} home-gradient min-h-screen`}>
          <div id='scrollMargin'  style={{ height: navHeight }} />
          <Component {...pageProps} />
        </div>
    </>
  )
}

export default MyApp

