import React from 'react'
import { useState } from 'react'

export default function Object() {

   const [pointer, SetPointer] = useState({
      x : 0,
      y : 0 
   })

   console.log(pointer);

  return (
    <div
    onPointerMove={ e => {
      SetPointer({
         x : e.clientX,
         y : e.clientY
      });
    }}
    style={{
      height: "400px", 
      width: "600px",
      background: "#d5f3b7"
      }}>
         <div style={{
            height: "50px", 
            width: "50px",
            background: "red",
            borderRadius: "50px",
            position: "absolute",
            // top: "50px",
            // left: "50px"
            transform: `translate(${pointer.x}px, ${pointer.y}px)`
         }}></div>
      </div>
  )
}
