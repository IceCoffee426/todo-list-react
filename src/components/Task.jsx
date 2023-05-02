import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";

export default function Tasks(props) {
  const [editing, setEditing] = useState(false);

  const editBtnClick = function () {
    setEditing(true);
  };

  const closeEdit = function () {
    setEditing(false);
  };

  const editingTemplate = (
    <form className="edit-form" onSubmit={closeEdit}>
      <input
        type="text"
        className="edit-input"
        value={props.text}
        aria-label="Editing task"
        onChange={props.handleEditChange}
      />
      <button type="submit" className="" aria-label="Mark task done">
        Done
      </button>
    </form>
  );

  const viewTemplate = (
    <>
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
          onClick={editBtnClick}
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
    </>
  );

  return (
    <li data-key={props.id} className={props.completed ? "completed" : ""}>
      {editing ? editingTemplate : viewTemplate}
    </li>
  );
}
