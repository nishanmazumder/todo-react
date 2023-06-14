import React from 'react'

export default function TaskList({ allTask }) {
   return (
      <ul>
         {
            allTask.map((task) => (
               <Task key={task.id} task={task} />
            ))
         }
      </ul>
   )
}


function Task({ task }) {
   return (
      <li>{task.title}</li>
   )
}
