import React, { useState } from 'react'

export default function TaskList({ allTask, onDeleteTodo, onChangeTodo }) {
   return (
      <ul>
         {
            allTask.map((task) => (
               <li key={task.id}>
                  <Task task={task} onDelete={onDeleteTodo} onChange={onChangeTodo} />
               </li>
            ))
         }
      </ul>
   )
}


function Task({ task, onDelete, onChange }) {
   const [isEditing, setEditing] = useState(false)
   let todoContent;

   if (isEditing) {
      todoContent = (
         <>
            <input value={task.title} onChange={e => e.target.value} />
            <button onClick={() => { setEditing(false) }}>Save</button>
         </>
      )
   } else {
      todoContent = (
         <>
            {task.title}
            <button onClick={() => { setEditing(true) }}>Edit</button>
         </>
      )
   }


   return (
      <label>
         <input type='checkbox' checked={task.done} onChange={e => {
            onChange({
               ...task,
               done: e.target.checked
            })
         }} />
         {todoContent}
         <button onClick={() => onDelete(task.id)}>Delete</button>
      </label>
   )
}
