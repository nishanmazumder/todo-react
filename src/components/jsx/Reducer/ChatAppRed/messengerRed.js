export const initialState = {
   selectedId: 0,
   message: 'Hello',
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
            message: action.message
         }
      }

      default:
         throw Error('Error: ' + action.type)
   }
}
