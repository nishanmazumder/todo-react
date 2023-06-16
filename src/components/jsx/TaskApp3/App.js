import React, { useState } from 'react'
import Add from './Add';
import Lists from './List';

export default function Todo() {

   const [task, allTask] = useState([
      { id: 0, title: "test", done: true }
   ]);

   function handleAddTask(title) {
      allTask([
         ...task,
         {
            id: task.length,
            title: title,
            done: false
         }
      ])
   }

   function handleOnChange(newTodo) {
      allTask(
         task.map(el => {
            if (el.id === newTodo.id) {
               console.log(newTodo);
               return newTodo
            } else {
               return el
            }
         })
      )
   }

   function handleDeleteTodo(id) {
      allTask(
         task.filter(task => task.id !== id)
      )
   }

   return (
      <>
         <Add addTask={handleAddTask} />
         <Lists tasks={task} onChangeTodo={handleOnChange} onDeleteTodo={handleDeleteTodo} />
      </>
   )
}
