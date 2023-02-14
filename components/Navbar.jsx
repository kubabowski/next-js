import Link from 'next/link'
import React, {useState, useEffect, useRef} from 'react'
// import {AiOutlineMenu ,AiOutlineClose} from 'react-icons/ai';

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
    name: "Cennik",
    url: '/cennik'
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
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [navPadding, setNavPadding] = useState(0)
    
    const handleNav = () => setNav(prevNav => !prevNav);

    useEffect(()=> {
      const changeColor = () => {
        if(window.scrollY > 90){
          setColor('#000000e6')
          setNavPadding('h-[90px]')
          return;
        } 

        setColor('transparent')
        setNavPadding('h-[70px]')
      }

      window.addEventListener('scroll', changeColor)
    }, [])

    // props.appNavHeight

    const ref = useRef(null);
    const [navHeight, setNavHeight ] = useState(0);

    useEffect(() => {
      setNavHeight( () =>  ref.current.clientHeight)       
    },[navHeight])
   
    props.getNavHeight(navHeight)

    return (
    
    <div id='navBarID' style={{backgroundColor: `${color}`}} className={`sticky top-0 left-0 w-full z-10 ease-in duration-300`}>
        <div ref={ref} className={`${navPadding}  container max-w-[1240] m-auto flex justify-between items-center text-white mx-auto duration-300`}>
             
            <Link href='/'>
                <div >
                    Kalina Opalińska
                    {props.title}
                </div>
            </Link>

            <ul className='hidden sm:flex'>
              {NAV_LINKS.map(({name, url}) => (
                <li className='p-4'>
                  <Link href={url}>
                    {name}
                  </Link>
                </li>
              ))}               
            </ul>
        
            <div className={nav 
                ? 'absolute top-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' : ' sm:hidden absolute top-0 right-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
                <ul>
                  {NAV_LINKS.map(({name, url}) => (
                    <li className='p-4 text-4xl hover:text-gray-500 ease-in-out duration-150 '>
                      <Link href={url}>
                        {name}
                      </Link>
                    </li>
                ))}                     
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar;