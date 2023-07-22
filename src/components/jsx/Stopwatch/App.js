import React, { createElement, useRef, useState } from "react"

export default function Stopwatch() {
   const [start, setStart] = useState(null);
   const [now, setNow] = useState(null);
   let intvalRef = useRef(null);

   function handleStartTime() {
      console.log('start');

      setStart(Date.now())

      setNow(Date.now())
      intvalRef.current = setInterval(() => {
         setNow(Date.now())
      }, 10)
   }

   function handleStopTime() {
      console.log("stop");

      clearInterval(intvalRef.current)
   }

   let time = 0;
   if (start !== null && now !== null) {
      time = (now - start) / 1000
   }

   function handleSaveData() {


      const timeHtml = document.querySelector('.time');

      console.log(time);

      setNow(Date.now())
      intvalRef.current = setInterval(() => {
         setNow(Date.now())
      }, 10)
      // const ul = React.createElement('h2', '')



      //   render(ul, timeHtml);

   }



   return (
      <>
         <div className="time">
            <h2>{time.toFixed(3)}</h2>
         </div>
         <button onClick={() => {
            handleStartTime()
         }}>Start</button>
         <button onClick={() => {
            handleSaveData();
            handleStopTime();
         }}>Stop</button>
      </>
   )
}
