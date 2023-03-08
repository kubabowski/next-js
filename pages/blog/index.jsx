import React, { useEffect } from 'react'
import Link from 'next/link'

const blog = ({data}) => {
  

  return (
    <div className='flex flex-col justify-center items-center mt-[5rem]'>
      {Object.values(data).map((blog)=> {

        return(
          <div className='container text-center mx-auto w-[20%]'>
            <Link key={blog.id} href={`/blog/${blog.slug}`}>
              <div className='text-white text-xl animated-underline '>{blog.title}</div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default blog

export async function getServerSideProps() {
  const { post } = await import('../../data/dane.json')
  console.log( post ) 
  return{
      props: {
        "data": post,
      }
    
  }
}