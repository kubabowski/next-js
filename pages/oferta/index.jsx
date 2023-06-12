import React from 'react';
import Link from 'next/link';
import { getOffers } from '../api/db';


const IndexPage = ({ offers }) => {

  const sortedOffers = offers.sort((a, b) => a.offer_order - b.offer_order);

  return (
    <div className='flex flex-col justify-center items-center mt-[5rem] offer-container'>
      {sortedOffers.map((offer) => (
        <div className='container text-center mb-5' key={offer.id}>
          <Link href={`/oferta/${offer.slug}`}>
            <span className='text-white text-lg  animated-underline'>{offer.title}</span>
          </Link>
        </div>
      ))
      }
    </div>
  );
};

export async function getServerSideProps() {
  const offers = await getOffers();
  return {
    props: {
      offers,
    },
  };
}

export default IndexPage;
