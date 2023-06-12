import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import post from "../../data/daneBlog.json";

const Blog = ({ post }) => {
  const { title, text1, text2, text3, image } = post;

  const router = useRouter();



  const goToContact = () => {
    router.push('/contact')
  }
  
  
  return (
    <div className='container mx-auto text-center mt-[3%]'>
      <div className='text-2xl text-center text-white align-bottom'>{title} {image}</div>
      <div className='text-white font-extralight align-bottom mx-auto sm:w-[60%]'>{text1}</div>
      {router.query.topic}
      {image}
      <img src={image} alt={title} className=""/>
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