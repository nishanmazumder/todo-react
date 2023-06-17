import React, { useEffect, useState } from 'react'

export default function FormSubmit() {
   const notice = 'Please write something'
   const noticeColor = {
      color: "#ddd"
   }
   const [status, setStatus] = useState(notice);
   const [message, setMessage] = useState('');
   const [color, changeColor] = useState(noticeColor);

   async function handleFormSubmit(e) {
      e.preventDefault()
      setStatus('checking')
      try {
         await submitForm(message)
         setStatus('correct')
      } catch (error) {
         setStatus(error.message)
      }
   }

   useEffect(() => {
      if ('correct' === status) {
         changeColor({ color: "green" })
      } else if ('wrong' === status) {
         changeColor({ color: "red" })
      }
   }, [status])

   useEffect(() => {
      if (message.length !== 0) {
         setStatus('typing')
         changeColor(noticeColor)
      } else {
         setStatus(notice)
      }
   }, [message])

   return (
      <>
         <h2>Status: <span style={color}>{status}...</span></h2>
         <form onSubmit={handleFormSubmit}>
            <textarea value={message}
               onChange={e => setMessage(e.target.value)}
               disabled={'checking' === status}>
            </textarea>
            <button type='submit'
               disabled={message.length === 0 || 'checking' === status}>
               Submit
            </button>
         </form >
      </>
   )
}

function submitForm(message) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         let hasError = message !== "aaa"
         if (!hasError) {
            resolve()
         } else {
            reject(new Error('wrong'))
         }
      }, 2000)
   })

}
