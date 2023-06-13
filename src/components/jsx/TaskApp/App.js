import { useState } from 'react';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

let nextId = 3;
const initialTodos = [
   { id: 0, title: 'Buy milk', done: true },
   { id: 1, title: 'Eat tacos', done: false },
   { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
   const [todos, setTodos] = useState(
      initialTodos
   );

   function handleAddTodo(title) {
      const newTodos = [
         ...todos,
         {
            id: nextId++,
            title: title,
            done: false
         }
      ];

      setTodos(newTodos);
   }

   function handleChangeTodo(nextTodo) {
      const checkedTodos = todos.map(task => {
         if (task.id === nextTodo.id) {
            return nextTodo
         } else {
            return task
         }
      })
      setTodos(checkedTodos)
   }

   function handleDeleteTodo(todoId) {
      const delTodos = todos.filter(el=> (el.id !== todoId))
      setTodos(delTodos)
   }

   return (
      <>
         <AddTodo
            onAddTodo={handleAddTodo}
         />
         <TaskList
            todos={todos}
            onChangeTodo={handleChangeTodo}
            onDeleteTodo={handleDeleteTodo}
         />
      </>
   );
}
