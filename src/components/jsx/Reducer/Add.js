import React, { useState } from 'react'

export default function Add({addTask}) {
   const [title, setTitle] = useState('')


   return (
      <>
         <input type='text' onChange={
            e => setTitle(e.target.value)
         } />
         <button onClick={() => addTask(title)}>Add</button>
      </>
   )
}
