import React, { useState } from "react";

function TodoAdd({ addTodo }) {
  const [title, setTitle] = useState("");
  const [desc, setDetails] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!title || !desc) {
      alert("Fileds should not blank!");
    }
    addTodo(title, desc);
  };

  return (
    <div className="container">
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            value={title}
            className="form-control"
            id="title"
            placeholder="Go to market"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Details
          </label>
          <input
            type="text"
            value={desc}
            className="form-control"
            id="title"
            placeholder="Details"
            onChange={(e) => {
              setDetails(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default TodoAdd;
