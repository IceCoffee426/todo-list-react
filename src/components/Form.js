import React from "react";

export default function Form() {
  return (
    <form>
      <label htmlFor="taskInput">Enter task</label>
      <input type="text" id="taskInput" />
      <button type="submit">Add Task</button>
    </form>
  );
}
