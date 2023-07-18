import React from 'react'

export default function Chat({ state, contact, dispatch }) {
   
   return (
      <section>
         <textarea value={state.message[contact.id]}
            placeholder={`Hello ${contact.name}`}
            onChange={e => {
               dispatch({
                  type: 'edit_msg',
                  message: e.target.value
               })
            }} />
         <button onClick={() => {
            alert(`Message sent to ${contact.name}!`)
            dispatch({
               type: 'sent_msg'
            })
         }}>Send to {contact.email}</button>
      </section>
   )
}
