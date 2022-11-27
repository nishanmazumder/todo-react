import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Todo from "./components/Todo";
import TodoAdd from "./components/TodoAdd";

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

  const addTodo = (title, desc) => {
    let id;
    todos.length === 0 ? (id = 0) : (id = todos[todos.length - 1].id + 1);

    const newTodo = {
      id: id,
      title: title,
      desc: desc,
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <Header title="Logo" search={false} />
      <TodoAdd addTodo={addTodo} />
      <Todo items={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
