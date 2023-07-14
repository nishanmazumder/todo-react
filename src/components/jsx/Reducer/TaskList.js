import React, { useState } from 'react'

function TaskList({ tasks, onChange }) {


   return (
      <ul>
         {tasks.map(task =>
            <Task key={task.id} task={task} newTask={onChange} />
         )}
      </ul>


   )
}

function Task({ task, newTask }) {
   const [edit, isEdit] = useState(false)

   let content;

   if (edit) {
      return content = (
         <li>
            <input value={task.text} onChange={e => newTask(
               {
                  ...task,
                  text: e.target.value
               }
            )} />
            <button onClick={() => isEdit(false)}>Save</button>
         </li>
      )
   } else {
      return content = (
         <li>
            {task.text}
            <button onClick={() => isEdit(true)}>Edit</button>
         </li>
      )
   }
}

export default TaskList
