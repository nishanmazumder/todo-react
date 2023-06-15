import React, { useState } from 'react'
import AddTask from './AddTask'
import TaskList from './TaskList';


let taskId = 0;
export default function TaskApp2() {

   const [allTask, setAllTask] = useState([
      { id: 0, title: 'Buy milk', done: true }
   ]);

   function handleAddTask(task) {
      setAllTask([
         ...allTask,
         {
            id: allTask.length++,
            title: task,
            done: false
         }
      ])
   }

   function handleDeleteTask(id) {
      setAllTask(allTask.filter(task => task.id !== id))
   }

   function handleOnchange(nexTodo){
      setAllTask(
         allTask.map(task => {
            if(task.id === nexTodo.id){
               return nexTodo;
            }else{
               return task;
            }
         })
      )
   }

   return (
      <>
         <AddTask addTodo={handleAddTask} />
         <TaskList allTask={allTask} onDeleteTodo={handleDeleteTask} onChangeTodo={handleOnchange}/>
      </>
   )
}
