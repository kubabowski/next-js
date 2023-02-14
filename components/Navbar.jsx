import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import {AiOutlineMenu ,AiOutlineClose} from 'react-icons/ai'


const Navbar = (props) => {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    // const [navPadding, setNavPadding] = useState(0)
    
    

    const handleNav = ()=> {
        setNav(prevNav => !prevNav)
    }

    useEffect(()=> {
        const changeColor = () => {
            if(window.scrollY >= 90){
                setColor('#000000e6')
                // setNavPadding('py-2')
            } else {
                setColor('transparent')
                // setNavPadding('py-4')
            }
        }
        window.addEventListener('scroll', changeColor)
    }, [])


    // props.appNavHeight

    const ref = React.useRef(null)
    const [navHeight, setNavHeight ] = React.useState(0)

    React.useEffect(() => {
            setNavHeight( () =>  ref.current.clientHeight)       
    },[navHeight])
   
      props.getNavHeight(navHeight)

    return (
    
    <div id='navBarID' style={{backgroundColor: `${color}`}} className={`sticky top-0 left-0 w-full z-10 ease-in duration-300`}>
        <div ref={ref} className={`${props.padding}  container max-w-[1240] m-auto flex justify-between items-center text-white mx-auto duration-300`}>
             
            <Link href='/'>
                <div >
                    Kalina Opalińska
                    {props.title}
                </div>
            </Link>
            <ul className='hidden sm:flex'>
                <li className='p-4'>
                    <Link href='/o-mnie'>
                    O mnie
                    </Link>
                </li>
                <li className='p-4'>
                    <Link href='/portfolio'>
                        Portfolio
                    </Link>
                </li>
                <li className='p-4'>
                    <Link href='/oferta'>
                        Oferta
                    </Link>
                </li>
                <li className='p-4'>
                    <Link href='/cennik'>
                        Cennik           
                    </Link>
                </li>
                <li className='p-4'>
                    <Link href='/blog'>
                        Blog
                    </Link>
                </li>
                <li className='p-4'>
                    <Link href='/contact'>
                        Kontakt
                    </Link>
                </li>
               
            </ul>
        

        {/* MOBILE BUTTON */}
            <div className=' sm:hidden z-10'>
                { nav ? <AiOutlineClose size={20} onClick={handleNav} /> : <AiOutlineMenu size={20} onClick={handleNav} />}
            </div>
            <div className={nav 
                ? 'absolute top-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' : ' sm:hidden absolute top-0 right-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
                <ul>
                    <li className='p-4 text-4xl hover:text-gray-500 ease-in-out duration-150 '>
                        <Link href='/o-mnie'>
                            O mnie
                        </Link>
                    </li>
                    <li className='p-4 text-4xl hover:text-gray-500 ease-in-out duration-150 '>
                        <Link href='/portfolio'>
                            Portfolio
                        </Link>
                    </li>
                    <li className='p-4 text-4xl hover:text-gray-500 ease-in-out duration-150 '>
                        <Link href='/oferta'>
                            Oferta
                        </Link>
                    </li>
                    <li className='p-4 text-4xl hover:text-gray-500 ease-in-out duration-150 '>
                        <Link href='/cennik'>
                            Cennik           
                        </Link>
                    </li>
                    <li className='p-4 text-4xl hover:text-gray-500 ease-in-out duration-150 '>
                        <Link href='/blog'>
                            Blog
                        </Link>
                    </li>
                    <li className='p-4 text-4xl hover:text-gray-500 ease-in-out duration-150 '>
                        <Link href='/contact'>
                            Kontakt
                        </Link>
                    </li>

                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar;

export function getServerSideProps() {
  
    return {
      props: {
        title:'hello'
      }
    }
  }

