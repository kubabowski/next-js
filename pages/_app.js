import React from 'react';
import '../styles/globals.scss';
import Navbar from '../components/Navbar';
 
function MyApp({ Component, pageProps }) {

  const [navHeight, setNavHeight] = React.useState(0);

  const getNavHeight = (height) => {
    React.useEffect(()=> {
      setNavHeight(height);
    })
    
  }
  const [navPadding, setNavPadding] = React.useState(0)

  

  React.useEffect(()=> {
      const addPad = () => {
          if(window.scrollY >= 90){ 
              setNavPadding('h-[70px]')
          } else {
              setNavPadding('h-[95px]')
          }
      }
      window.addEventListener('scroll', addPad)
  }, [])

  return (
    <div className='home-gradient min-h-screen'>
      <Navbar getNavHeight={getNavHeight} />
      <div id='scrollMargin'  style={{ height: navHeight }} />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

