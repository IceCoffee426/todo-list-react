export default function TaskForm(props) {
  return (
    <form className="task-form">
      <input
        type="text"
        placeholder="Enter task"
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
