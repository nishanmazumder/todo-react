import React from 'react'

let count = 0;

function Item({ name, isPacked }) {

   count = count + 1

   return <li>
      {
         isPacked ? (
            <del>{name + " ✔"}</del>
         ) : (name + count)
      }
   </li>
}

export default function Condition() {
   return (
      <section>
         <h1>Sally Ride's Packing List</h1>
         <ul>
            <Item
               isPacked={true}
               name="Space suit"
            />
            <Item
               isPacked={false}
               name="Space suit"
            />
            <Item
               isPacked={false}
               name="Space suit"
            />
         </ul>
      </section>
   )
}
