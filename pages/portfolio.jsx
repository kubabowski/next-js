import { title } from 'process'
import React, { useEffect, useState, useRef} from 'react'
import Slider from '../components/Slider'
import data from "../data/images.json";

  const portfolio = () => {
    
    
  //   const [height, setHeight] = useState(0)
  //   const ref = useRef(null)

  // useEffect(() => {
    
  //   function handleResize() {
  //     setHeight(ref.current.clientWidth)
  //   }
  //   window.addEventListener("resize", handleResize);
  //   handleResize();
    
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);



  
  return (
    <div  className=' container port-container'>
      
      <Slider />
      <div className='text-white mt-60 container text-xl'>
        
        Portfolio
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
      </div>
    </div>
  )
}

export default portfolio;