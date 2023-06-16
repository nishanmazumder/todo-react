import React, { useState } from 'react'

export default function Lists({ tasks, onChangeTodo, onDeleteTodo }) {
   return (
      <ul>
         {tasks.map(task => (
            <li key={task.id}>
               <Task task={task} changeTodo={onChangeTodo} deleteTodo={onDeleteTodo} />
            </li>
         ))}
      </ul>
   )
}

function Task({ task, changeTodo, deleteTodo }) {
   const [isEditing, setIsEdit] = useState(false);
   let content = "";

   if (isEditing) {
      content = (
         <>
            <input value={task.title} onChange={e => changeTodo({
               ...task,
               title: e.target.value
            })} />
            <button onClick={() => setIsEdit(false)}>Save</button>
         </>
      )
   } else {
      content = (
         <>
            {task.title}
            <button onClick={() => setIsEdit(true)}>Edit</button>
         </>
      )
   }

   return (
      <>
         <input type='checkbox' checked={task.done} onChange={e => changeTodo({
            ...task,
            done: e.target.checked
         })} />

         {content}

         <button onClick={() => deleteTodo(task.id)}>Delete</button>
      </>
   );
}
