import React, { use, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
// import * as te from 'tw-elements';



const blog = ({data}) => {

  const[hoveredItem, setHoveredItem] = useState({
    id: null,
    title:"",
    desc: ""
  });
  const [ariaExpanded, setAriaExpanded] = useState(false);
  const [collapseShow, setCollapseShow] = useState("");
  // const ref = useRef();
  
  const accordionChange = (id) => {
    setAriaExpanded((prevAriaExpanded) => !prevAriaExpanded);
  }


  useEffect(()=> {
    const {id, title, desc} = hoveredItem 
  },[hoveredItem])

  return (
    <>
    <div className=' justify-center mt-[2rem] container hidden md:flex'>
      <div className=' w-[20%]'>
        {Object.values(data).map((offer)=> {

          return(
            <div className='mb-1 '>
                <Link onMouseEnter={()=> { setHoveredItem(offer); }} className='text-white text-md animated-underline pb-1 ' key={offer.id} href={`#`}>
                  {offer.title}
                </Link>
            </div>
          )
        })}
      </div>
      <div className=' w-[80%] h-[100%] text-white'>
          {/* <NewLineText props={JSON.stringify(hoveredItem.desc)} /> */}
          {hoveredItem.desc && <p className='text-center' dangerouslySetInnerHTML={{__html: hoveredItem.desc.replace('\r\n','<br />')}} />}
      </div>
      
    </div>
    <div className='md:hidden'>
    <div id='accordionOffer'>
    {Object.values(data).map((offer)=> {

    return( 

    <div className="">
        <h2 className="mb-0" id={offer.id}>
          <button
            className="group relative flex w-full items-center border-0 py-4 px-5 text-left text-base  transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none text-white "
            // [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] <--- separating line
            type="button"
            onClick={ ()=> accordionChange(offer.id) }
            data-te-collapse-init
            data-te-target={`#collapse-${offer.id}`}
            aria-expanded={ariaExpanded}
            aria-controls={`#collapse-${offer.id}`}>
            {offer.title}
            <span
              className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-gray-300 transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0  motion-reduce:transition-none dark:fill-gray-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </button>
        </h2>
        <div
          id={`collapse-${offer.id}`}
          className="!visible"
          data-te-collapse-item 
          collapseShow
          data-te-collapse-show
          aria-labelledby={offer.id}
          data-te-parent="#accordionOffer">
          <div className="py-4 px-5 text-white">
          {offer.desc}
          </div>
        </div>
      </div>
    )
    })}
    </div>
    </div>
    </>
  )
}

export default blog

export async function getServerSideProps() {
  const { offer,  } = await import('../../data/daneCennik.json')
  
  return{
      props: {
        "data": offer,
      }
    
  }
}