import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import data from "../data/images.json";
import 'react-image-lightbox/style.css'; 




const Lightboxv1 = () => {
  const [rowCols, setRowCols] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const randomNumber = ( limit ) => Math.floor( Math.random() * limit) + 1;
  React.useEffect(() => {

    const imagesQuantity = data.data.length;
    const rowCols = Array.from(
      {length: `${imagesQuantity}`}, () => [randomNumber(2), randomNumber(3), randomNumber(10)]
    );

    setRowCols(rowCols);

    
  }, [data]);


  const images = data.data.map((item, index) => (
    [ item.link, index]
   
  ))

  const imageOnClick = () => {
    setIsOpen(true);
    setPhotoIndex();
  }
  

  return (
    <div className="container">
      <div className='wrapper'>
       {rowCols.length > 0 && data.data.map((item, index) => (
        <div 
          key={index} 
          className={`wrapper-images h-${rowCols[index][0]} v-${rowCols[index][1]} p-${rowCols[index][2]}`}
        >
        
          
          <img
            src={item.link}
            alt={item.text}
            onClick={imageOnClick }
            className="portfolio-img "
          />
         
        </div>
      ))} 

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          enableZoom = { false }
        />
      )}
      </div>
    </div>
  );
};

export default Lightboxv1;