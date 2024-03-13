import React, { useState, useEffect } from 'react';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import Image from 'next/image';


const Lightboxv1 = ({ portfolio }) => {
  const [rowCols, setRowCols] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  

  // useEffect(() => {
  //   const imagesQuantity = portfolio.length;
  //   const rowCols = Array.from(
  //     { length: imagesQuantity },
  //     () => [randomNumber(4), randomNumber(3), randomNumber(10)]
  //   );
  //   setRowCols(rowCols);
  // }, [portfolio]);

  const randomNumber = (limit) => Math.floor(Math.random() * limit) + 1;

  // const images = portfolio.map((item, index) => ({
  //   src: `/${item.photo_url}`,
  //   caption: item.photo_desc,
  //   index,
  // }));

  const generateDummyData = () => {
  const dummyData = [];

  for (let i = 1; i <= 20; i++) {
    const item = {
      photo_url: `images/${i}.png`,
      photo_desc: `Description for Image ${i}`,
    };

    dummyData.push(item);
  }

  return dummyData;
};

// Usage in your component
const portfolioDummyData = generateDummyData();

const images = portfolioDummyData.map((item, index) => ({
    src: `/${item.photo_url}`,
    caption: item.photo_desc,
    index,
  }));


   useEffect(() => {
    const imagesQuantity = portfolioDummyData.length;
    const rowCols = Array.from(
      { length: imagesQuantity },
      () => [randomNumber(4), randomNumber(3), randomNumber(10)]
    );
    setRowCols(rowCols);
  }, []);
  
  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const goToPrevious = () => {
    setPhotoIndex((photoIndex + images.length - 1) % images.length);
  };

  const goToNext = () => {
    setPhotoIndex((photoIndex + 1) % images.length);
  };

  return (
    <div className="container mx-auto">
      <div className="wrapper">
        {rowCols.length > 0 &&
          portfolioDummyData.map((item, index) => (
            <div
              key={index}
              className={`wrapper-images height-${rowCols[index][0]} width-${rowCols[index][1]} padding-${rowCols[index][2]}`}
            >
              <img
                src={`/${item.photo_url}`}
                alt={item.photo_desc}
                onClick={() => openLightbox(index)}
                className="portfolio-img"
              />

            {/* <Image 
              src={`/${item.photo_url}`}
              alt={item.photo_desc}
              className="portfolio-img"
              width='500'
              height='500'
              onClick={() => openLightbox(index)}
              
            /> */}
            </div>
          ))}
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex].src}
          nextSrc={images[(photoIndex + 1) % images.length].src}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => goToPrevious()}
          onMoveNextRequest={() => goToNext()}
          enableZoom={false}
          imageCaption={images[photoIndex].caption}
        />
      )}
    </div>
  );
};



export default Lightboxv1;
