import React, { useState } from "react";
import { useImmer } from "use-immer";

export default function CheckList({ userList }) {
   const [listOne, setListOne] = useState(userList);
   const [listTwo, setListTwo] = useImmer(userList);

   function handleToggleOne(userId, hasChecked) {
      setListOne(
         listOne.map(el => {
            if (el.id === userId) {
               return {
                  ...el,
                  seen: hasChecked
               }
            } else {
               return el
            }
         })
      )
   }

   // immer way
   function handleToggleTwo(userId, hasChecked) {
      setListTwo(
         draft => {
            const user = draft.find(a => a.id === userId)
            user.seen = hasChecked
         }
      );
   }

   return (
      <>
         <ListItem listItems={listOne} onToggle={handleToggleOne} />
         <ListItem listItems={listTwo} onToggle={handleToggleTwo} />
      </>
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
