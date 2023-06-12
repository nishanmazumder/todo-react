import React, { useState } from "react";

export default function CheckList({ userList }) {
   const [listOne, setListOne] = useState(userList);
   const [listTwo, setListTwo] = useState(userList);

   function handleToggle(userId, hasChecked) {
      setListOne(
         listOne.map(el => {

            console.log(...el);

            if (el.id === userId) {
               return {
                  ...el,
                  seen: hasChecked
               }
            }else{
               return el
            }
         })
      )
   }

   return (
      <ListItem listItems={listOne} onToggle={handleToggle} />
   );

}


function ListItem({ listItems, onToggle }) {
   return (
      <ul>
         {listItems.map(el => (
            <li key={el.id}>
               <label>
                  <input type="checkbox" checked={el.seen} onChange={e => {
                     onToggle(el.id, e.target.checked);
                  }} />
                  {el.title}
               </label>
            </li>
         ))}
      </ul>
   );
}
