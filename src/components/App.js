import React, { Component, useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Overview from "./Overview";

export default function App() {
  const [task, setTask] = useState({ text: "" });
  const [tasks, setTasks] = useState([]);
  return (
    <div className="app">
      <Header appName="React Notes App" />
      <Form />
      <Overview />
      {/* Other components in the app will go here */}
    </div>
  );
}
