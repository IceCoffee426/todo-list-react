import { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";
import Footer from "./components/Footer";
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
      id: task.id,
    });
  };

  const submitTask = (e) => {
    e.preventDefault();
    if (!task.text) return;
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
  };

  const handleEdit = (e) => {
    const key = e.target.parentNode.parentNode.dataset.key;
    const updatedTasks = tasks.map((task) => {
      if (key === task.id) {
        return { ...task, text: e.target.value };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (e) => {
    const node = e.target.parentNode.parentNode;
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
        <ul className="task-list">
          {tasks.map((task) => {
            return (
              <Task
                key={task.id}
                id={task.id}
                completed={task.completed}
                text={task.text}
                doneBtnClick={toggleComplete}
                handleEditChange={handleEdit}
                deleteBtnClick={deleteTask}
              />
            );
          })}
        </ul>
      </main>
      <Footer />
    </>
  );
}
