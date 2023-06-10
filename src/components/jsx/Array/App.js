import { useState } from "react";
import Counter from "./Counter";

let userId = 0;

// let initialArtists = [
//    { id: 0, name: 'Marta Colvin Andrade' },
//    { id: 1, name: 'Lamidi Olonade Fakeye' },
//    { id: 2, name: 'Louise Nevelson' },
// ];

export default function Array() {
   const [name, setName] = useState('');
   const [persons, setPerson] = useState([]);
   const [hasInsert, setHasInsert] = useState(false)

   function addPerson() {

      const insertId = 1;
      let newPerson = [
         ...persons,
         {
            id: userId++,
            name: name
         }
      ];

      setPerson(newPerson);

      console.log(persons);

      if (hasInsert) { // insert to 2nd position
         newPerson = [
            ...persons.slice(0, insertId),
            {
               id: userId++,
               name: name
            },
            ...persons.slice(insertId)
         ];

         setPerson(newPerson);
      }

   }

   function deletePerson(id) {
      setPerson(persons.filter(person => person.id !== id))
   }

   return (
      <>
         <div>
            <button style={{
               background: hasInsert ? 'green' : 'yellow'
            }} onClick={() => {
               setHasInsert(true)
            }}>Insert 2nd position.</button>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={addPerson}>Add</button>
         </div>
         <ul>
            {persons.map(person => (
               <li key={person.id}>{person.name}
                  <button onClick={() => { deletePerson(person.id) }}>
                     Delete
                  </button>
               </li>
            ))}
         </ul>
         <div>
            <Counter />
         </div>
      </>
   );
}
