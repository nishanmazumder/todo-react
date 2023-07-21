import { createContext, useContext, useReducer } from 'react'

export const TaskContext = createContext(null);
export const TaskDispatchContext = createContext(null);

const initialTodos = [
   { id: 0, title: 'Buy milk', done: true },
   { id: 1, title: 'Eat tacos', done: false },
   { id: 2, title: 'Brew tea', done: false },
];

export default function TaskProvider({ children }) {
   const [tasks, dispatch] = useReducer(taskReducer, initialTodos);

   console.log(tasks);

   return (
      <TaskContext.Provider value={tasks}>
         <TaskDispatchContext.Provider value={dispatch}>
            {children}
         </TaskDispatchContext.Provider>
      </TaskContext.Provider>
   )
}

export function useTasks() {
   return useContext(TaskContext)
}

export function useTaskDispatch() {
   return useContext(TaskDispatchContext)
}

function taskReducer(tasks, action) {

   switch (action.type) {
      case 'add': {
         return [
            ...tasks,
            {
               id: action.id,
               title: action.text,
               done: action.done
            }
         ]
      }

      case 'change': {
         return tasks.map(prvTask => {
            if (prvTask.id === action.task.id) {
               return action.task
            } else {
               return prvTask
            }
         })
      }

      case 'delete': {
         return tasks.filter(task => task.id !== action.id)
      }

      default:
         throw Error('Error: ' + action.type)
   }
}
