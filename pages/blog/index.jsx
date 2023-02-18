import React from 'react'
import Link from 'next/link'

const blog = ({data}) => {
  return (
    <>
      {data.map((blog)=> {
        return(
          <div className='container'>
            <Link key={blog.id} href='/blog/{blog.id}'>
              <div className='text-white'>{blog.title}</div>
            </Link>
            
            
            
          </div>
        )
      })}
      <div className=' container'>blog</div>
    </>
  )
}

export default blog

export async function getServerSideProps() {
  const { post } = await import('../../data/blog_posts.json')
  console.log( post ) 
  return{
      props: {
        "data": post,
      }
    
  }
}