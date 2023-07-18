import React from 'react'

export default function Chat({ state, contact, dispatch }) {


   console.log(contact);

   return (
      <section>
         <textarea value={state.message}
            placeholder={`Hello ${contact.name}`}
            onChange={e => {
               dispatch({
                  type: 'edit_msg',
                  message: e.target.value
               })
            }} />
         <button onClick={() => {
            dispatch({
               type: 'edit_msg',
               message: ''
            })
         }}>Send to {contact.email}</button>
      </section>
   )
}
