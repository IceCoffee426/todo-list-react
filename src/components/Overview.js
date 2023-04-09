import React from "react";

export default function Overview({ tasks }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => {
        return <li>{task.text}</li>;
      })}
    </ul>
  );
}
