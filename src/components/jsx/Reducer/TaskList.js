import React, { useState } from 'react'

function TaskList({ allTasks, onChange, onDelete }) {
   return (
      <ul>
         {allTasks.map(task =>
            <li key={task.id}>
               <Task task={task} changeTask={onChange} deleteTask={onDelete} />
            </li>
         )}
      </ul>
   )
}

function Task({ task, changeTask, deleteTask }) {
   const [edit, isEdit] = useState(false)
   let content;

   if (edit) {
      content = (
         <>
            <input type='text' value={task.text} onChange={e => changeTask(
               {
                  ...task,
                  text: e.target.value
               }
            )} />
            <button onClick={() => isEdit(false)}>Save</button>
         </>
      )
   } else {
      content = (
         <>
            {task.text}
            <button onClick={() => isEdit(true)}>Edit</button>
         </>
      )
   }

   return (
      <>
         {content}
         <button onClick={() => deleteTask(task.id)}>Delete</button>
      </>
   )
}

export default TaskList
