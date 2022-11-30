import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Todo from "./components/Todo";
import TodoAdd from "./components/TodoAdd";
import Contact from "./components/Contact";
import PageNotFound from "./components/404";

function App() {
  ////////////////////// Define Todo
  let todoItems;

  if (localStorage.getItem("todos") === 0) {
    todoItems = [];
  } else {
    todoItems = JSON.parse(localStorage.getItem("todos"));
  }

  ////////////////////// useState
  const [todos, setTodos] = useState(todoItems);

  ////////////////////// useEffect
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  ////////////////////////// Add Todo
  const addTodo = (title, desc) => {
    let id = 0;
    todos.length === 0 ? (id = 0) : (id = todos[todos.length - 1].id + 1);

    const newTodo = {
      id: id,
      title: title,
      desc: desc,
    };

    setTodos([...todos, newTodo]);

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  ////////////////////////// Delete Todo
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );

    // localStorage.getItem('todos')
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // console.log(localStorage.getItem('todos'))

  // localStorage.clear()

  return (
    <>
      <Router>
        <Header title="Logo" search={false} />
        <Routes>
          <Route path="/" element={<Home page="Home" />}></Route>
          <Route
            path="/todo"
            element={
              <>
                <TodoAdd addTodo={addTodo} />
                <Todo items={todos} onDelete={onDelete} />
              </>
            }
          ></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
