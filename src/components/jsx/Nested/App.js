import { useState } from 'react';
import { initialTravelPlan } from './places.js';

export default function TravelPlan() {
   const [plan, setPlan] = useState(initialTravelPlan);

   function handleOnChange(parentId, childId) {
      const parentIds = plan[parentId];
      const newPlaces = {
         ...plan,
         childIds: parentIds.childIds.filter(id => id !== childId)
      };
      setPlan({
         ...plan,
         [parentId]: newPlaces
      });
   }

   const root = plan[0];
   const planetIds = root.childIds;

   return (
      <ol>
         {planetIds.map(id =>
            <Place // Earth, Mars, Moon
               key={id}
               id={id}
               placesById={plan}
               parentId={0}
               onChange={handleOnChange}>
            </Place>
         )}
      </ol>
   )

}

function Place({ id, placesById, parentId, onChange }) {
   const places = placesById[id]
   const placesOnPlanet = places.childIds

   return (
      <li>{places.title}
         <button onClick={() => {
            onChange(parentId, id);
         }}>
            Complete
         </button>
         {placesOnPlanet.length > 0 &&
            <ol>
               {placesOnPlanet.map(childId =>
                  <Place
                     key={childId}
                     id={childId}
                     parentId={id}
                     placesById={placesById}
                     onChange={onChange}
                  />
               )}
            </ol>
         }
      </li>
   )
}
