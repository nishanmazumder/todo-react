import React, { useReducer } from 'react'
import ContactList from './ContactList';
import Chat from './Chat';
import { initialState, messageReducer } from './messengerRed';

const contacts = [
   { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
   { id: 1, name: 'Alice', email: 'alice@mail.com' },
   { id: 2, name: 'Bob', email: 'bob@mail.com' },
];

export default function Messenger() {
   const [state, dispatch] = useReducer(messageReducer, initialState);
   const contact = contacts.find(contact => contact.id === state.selectedId);

   return (
      <>
         <ContactList selectedId={state.selectedId} contacts={contacts} dispatch={dispatch} />
         <Chat state={state} contact={contact} dispatch={dispatch}/>
      </>
   )
}
