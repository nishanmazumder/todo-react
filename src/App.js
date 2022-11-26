import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Todo from "./components/Todo";

function App() {
  let [todos, setTodos] = useState([
    { id: 1, title: "Work Name", desc: "Work details" },
    { id: 2, title: "Work Name", desc: "Work details" },
    { id: 3, title: "Work Name", desc: "Work details" },
  ]);

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  return (
    <>
      <Header title="Logo" search={false} />
      <Todo items={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
