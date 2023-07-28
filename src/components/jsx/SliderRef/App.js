import React, { useRef, useState } from 'react'
import "./Style.css";

export default function SliderNP() {
   const selectImg = useRef(null);
   const [index, setIndex] = useState(0)

   console.log(selectImg);

   function handleScroll() {

   }

   return (
      <>
         <nav>
            <button onClick={() => handleScroll(3)}>Previous</button>
            <button onClick={() => handleScroll(6)}>Next</button>
         </nav>

         <ul>
            {
               imageList.map((image, i) => {
                  return <li key={image.id} ref={
                     i === index ? selectImg : null
                  }>
                     <img src={image.url} />
                  </li>
               })
            }
         </ul>
      </>
   )
}

const imageList = [];
for (let i = 0; i < 10; i++) {
   imageList.push({
      id: i,
      url: 'https://placekitten.com/250/200?image=' + i
   })
}

