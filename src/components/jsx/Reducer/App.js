import React, { useReducer } from 'react'
import Add from './Add';
import TaskList from './TaskList';
import tasksReducer from './Reducer';

const initialTasks = [
   { id: 0, text: 'Visit Kafka Museum', done: true },
   { id: 1, text: 'Watch a puppet show', done: false },
   { id: 2, text: 'Lennon Wall pic', done: false },
];

let nextId = 3;

function Reducer() {
   const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

   function handleAddTask(text) {
      dispatch({
         type: "add",
         id: nextId++,
         text: text
      })
   }

   function handleOnChange(task) {

      console.log(task);

      dispatch({
         type: 'edit',
         task: task
      })
   }

   return (
      <>
         <Add addTask={handleAddTask} />
         <TaskList tasks={tasks} onChange={handleOnChange} />
      </>
   )
}

export default Reducer
