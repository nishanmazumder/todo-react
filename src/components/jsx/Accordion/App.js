import { useState } from 'react';

export default function SyncedInputs() {
   const [text, setText] = useState('');

   console.log(text);

   return (
      <>
         <Input label="First input" syncTxt={setText}/>
         <Input label="Second input" syncTxt={setText}/>
      </>
   );
}

function Input({ label, syncTxt }) {
   const [text, setText] = useState('');

   return (
      <label>
         {label}
         {' '}
         <input
            value={text}
            onChange={e => syncTxt(e.target.value)}
         />
      </label>
   );
}
