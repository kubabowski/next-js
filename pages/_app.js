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

  

  React.useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();
  }, []);

  return (
    <>
      <Head>
          <title>Kalina Opalińska</title>
          <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <script src="../node_modules/tw-elements/dist/js/index.min.js"></script>
        <Navbar getNavHeight={getNavHeight} />

        <div className={`${currentRoute} home-gradient min-h-screen`}>
          <div id='scrollMargin'  style={{ height: navHeight }} />
          <Component {...pageProps} />
        </div>
    </>
  )
}

export default MyApp

