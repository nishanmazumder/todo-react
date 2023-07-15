import { type } from '@testing-library/user-event/dist/type';
import { useState } from 'react';

export default function Chat({ contact, message, dispatch }) {
   return (
      <section className="chat">
         <textarea
            value={message}
            placeholder={'Chat to ' + contact.name}
            onChange={(e) => {
               dispatch({
                  type: 'edited_message',
                  message: e.target.value
               })
            }}
         />
         <br />
         <button onClick={() => {
            alert(`Message sent to ${contact.name}`)
            dispatch({
               type: 'edited_message',
               message: ''
            })
         }}>Send to {contact.email}</button>
      </section>
   );
}
