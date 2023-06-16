import React, { useState } from 'react'

export default function Tasks({ tasks, onChangeTodo, onDeleteTodo }) {
   return (
      <ul>
         {tasks.map(task => (
            <li key={task.id}>
               <Task todo={task} changeTodo={onChangeTodo} deleteTodo={onDeleteTodo} />
            </li>
         ))}
      </ul>
   )
}

function Task({ todo, changeTodo, deleteTodo }) {
   const [isEditing, setEditing] = useState(false)

   let content;

   if (isEditing) {
      content = (
         <>
            <input type="text" value={todo.title} onChange={e => changeTodo(
               {
                  ...todo,
                  title: e.target.value
               }
            )} />
            <button onClick={() => setEditing(false)}>Save</button>
         </>
      )


   } else {
      content = (
         <>
            {todo.title}
            <button onClick={() => setEditing(true)}>Edit</button>
         </>
      )

   }


   return (
      <>
         <input type='checkbox' checked={todo.done} onChange={e => changeTodo({
            ...todo,
            done: e.target.checked
         })} />
         {content}
         <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </>
   )
}
