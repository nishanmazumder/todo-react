import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import Home from "./components/Home";
// import AppClock from './components/clock/AppClock';
// import Calculator from './components/calculator/Calculator';
// import Composition from './components/composition/Composition';
// import Hoc from './components/hoc/HOC';
// import RenderProps from './components/renderprops/RenderProps';
// import Contxt from "./components/context/App";
// import Condition from "./components/jsx/condition";
// import UserData from "./components/jsx/UseState";
// import Object from "./components/jsx/Object";
// import Canvas from "./components/jsx/box/App";
// import Array from "./components/jsx/Array/App";
// import TaskApp from "./components/jsx/TaskApp/App";
// import TaskApp2 from "./components/jsx/TaskApp2/App";
import Todo from "./components/jsx/TaskApp3/App";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Home /> */}
    {/* <App /> */}
    {/* <AppClock/> */}
    {/* <Calculator /> */}
    {/* <Composition/> */}
    {/* < Hoc/> */}
    {/* <RenderProps /> */}
    {/* <Contxt /> */}
   {/* {<Condition/>} */}
   {/* <UserData/> */}
   {/* <Object/> */}
   {/* <Canvas/> */}
   {/* <Array/> */}
   {/* <TaskApp/> */}
   {/* <TaskApp2/> */}
   <Todo/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
