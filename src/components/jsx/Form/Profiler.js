import React, { useState } from 'react'

export default function EditProfile() {
   const [active, setActive] = useState(true)
   const [fname, setFname] = useState('Jane')
   const [lname, setLname] = useState('Jacobs')

   return (
      <form onSubmit={e => {
         e.preventDefault()
      }}>
         <label>
            First name:
            {active ?
               <b>{fname}</b> : <input value={fname} onChange={e => setFname(e.target.value)} />}
         </label>
         <label>
            Last name:
            {active ?
               <b>{lname}</b> : <input value={lname} onChange={e => setLname(e.target.value)} />}
         </label>
         <button onClick={() => setActive(!active)}>
            {active ? "Edit" : "Save"} Profile
         </button>
         <p><i>Hello, {fname} {lname}!</i></p>
      </form>
   );
}
