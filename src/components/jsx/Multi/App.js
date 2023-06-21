import { useState } from 'react';
import { letters } from './data.js';
import Letter from './Letter.js';

export default function MailClient() {
   const [selected, setSelected] = useState([])

   function handleToggle(toggleId) {
      if (!selected.includes(toggleId)) {
         setSelected([
            ...selected,
            toggleId
         ])
      } else {
         setSelected(selected.filter(id => id !== toggleId))
      }

   }
   
   console.log(selected);
   return (
      <ul>
         {
            letters.map(letter => (
               <Letter
                  key={letter.id}
                  letter={letter}
                  isChecked={
                     selected.includes(letter.id)
                  }
                  selectToggle={handleToggle}
               ></Letter>
            ))
         }
      </ul>
   )
}
