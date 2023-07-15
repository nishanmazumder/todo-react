export default function tasksReducer(tasks, action) {

   console.log(action);

   switch (action.type) {
      case 'add': {
         return [
            ...tasks,
            {
               id: action.id,
               text: action.text,
               done: false
            }
         ];
      }

      case 'edit': {
         return tasks.map(t => {
            if (t.id === action.task.id) {
               return action.task
            } else {
               return t
            }
         })
      }

      case 'delete': {
         return tasks.filter(task => task.id !== action.id)
      }

      default: {
         throw Error('Unknown Action:' + action.type)
      }
   }
}
