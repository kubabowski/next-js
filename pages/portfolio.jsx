import React from 'react'
import Lightboxv1 from "../components/Lightbox"
import { getPortfolio } from './api/db';

const Portfolio = ({ portfolio }) => {
  return (
    <Lightboxv1 portfolio={portfolio} />
  )
}

export async function getServerSideProps() {
  const portfolio = await getPortfolio();

  return {
    props: {
      portfolio,
    },
  };
}

export default Portfolio;