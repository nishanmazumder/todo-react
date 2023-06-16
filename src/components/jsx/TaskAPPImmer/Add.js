import React, { useState } from 'react'

export default function Add({ tasks, addTask }) {
   const [title, setTitle] = useState('')

   return (
      <>
         <input value={title} onChange={e => setTitle(e.target.value)} />
         <button onClick={() => {
            setTitle('')
            addTask(title)
         }}>Add</button>
      </>
   )
}
