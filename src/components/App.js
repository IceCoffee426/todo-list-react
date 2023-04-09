import React, { Component, useState } from "react";
import Overview from "./Overview";

export default function App() {
  const [task, setTask] = useState({ text: "" });
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask({ text: e.target.value });
  };

  const submitTask = (e) => {
    e.preventDefault();
    // Not using "push" here as state should be treated as immutable!!
    setTasks(tasks.concat(task));
    setTask({ text: "" });
  };

  return (
    <div className="app">
      <header className="header">
        <img src="./favicon.svg" className="logo"></img>
        <h1 className="title">To-Do List</h1>
      </header>
      <main>
        <form className="input-form">
          <input
            type="text"
            placeholder="Enter task"
            id="taskInput"
            value={task.text}
            onChange={handleChange}
          />
          <button type="submit" onClick={submitTask}>
            Add Task
          </button>
        </form>
        <Overview tasks={tasks} />
      </main>
      <footer>
        <a href="https://github.com/IceCoffee426">IceCoffee426</a>
        <p>&copy; MMXXIII</p>
      </footer>
      {/* Other components in the app will go here */}
    </div>
  );
}
