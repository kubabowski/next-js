import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import offer from "../../data/daneCennik.json";

const Blog = ({ offer }) => {
  const { id, title, desc } = offer;

  const router = useRouter();


  const goToContact = () => {
    router.push('/contact')
  }
  
  
  return (
    <div className='container mt-[3%] mx-auto text-center'>
      <div className='text-2xl text-center text-white align-bottom'>{title}</div>
      <div className='text-white align-bottom'>{desc}</div>
      <button className='text-white p-5' onClick={goToContact}>{router.query.topic}</button>
    </div>
  )
}

export default Blog;

export async function getServerSideProps({
  resolvedUrl,
  params,
  ...rest
}) {
  const { offer: offerSlug } = params;

  const foundOffer = offer.offer.find(({ slug }) => slug === offerSlug);

  return {
    props: {
      offer: foundOffer
    },
  }
}