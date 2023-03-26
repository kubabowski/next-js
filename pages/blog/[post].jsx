import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import post from "../../data/daneBlog.json";

const Blog = ({ post }) => {
  const { title, text1 } = post;

  const router = useRouter();

  useEffect(() => {
    console.log(router)
  }, [])

  const goToContact = () => {
    router.push('/contact')
  }
  
  
  return (
    <div className='container mt-[3%]'>
      <div className='text-2xl text-center text-white align-bottom'>{title}</div>
      <div className='text-white align-bottom'>{text1}</div>
      <button className='text-white p-5' onClick={goToContact}>{router.query.topic} </button>
    </div>
  )
}

export default Blog;

export async function getServerSideProps({
  resolvedUrl,
  params,
  ...rest
}) {
  const { post: postSlug } = params;

  const findedPost = post.post.find(({ slug }) => slug === postSlug);

  return {
    props: {
      post: findedPost
    },
  }
}