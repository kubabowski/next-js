import React, { use, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
// import * as te from 'tw-elements';



const blog = ({data}) => {

  const[hoveredItem, setHoveredItem] = useState({
    id: null,
    title:"",
    desc: ""
  });
  


  useEffect(()=> {
    const {id, title, desc} = hoveredItem 
  },[hoveredItem])

  return (
    <>
    <div className=' justify-center mt-[5rem] container hidden md:flex'>
      <div className=' w-[20%]'>
        {Object.values(data).map((offer)=> {

          return(
            <div className='container mb-1 '>
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
    
    <div id="accordionExample">
  <div
    class="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
    <h2 class="mb-0" id="headingOne">
      <button
        class="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
        type="button"
        data-te-collapse-init
        data-te-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne">
        Accordion Item #1
        <span
          class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
    </h2>
    <div
      id="collapseOne"
      class="!visible"
      data-te-collapse-item
      data-te-collapse-show
      aria-labelledby="headingOne"
      data-te-parent="#accordionExample">
      <div class="py-4 px-5">
        <strong>This is the first item's accordion body.</strong> It is
        shown by default, until the collapse plugin adds the appropriate
        classes that we use to style each element. These classes control
        the overall appearance, as well as the showing and hiding via CSS
        transitions. You can modify any of this with custom CSS or
        overriding our default variables. It's also worth noting that just
        about any HTML can go within the <code>.accordion-body</code>,
        though the transition does limit overflow.
      </div>
    </div>
  </div>
  
  
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