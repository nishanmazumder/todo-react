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
         tasks.map(t => {
            if (t.id === action.id) {
               return action.task
            } else {
               return t
            }
         })
      }

      default: {
         throw Error('Unknown Action:' + action.type)
      }
   }
}
