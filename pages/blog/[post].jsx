import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import post from "../../data/blog_posts.json";

const Blog = ({ post }) => {
  const { title } = post;

  const router = useRouter();

  useEffect(() => {
    console.log(router)
  }, [])

  const goToContact = () => {
    router.push('/contact')
  }
  
  
  return (
    <>
      <div className=' text-2xl text-center text-white align-bottom'>{title}</div>
      <button onClick={goToContact}>{router.query.topic}</button>
    </>
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