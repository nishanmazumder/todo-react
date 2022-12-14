import React from "react";
import PropTypes from "prop-types";
import Todoitem from "./Todoitem";

function Todo(props) {
  return (
    <div className="container">
      <h3>Todo List</h3>
      {props.items.length === 0
        ? "No data"
        : props.items.map((data) => {
            return (
              <Todoitem key={data.id + '-' + data.title} todo={data} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
}

Todo.propTypes = {
  todo: PropTypes.array,
};

export default Todo;
