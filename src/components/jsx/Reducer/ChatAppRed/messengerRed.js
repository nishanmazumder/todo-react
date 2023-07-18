export const initialState = {
   selectedId: 0,
   message: {
      0: "Hi Taylor",
      1: "Hi Alice",
      2: "Hi Bob",
   },
};

export function messageRed(state, action) {
   switch (action.type) {
      case 'select': {
         return {
            ...state,
            selectedId: action.id
         }
      }

      case 'edit_msg': {
         return {
            ...state,
            message: {
               ...state.message,
               [state.selectedId]: action.message
            }
         }
      }

      case 'sent_msg': {
         return {
            ...state,
            message: {
               ...state.message,
               [state.selectedId]: ''
            }
         }
      }

      default:
         throw Error('Error: ' + action.type)
   }
}
