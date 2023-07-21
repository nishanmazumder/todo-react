import { useState } from 'react'
import { TaskDispatchContext, useTaskDispatch, useTasks } from './ContextReducer'

export default function TaskList() {
   const tasks = useTasks();

   return (
      <ul>
         {
            tasks.map(task => (
               <li key={task.id}>
                  <Task task={task} />
               </li>
            ))
         }
      </ul>
   )
}

function Task({ task }) {
   const [isEdit, setIsEdit] = useState(false);
   const dispatch = useTaskDispatch();
   let content = "";

   if (isEdit) {
      content = (
         <>
            <input
               type='text'
               value={task.title}
               onChange={e =>
                  dispatch({
                     type: 'change',
                     task: {
                        ...task,
                        title: e.target.value
                     }

                  })
               } />
            <button onClick={() =>
               setIsEdit(false)
            }>Save</button>
         </>
      )
   } else {
      content = (
         <>
            {task.title}
            <button onClick={() =>
               setIsEdit(true)
            }>Edit</button>
         </>
      )
   }

   return (
      <>
         <input
            type='checkbox'
            checked={task.done}
            onChange={e =>
               dispatch({
                  type: 'change',
                  task: {
                     ...task,
                     done: e.target.checked
                  }
               })
            } />
         {content}
         <button onClick={() => {
            dispatch({
               type: 'delete',
               id: task.id
            })
         }}>Delete</button>
      </>
   )
}
