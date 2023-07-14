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
         if(action.id )
         return [
            ...tasks,
            {
               id: action.id,
               text: action.text,
               done: false
            }
         ];
      }

      default: {
         throw Error('Unknown Action:' + action.type)
      }
   }
}
