import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Tasks(props) {
  return (
    <ul className="task-list">
      {props.tasks.map((task) => {
        return (
          <li
            data-key={task.id}
            key={task.id}
            className={task.completed ? "completed" : ""}
          >
            <p>{task.text}</p>
            <div className="task-btns">
              <FontAwesomeIcon
                icon={faSquareCheck}
                onClick={props.doneBtnClick}
                className="task-btn"
              />
              <FontAwesomeIcon
                icon={faTrash}
                onClick={props.deleteBtnClick}
                className="task-btn"
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
