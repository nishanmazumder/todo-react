import React from 'react'

export default function ContactList({ contacts, selectedId }) {
   return (
      <section>
         <ul>
            {
               contacts.map(contact =>
                  <li key={contact.id}>
                     <button onClick={() =>
                        selectedId(contact.id)
                     }>{contact.name}</button>
                  </li>)
            }
         </ul>
      </section>
   )
}
