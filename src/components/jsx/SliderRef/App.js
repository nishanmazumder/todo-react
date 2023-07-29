import React, { useRef, useState } from 'react'
import { flushSync } from 'react-dom';
import "./Style.css";

export default function SliderNP() {
   const selectImg = useRef(null);
   const [index, setIndex] = useState(1)

   function handlePrv() {
      flushSync(() => {
         if (index > 0) {
            setIndex(index - 1)
         }
      })

      selectImg.current.scrollIntoView({
         behavior: 'smooth',
         block: 'nearest',
         inline: 'center'
      })
   }

   function handleNext() {
      flushSync(() => {
         if (index < imageList.length - 1) {
            setIndex(index + 1)
         }
      })

      selectImg.current.scrollIntoView({
         behavior: 'smooth',
         block: 'nearest',
         inline: 'center'
      })
   }

   return (
      <>
         <nav>
            <button onClick={() => handlePrv()}>Previous</button>
            <button onClick={() => handleNext()}>Next</button>
         </nav>

         <ul>
            {
               imageList.map((image, i) => {
                  return <li key={image.id}
                     className={
                        i === index ? "active" : ""
                     }
                     ref={
                        i === index ? selectImg : null
                     }>
                     <img src={image.url} alt={'Cat #' + image.id} />
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

