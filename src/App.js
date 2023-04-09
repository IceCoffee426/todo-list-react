import React, { useState } from "react";
import Header from "./components/Header.js";
import TaskForm from "./components/TaskForm.js";
import Tasks from "./components/Tasks.js";
import Footer from "./components/Footer.js";
import uniqid from "uniqid";

export default function App() {
  const [task, setTask] = useState({
    text: "",
    completed: false,
    id: uniqid(),
  });
  const localTasks = JSON.parse(localStorage.getItem("tasks"));
  const [tasks, setTasks] = useState(localTasks ? localTasks : []);

  const inputTask = (e) => {
    setTask({
      text: e.target.value,
      completed: false,
      index: tasks.length,
      id: task.id,
    });
  };

  const submitTask = (e) => {
    e.preventDefault();
    setTasks(tasks.concat(task));
    setTask({ text: "", completed: false, id: uniqid() });
  };

  const toggleComplete = (e) => {
    const node = e.target.parentNode.parentNode;
    node.classList.toggle("completed");
    const updatedTasks = tasks.map((task) => {
      if (node.dataset.key === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
    console.log(tasks);
  };

  const deleteTask = (e) => {
    const node = e.target.parentNode.parentNode;
    console.log(node.dataset.key);
    const updatedTasks = tasks.filter((task) => node.dataset.key !== task.id);
    setTasks(updatedTasks);
  };

  const saveTasks = () => {
    const tasksJSON = JSON.stringify(tasks);
    localStorage.setItem("tasks", tasksJSON);
  };

  const logTasks = () => {
    console.log(tasks);
  };

  saveTasks();

  return (
    <>
      <Header handleClick={logTasks} />
      <main>
        <TaskForm
          text={task.text}
          handleChange={inputTask}
          handleClick={submitTask}
        />
        <Tasks
          tasks={tasks}
          doneBtnClick={toggleComplete}
          deleteBtnClick={deleteTask}
        />
      </main>
      <Footer />
    </>
  );
}
