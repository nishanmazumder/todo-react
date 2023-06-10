import React, { useState } from 'react'

export default function Counter() {
   const [counters, setCounters] = useState([0, 0, 0]);

   function handleCounters(index) {
      const nextCounters = counters.map((el, i) => {
         if (i === index) {
            return el + 1;
         } else {
            return el;
         }
      })

      setCounters(nextCounters);
   }

   return (
      <ul>
         {counters.map((el, i) => (
            <li key={i}>{el}
               <button onClick={() => { handleCounters(i) }}>+1</button>
            </li>
         ))}
      </ul>
   )
}
