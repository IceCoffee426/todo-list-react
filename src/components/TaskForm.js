import React from "react";

export default function TodoForm(props) {
  return (
    <form className="task-form">
      <input
        type="text"
        placeholder="Enter task"
        id="taskInput"
        value={props.text}
        aria-label="Enter task"
        onChange={props.handleChange}
      />
      <button type="submit" onClick={props.handleClick}>
        Add Task
      </button>
    </form>
  );
}
