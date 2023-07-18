import React from 'react'

export default function ContactList({ contacts, dispatch }) {
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
                     }>{contact.name}</button>
                  </li>)
            }
         </ul>
      </section>
   )
}
