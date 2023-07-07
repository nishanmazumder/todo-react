// import { useState } from 'react';

// export default function SyncedInputs() {
//    const [text, setText] = useState('');

//    return (
//       <>
//          <Input label="First input" val={text} syncTxt={setText}/>
//          <Input label="Second input" val={text} syncTxt={setText}/>
//       </>
//    );
// }

// function Input({ label, val, syncTxt }) {

//    return (
//       <label>
//          {label}
//          {' '}
//          <input
//             value={val}
//             onChange={e => syncTxt(e.target.value)}
//          />
//       </label>
//    );
// }

import { useState } from 'react';

export default function SyncedInputs() {

   const [text, setText] = useState('');

   function handleChange(e) {
      setText(e.target.value);
   }

   return (
      <>
         <Input label="First input" value={text} onChange={handleChange}/>
         <Input label="Second input" value={text} onChange={handleChange}/>
      </>
   );
}

function Input({ label, value, onChange }) {

   return (
      <label>
         {label}
         {' '}
         <input
            value={value}
            onChange={onChange}
         />
      </label>
   );
}
