import React, { useState } from 'react';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import data from "../data/danePortfolio.json";
import 'react-18-image-lightbox/style.css'; 
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import data from "../data/images.json";





const Lightboxv1 = () => {
  const [rowCols, setRowCols] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const randomNumber = ( limit ) => Math.floor( Math.random() * limit) + 1;
  React.useEffect(() => {

    const imagesQuantity = data.images.length;
    const rowCols = Array.from(
      {length: `${imagesQuantity}`}, () => [randomNumber(4), randomNumber(3), randomNumber(10)]
    );

    setRowCols(rowCols);

    
  }, [data]);


  const images = data.images.map((item, index) => (
    [index,
      { 
        photo_id: item.photo_id,
        desc    : item.desc, 
        text    : item.text
    }]
   
  ))
  console.log(images);
  

  const jpg = "jpg";
  const png = "png";
  

  return (
    <div className="container">
      <div className="wrapper">
       {rowCols.length > 0 && data.images.map((item, index) => (
        <div 
          key={index} 
          className={`wrapper-images h-${rowCols[index][0]} v-${rowCols[index][1]} p-${rowCols[index][2]}`}
        >
          
          <img
            src={`images/${item.photo_id}.${images[index].slice(-3) == "jpg" ? jpg : png }`}
            alt={item.desc}
            onClick={ () => {setPhotoIndex(images[index][1].photo_id); setIsOpen(true); } }
            className="portfolio-img"
          />
         
        </div>
      ))} 

      {isOpen && (
        <Lightbox
          mainSrc={`images/${photoIndex}.png`}
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
           imageCaption = { images[photoIndex][1].text}
          
        />
      )}
      </div>
    </div>
  );
};

export default Lightboxv1;