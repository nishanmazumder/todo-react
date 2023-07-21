import AddTask from './AddTask';
import TaskProvider, { useTasks } from './ContextReducer'
import TaskList from './TaskList';

export default function Todo() {
   return (
      <TaskProvider>
         <h1>Todo</h1>
         <AddTask />
         <TaskList />
      </TaskProvider>
   )
}
