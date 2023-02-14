
import React, { useState, useEffect } from "react";
import data from "../data/images.json";
import Modal from "./Modal";

function Slider(props) {
  const [clickedImg, setClickedImg] = useState(null);
  const [clickedImgDesc, setClickedImgDesc] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  
  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
    setClickedImgDesc(item.text);
    
  };

  const handleRotationRight = () => {
    const totalLength = data.data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data.data[0].link;
      const newDesc = data.data[0].text;
      setClickedImg(newUrl);
      setClickedImgDesc(newDesc);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    const newDesc = newUrl[0].text;
    setClickedImg(newItem);
    setClickedImgDesc(newDesc);
    setCurrentIndex(newIndex);
  };

  const handleRotationLeft = () => {
    const totalLength = data.data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data.data[totalLength - 1].link;
      const newDesc = data.data[totalLength - 1].text;
      setClickedImg(newUrl);
      setClickedImgDesc(newDesc);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.data.filter((item) => data.data.indexOf(item) === newIndex);
    const newItem = newUrl[0].link;
    const newDesc = newUrl[0].text;
    setClickedImg(newItem);
    setClickedImgDesc(newDesc);
    setCurrentIndex(newIndex);
  };

  const randomNumber = ( limit ) => Math.floor( Math.random() * limit) + 1;
  const [rowCols, setRowCols] = useState([]);

  useEffect(() => {
    const imagesQuantity = data.data.length;
    const rowCols = Array.from(
      {length: `${imagesQuantity}`}, () => [randomNumber(2), randomNumber(3), randomNumber(10)]
    );
    setRowCols(rowCols);
  }, [data]);
  
 
  return (
    
    <div className="wrapper">
      
      {rowCols.length > 0 && data.data.map((item, index) => (
          <div 
            key={index} 
            className={`wrapper-images h-${rowCols[index][0]} v-${rowCols[index][1]} p-${rowCols[index][2]}`}
          >
            {/* {index} */}
            
            <img
              src={item.link}
              alt={item.text}
              onClick={() => handleClick(item, index)}
              className="portfolio-img "
            />
            {/* <h2>{item.text}</h2> */}
          </div>
        ))}
      <div>
        {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            handleRotationRight={handleRotationRight}
            setClickedImg={setClickedImg}
            handleRotationLeft={handleRotationLeft}
            clickedImgDesc = {clickedImgDesc}
          />
        )}
      </div>
    </div>
  );
}


export default Slider;