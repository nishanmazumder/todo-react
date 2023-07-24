import React, { useRef } from 'react'
import "./Style.css";

export default function Slider() {

   const imgRef = useRef(0);

   function handleScrol(itemID) {
      const map = getMap();
      const node = map.get(itemID);
      node.scrollIntoView({
         behavior: 'smooth',
         block: 'nearest',
         inline: 'center'
      });
   }

   function getMap() {
      if (!imgRef.current) {
         return imgRef.current = new Map();
      }

      return imgRef.current
   }

   return (
      <>
         <nav>
            <button onClick={() => handleScrol(3)}>3</button>
            <button onClick={() => handleScrol(6)}>6</button>
            <button onClick={() => handleScrol(9)}>9</button>
         </nav>
         <ul>
            {imageList.map(image => (
               <li key={image.id} ref={node => {
                  const map = getMap();
                  if (node) {
                     map.set(image.id, node)
                  } else {
                     map.delete(image.id)
                  }
               }}>
                  <img src={image.url} />
               </li>
            ))}
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
