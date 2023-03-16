import React, { useEffect } from 'react'
import Link from 'next/link'

const blog = ({data}) => {
  

  return (
    <div className='flex flex-col justify-center items-center mt-[5rem]'>
      
      {Object.values(data).map((blog)=> {

        return(
<<<<<<< HEAD
          
          <div className='container text-center'>
            <Link key={blog.id} href={`/blog/${blog.slug}`}>
              <span className='text-white text-xl animated-underline pb-2 mb-4'>{blog.title}</span>
=======
          <div className='container text-center mx-auto w-[20%]'>
            <Link key={blog.id} href={`/blog/${blog.slug}`}>
              <div className='text-white text-xl animated-underline '>{blog.title}</div>
>>>>>>> main
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
  
  return{
      props: {
        "data": post,
      }
    
  }
}