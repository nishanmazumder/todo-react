import { useState } from 'react';
import { initialTravelPlan } from './places.js';

export default function TravelPlan() {
   const [plan, setPlan] = useState(initialTravelPlan);


   function handleOnChange() { }


   const root = plan[0];
   const planetIds = root.childIds

   return (
      <ol>
         {planetIds.map(id =>
            <Place key={id} id={id} placesById={plan} onChange={handleOnChange}></Place>
         )}
      </ol>
   )

}

function Place({ id, placesById, onChange }) {
   const places = placesById[id]
   const placesOnPlanet = places.childIds



   return (
      <li>{places.title}</li>
   )
}
