import React, { useState, useEffect } from 'react';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import data from "../data/danePortfolio.json";
import 'react-18-image-lightbox/style.css'; 

const Lightboxv1 = () => {
  const [rowCols, setRowCols] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const imagesQuantity = data.images.length;
    const rowCols = Array.from(
      {length: imagesQuantity}, () => [randomNumber(4), randomNumber(3), randomNumber(10)]
    );
    setRowCols(rowCols);
  }, [data]);

  const randomNumber = (limit) => Math.floor(Math.random() * limit) + 1;

  const images = data.images.map((item, index) => ({
    src     : item.photo_url,
    caption: item.desc,
    index
  }));

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
    <div className="container">
      <div className="wrapper">
        {rowCols.length > 0 &&
          data.images.map((item, index) => (
            <div
              key={index}
              className={`wrapper-images height-${rowCols[index][0]} width-${rowCols[index][1]} padding-${rowCols[index][2]}`}
            >
              <img
                src={item.photo_url}
                alt={item.desc}
                onClick={() => openLightbox(index)}
                className="portfolio-img"
              />
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
