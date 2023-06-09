import React from 'react'
import { useState } from 'react'
import { useImmer } from "use-immer";

export default function Object() {

   const [pointer, SetPointer] = useState({
      x : 0,
      y : 0 
   })

   const [person, updatePerson] = useImmer({ //use state work same
      name: 'Niki de Saint Phalle',
      artwork: {
        title: 'Blue Nana',
        city: 'Hamburg',
        image: 'https://i.imgur.com/Sd1AgUOm.jpg',
      }
    });

    // immer way
    function handleNameChange(e){
      updatePerson(draft => {
         draft.name = e.target.value
      })
    }

    function handleTitleChange(e){
      updatePerson(draft => {
         draft.title = e.target.value
      })
    }

    // react way
    function handleCityChange(e){
      updatePerson({
         ...person,
         artwork: {
            ...person.artwork,
            city: e.target.value
         }
      })
    }

  return (
    <>
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

      <div className='form'>
         <form>
            <input type='text' value={person.name} onChange={handleNameChange}/>
            <input type='text' value={person.artwork.title} onChange={handleTitleChange}/>
            <input type='text' value={person.artwork.city} onChange={handleCityChange}/>
         </form>
      </div>
    </>
  )
}
