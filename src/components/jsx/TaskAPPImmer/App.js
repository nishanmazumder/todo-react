import React from 'react'
import { useImmer } from 'use-immer'
import Add from './Add';
import Tasks from './Tasks';

let nextId = 1;

export default function Immer() {

   const [tasks, setTask] = useImmer([
      { id: 0, title: "Immer test", done: true }
   ]);

   function handleAddTask(title) {
      setTask(draft => {
         draft.push({
            id: nextId++,
            title: title,
            done: false
         })
      })
   }

   function handleOnChange(newTodo) {
      setTask(
         tasks.map(el => {
            if (el.id === newTodo.id) {
               return newTodo
            } else {
               return el
            }
         })
      )
   }

   function handleDeleteTodo(id) {
      setTask(tasks.filter(el => el.id !== id))
   }


   return (
      <>
         <Add tasks={tasks} addTask={handleAddTask} />
         <Tasks tasks={tasks} onChangeTodo={handleOnChange} onDeleteTodo={handleDeleteTodo} />
      </>
   )
}
