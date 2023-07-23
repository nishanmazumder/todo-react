import React from 'react'

export default function Slider() {
   return (
      <>
         <ul style={{listStyle: 'none'}}>
            <li style={{display: 'inline-block', padding: '10px'}}>
               <button>3</button>
            </li>
            <li style={{display: 'inline-block', padding: '10px'}}>
               <button>6</button>
            </li>
            <li style={{display: 'inline-block', padding: '10px'}}>
               <button>9</button>
            </li>
         </ul>
         <ul style={{listStyle: 'none', whiteSpace: 'nowrap'}}>
            {imageList.map(image => (
               <li style={{display: 'inline-block', padding: '10px'}} key={image.id}>
                  <img src={image.url}/>
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
