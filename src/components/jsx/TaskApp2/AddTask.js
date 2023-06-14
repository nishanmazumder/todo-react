import React, { useState } from 'react'

export default function AddTask({addTodo}) {

   const [task, setTask] = useState('');

  return (
    <>
      <input type='text' value={task} onChange={e => setTask(e.target.value)}/>
      <button onClick={()=>{
         setTask('');
         addTodo(task)
      }}>Add</button>
    </>
  )
}
