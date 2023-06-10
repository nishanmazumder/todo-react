import { useEffect, useState } from "react";

let userId = 0;

let initialArtists = [
   { id: 0, name: 'Marta Colvin Andrade' },
   { id: 1, name: 'Lamidi Olonade Fakeye' },
   { id: 2, name: 'Louise Nevelson' },
];

export default function Array() {
   const [name, setName] = useState('');
   const [persons, setPerson] = useState([]);

   function addPerson() {
      setPerson([
         ...persons,
         {
            id: userId++,
            name: name
         }
      ]);
   }

   function deletePerson(id){
      setPerson(persons.filter(person => person.id !== id))
   }

   return (
      <>
         <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={addPerson}>Add</button>
         </div>
         <ul>
            {persons.map(person => (
               <li key={person.id}>{person.name}
                  <button onClick={()=>{deletePerson(person.id)}}>
                     Delete
                  </button>
               </li>
            ))}
         </ul>
      </>
   );
}
