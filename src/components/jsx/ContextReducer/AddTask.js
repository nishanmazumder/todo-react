import { useContext, useState } from "react";
import { TaskContext, TaskDispatchContext } from "./ContextReducer";

export default function AddTask() {
   const [text, setText] = useState('');
   const tasks = useContext(TaskContext)
   const dispatch = useContext(TaskDispatchContext)

   return (
      <>
         <input type="text"
            onChange={e =>
               setText(e.target.value)
            }
         />
         <button onClick={() => {
            setText('');
            dispatch({
               type: 'add',
               id: tasks.length,
               text: text,
               done: false
            })
         }
         }>Add</button>
      </>
   )
}
