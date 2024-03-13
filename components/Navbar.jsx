import Link from 'next/link'
import React, {useState, useEffect, useRef} from 'react'
import { useRouter } from "next/router";


const NAV_LINKS = [
  {
    name: "O mnie",
    url: '/o-mnie'
  },
  {
    name: "Portfolio",
    url: '/portfolio'
  },
  {
    name: "Oferta",
    url: '/oferta'
  },
  
  {
    name: "Blog",
    url: '/blog'
  },
  {
    name: "Kontakt",
    url: '/kontakt',
  },
]

const Navbar = (props) => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [navPadding, setNavPadding] = useState('h-[90px]');
    const {pathname} = useRouter();
    
    
    const handleNav = () => setNav(prevNav => !prevNav);
    const currentRoute = pathname

    useEffect(()=> {
      const changeColor = () => {
        if(window.scrollY > 30){
          setColor('#000000e6')
          setNavPadding('h-[70px]')
          return;
        } 


        setColor('transparent')
        setNavPadding('h-[90px]')
      }

      window.addEventListener('scroll', changeColor)
    }, [])

    props.appNavHeight

    const ref = useRef(null);
    const [navHeight, setNavHeight ] = useState(0);


    useEffect(() => {
      setNavHeight( () =>  ref.current.clientHeight)       
    },[navHeight])
   
    props.getNavHeight(navHeight)

    return (
    

    <div id='navBarID' style={{backgroundColor: `${color}`}} className={`fixed top-0 left-0 w-full z-10 ease`}>
        <div ref={ref} className={`${navPadding}  container m-auto flex justify-between items-center text-white mx-auto duration-300`}>

             
            <Link href='/'>
                <div className='logo py-1 text-md uppercase tracking-wider'>
                    Kalina Opalińska
                    {props.title}
                </div>
            </Link>
    
            <ul className='hidden md:flex'>
              {NAV_LINKS.map(({name, url}, index) => (
                <li key={index} className={`text-base ${currentRoute == url ? "active" : ""} mx-4 py-1 uppercase`}>
                  <Link href={url}>
                    <span className='font-extralight'>
                      {name}
                    </span>
                  </Link>
                </li> 
              ))}               
            </ul>
            <a href='#' className='text-white md:hidden' onClick={handleNav} >
            <svg viewBox="0 0 50 80" width="40" height="20">
              <rect fill='white' width="100" height="5"></rect>
              <rect fill='white' y="30" width="100" height="5"></rect>
              <rect fill='white'  y="60" width="100" height="5"></rect>
            </svg>
              </a>      
            
        
            <div className={nav 
                ? 'absolute top-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' 
                : ' md:hidden absolute top-0 right-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
                <ul>
                  {NAV_LINKS.map(({name, url}, index) => (
                    <li key={index} className='p-4 text-lg hover:text-gray-500 ease-in-out duration-150 '>
                      <Link href={url} onClick={handleNav}>
                        {name}
                      </Link>
                    </li>
                ))}      
                         
                </ul>
                <a href='#' className='text-white md:hidden text-xl absolute top-[4%] right-[7%]' onClick={handleNav} >
                <svg width="40" height="40" viewBox="0 0 40 40"><path d="M 10,10 L 30,30 M 30,10 L 10,30" stroke="white" strokeWidth="1" /></svg>
                </a>      
            </div>
        </div>
    </div>
  )
}

export default Navbar;
