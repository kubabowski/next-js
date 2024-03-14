import React from 'react';
import Link from 'next/link';
import { getOffers } from '../api/db';


const IndexPage = () => {

  const dummyOffers = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  title: `Offer ${index + 1}`,
  slug: `offer-${index + 1}`,
  offerdesc: `Description for Offer ${index + 1}`,
  subtitle1: `Subtitle 1 for Offer ${index + 1}`,
  subdesc1: `Subdescription 1 for Offer ${index + 1}`,
  subtitle2: `Subtitle 2 for Offer ${index + 1}`,
  subdesc2: `Subdescription 2 for Offer ${index + 1}`,
  subtitle3: `Subtitle 3 for Offer ${index + 1}`,
  subdesc3: `Subdescription 3 for Offer ${index + 1}`,
  subtitle4: `Subtitle 4 for Offer ${index + 1}`,
  subdesc4: `Subdescription 4 for Offer ${index + 1}`,
  subtitle5: `Subtitle 5 for Offer ${index + 1}`,
  subdesc5: `Subdescription 5 for Offer ${index + 1}`,
  subtitle6: `Subtitle 6 for Offer ${index + 1}`,
  subdesc6: `Subdescription 6 for Offer ${index + 1}`,
  subtitle7: `Subtitle 7 for Offer ${index + 1}`,
  subdesc7: `Subdescription 7 for Offer ${index + 1}`,
  details: `Details for Offer ${index + 1}`,
  offer_order: index + 1, // Add offer_order property
}));

  const sortedOffers = dummyOffers.sort((a, b) => a.offer_order - b.offer_order);

  return (
    <div className='flex flex-col justify-center items-center mt-[5rem] offer-container'>
      {sortedOffers.map((offer) => (
        <div className='container text-center mb-5' key={offer.id}>
          <Link href={`/oferta/${offer.slug}`}>
            <span className='text-white text-md lg:text-lg  animated-underline'>{offer.title}</span>
          </Link>
        </div>
      ))
      }
    </div>
  );
};

// export async function getServerSideProps() {
//   const offers = await getOffers();
//   return {
//     props: {
//       offers,
//     },
//   };
// }

export default IndexPage;
