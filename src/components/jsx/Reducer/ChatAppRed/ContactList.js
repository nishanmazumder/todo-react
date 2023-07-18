import React from 'react'

export default function ContactList({ contacts, selectedId, dispatch }) {
   return (
      <section>
         <ul>
            {
               contacts.map(contact =>
                  <li key={contact.id}>
                     <button onClick={() =>
                        dispatch({
                           type: 'select',
                           id: contact.id
                        })
                     }>{selectedId === contact.id ?
                        <b>{contact.name}</b> : contact.name}
                     </button>
                  </li>)
            }
         </ul>
      </section>
   )
}
