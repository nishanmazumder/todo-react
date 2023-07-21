import { useContext, useState } from 'react';
import { ImageSizeContext } from './Context.js';
import { places } from './data.js';
import { getImageUrl } from './utils.js';

export default function App() {
   const [isLarge, setIsLarge] = useState(false);
   const imageSize = isLarge ? 150 : 100;

   return (
      <>
         <label>
            <input
               type="checkbox"
               checked={isLarge}
               onChange={e => {
                  setIsLarge(e.target.checked);
               }}
            />
            Use large images
         </label>
         <hr />
         <ImageSizeContext.Provider value={imageSize}>
            <List />
         </ImageSizeContext.Provider>
      </>
   )
}

function List({ imageSize }) {
   const listItems = places.map(place =>
      <li key={place.id}>
         <Place
            place={place}
         />
      </li>
   );
   return <ul>{listItems}</ul>;
}

function Place({ place, imageSize }) {
   return (
      <>
         <PlaceImage
            place={place}
         />
         <p>
            <b>{place.name}</b>
            {': ' + place.description}
         </p>
      </>
   );
}

function PlaceImage({ place }) {
   const imageSize = useContext(ImageSizeContext);

   return (
      <img
         src={getImageUrl(place)}
         alt={place.name}
         width={imageSize}
         height={imageSize}
      />
   );
}
