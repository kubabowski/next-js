import React from 'react';
import { useRouter } from 'next/router';
// import { getOffers } from '../api/db';
import Modal from '../../components/Modal';

const OfferDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

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

 
  const offer = dummyOffers.find((offer) => {
    console.log('Comparing:', offer.slug, slug);
    return offer.slug === slug;
  });

  if (!offer) {
    return <div>Offers not found</div>;
  }

  const { title, offerdesc, subtitle1, subtitle2, subtitle3, subtitle4, subtitle5, subtitle6, subtitle7, subdesc1, subdesc2, subdesc3, subdesc4, subdesc5, subdesc6, subdesc7, details } = offer;

  const goBack = () => {
    router.back();
  };

  return (
    <div className='container mx-auto text-center mt-[3%] relative mb-10 pt-20 md:pt-0'>
      <div className='sm:w-[90%] lg:w-[50%] mx-auto'>
        <div className='text-2xl text-center text-white align-bottom mb-5'>{title} </div> 
        <div dangerouslySetInnerHTML={{ __html: offerdesc }} className='text-white text-md align-bottom mx-auto sm:w-[90%] mb-10 font-extralight' />
        <div dangerouslySetInnerHTML={{ __html: subtitle1 }} className='text-white text-md align-bottom mx-auto sm:w-[90%] mb-2 font-medium tracking-wider' />
        <div dangerouslySetInnerHTML={{ __html: subdesc1 }} className='text-white text-md align-bottom mx-auto sm:w-[90%] mb-10 font-extralight' />
        <div dangerouslySetInnerHTML={{ __html: subtitle2 }} className='text-white text-md align-bottom mx-auto sm:w-[90%] mb-2 font-medium tracking-wider' />
        <div dangerouslySetInnerHTML={{ __html: subdesc2 }} className='text-white text-md align-bottom mx-auto sm:w-[90%] mb-10 font-extralight' />
        <div dangerouslySetInnerHTML={{ __html: subtitle3 }} className='text-white text-md align-bottom mx-auto sm:w-[90%] mb-2 font-medium tracking-wider' />
        <div dangerouslySetInnerHTML={{ __html: subdesc3 }} className='text-white text-md align-bottom mx-auto sm:w-[90%] mb-10 font-extralight' />
        <div dangerouslySetInnerHTML={{ __html: subtitle4 }} className='text-white text-md align-bottom mx-auto sm:w-[90%] mb-2 font-medium tracking-wider' />
        <div dangerouslySetInnerHTML={{ __html: subdesc4 }} className='text-white text-md align-bottom mx-auto sm:w-[90%] mb-10 font-extralight' />
        <div dangerouslySetInnerHTML={{ __html: subtitle5 }} className='text-white text-md align-bottom mx-auto sm:w-[90%] mb-2 font-medium tracking-wider' />
        <div dangerouslySetInnerHTML={{ __html: subdesc5 }} className='text-white text-md align-bottom mx-auto sm:w-[90%] mb-10 font-extralight' />
        <div dangerouslySetInnerHTML={{ __html: subtitle6 }} className='text-white text-md align-bottom mx-auto sm:w-[90%] mb-2 font-medium tracking-wider' />
        <div dangerouslySetInnerHTML={{ __html: subdesc6 }} className='text-white text-md align-bottom mx-auto sm:w-[90%] mb-10 font-extralight' />
        <div dangerouslySetInnerHTML={{ __html: subtitle7 }} className='text-white text-md align-bottom mx-auto sm:w-[90%] mb-2 font-medium tracking-wider' />
        <div dangerouslySetInnerHTML={{ __html: subdesc7 }} className='text-white text-md align-bottom mx-auto sm:w-[90%] mb-10 font-extralight' />
        {/* <div className='text-white align-bottom mx-auto sm:w-[90%] mb-2 font-medium'>   {subtitle4}  </div> */}
      </div>
      
      {details &&
        <Modal customClass={'font-medium text-lg tracking-wider'} className='text-white mb-5' text={details} label={`SZCZEGÓŁY`} />
      }
      <button className='text-white absolute top-0 left-0 flex items-center container' onClick={goBack}>
        <div className='mr-5'>
          <svg style={{fill: 'white', width: '40px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" id="arrow-left"><path d="m5.414 24 6.293-6.293-1.414-1.414L1.586 25l8.707 8.707 1.414-1.414L5.414 26H49v-2z"></path></svg>
         </div>
         <div>wróć</div>
      </button>
    </div>
  );
};

export default OfferDetails;

// export async function getServerSideProps() {
//   const offers = await getOffers();

//   return {
//     props: {
//       offers,
//     },
//   };
// }
