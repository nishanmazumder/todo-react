import React, { useState } from 'react'
import AddTask from './AddTask'
import TaskList from './TaskList';


let taskId = 0;
export default function TaskApp2() {

   const [allTask, setAllTask] = useState([
      { id: 0, title: 'Buy milk', done: true }
   ]);

   function handleAddTask(task){
      setAllTask([
         ...allTask,
         {
            id: allTask.length++,
            title: task,
            done: false
         }
      ])
   }

  return (
    <>
    <AddTask addTodo={handleAddTask}/>
    <TaskList allTask={allTask}/>
    </>
  )
}
