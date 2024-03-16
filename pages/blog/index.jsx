import React, { useEffect } from 'react'
import Link from 'next/link'

const Blog = ({data}) => {
  
//test
  
  return (
    <div className='flex flex-col justify-center items-center mt-[5rem]'>
      
      {Object.values(data).map((blog)=> {

        return(
          
          <div className='container text-center'>
            <Link key={blog.id} href={`/blog/${blog.slug}`}>
              <span className='text-white text-md md:text-xl animated-underline pb-2 mb-4'>{blog.title}</span>
            </Link>
          </div>
          
        )
      })}
      
    </div>
  )
}

export default Blog

export async function getServerSideProps() {
  const { post } = await import('../../data/daneBlog.json')
  
  return{
      props: {
        "data": post,
      }
    
  }
}
