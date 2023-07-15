import React from 'react'

export default function Chat({ value, contact }) {

   console.log(contact);

   return (
      <section>
         <textarea value={value.message}
            placeholder={`Hello ${contact.name}`}
            onChange={e => e.target.value} />
         <button>Send to {contact.email}</button>
      </section>
   )
}
