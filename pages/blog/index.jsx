import React, { useEffect } from 'react'
import Link from 'next/link'

const blog = ({data}) => {
  useEffect(() => {
    console.log(data)
  }, [])
  

  return (
    <div className='flex flex-col justify-center items-center mt-[5rem]'>
      {Object.values(data).map((blog)=> {
        console.log(blog)

        return(
          <div className='container text-center'>
            <Link key={blog.id} href={`/blog/${blog.slug}`}>
              <div className='text-white text-xl'>{blog.title}</div>
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