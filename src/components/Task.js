import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";

export default function Tasks(props) {
  const [editing, setEditing] = useState(false);

  return (
    <li data-key={props.id} className={props.completed ? "completed" : ""}>
      <p>{props.text}</p>
      <div className="task-btns">
        <button
          className="task-btn"
          onClick={props.doneBtnClick}
          aria-label="Mark task done"
        >
          <FontAwesomeIcon icon={faSquareCheck} />
        </button>
        <button
          className="task-btn"
          aria-label="Edit task"
          onClick={props.editBtnClick}
        >
          <FontAwesomeIcon icon={faPencil} />
        </button>
        <button
          className="task-btn"
          aria-label="Delete task"
          onClick={props.deleteBtnClick}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
}
