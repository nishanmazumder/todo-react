import React, { forwardRef, useImperativeHandle, useRef } from 'react'

// const MyInput = function({props}){
//    return <input {...props} />
// }

const MyInput = forwardRef((props, ref) => {
   const realInputRef = useRef(null);

   useImperativeHandle(ref, () => ({
      focus() {
         realInputRef.current.focus();
      }
   }))

   return <input {...props} onChange={(e) =>
      props.onChange(e.target.value)}
      ref={realInputRef} />
})

export default function InputRef() {
   const inputRef = useRef(null);

   function handleFocus() {
      inputRef.current.focus()
   }

   return (
      <>
         <MyInput onChange={(value) => {
            console.log(value)
         }} ref={inputRef} />
         <button onClick={() => {
            handleFocus();
         }}>focus</button>
      </>
   )
}
