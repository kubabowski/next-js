import React, { useState } from 'react';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import data from "../data/danePortfolio.json";
import 'react-18-image-lightbox/style.css'; 




const Lightboxv1 = () => {
  const [rowCols, setRowCols] = useState([]);
  const [photoIndex, setPhotoIndex] = useState({
    photoId: null,
    photoText: "",
    photoNumber: null
  });
  // const [descIndex, setDescIndex] = useState(0);
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
            onClick={ () => {
              setPhotoIndex( {
                photoId: images[index][1].photo_id,
                photoText: images[index][1].desc,
                photoNumber: images[index]
              });
              console.log(photoIndex);
              // setDescIndex(images[index][1].photo_id) 
              setIsOpen(true); 
            } }
            className="portfolio-img"
          />
         
        </div>
      ))} 

      {isOpen && (
        <Lightbox
          mainSrc={`images/${photoIndex.photoId}.png`}
          nextSrc={images[(photoIndex.photoNumber + 1) % images.length]}
          prevSrc={images[(photoIndex.photoNumber + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex.photoNumber + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex.photoNumber + 1) % images.length)
          }
          enableZoom = { false }
           imageCaption = { photoIndex.photoText}
          
        />
      )}
      </div>
    </div>
  );
};

export default Lightboxv1;