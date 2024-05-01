import { useState } from "react";

// library imports
import { FaPlus } from "react-icons/fa";

export default function CustomForm({ addTask }) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTask("");
    addTask({
      name: task,
      checked: false,
      id: Date.now(),
    });
    console.log(e);
  };

  const [task, setTask] = useState("");

  return (
    <form className="todo" onSubmit={handleFormSubmit}>
      <div className="wrapper">
        <input
          type="text"
          className="input"
          placeholder="Enter Task"
          value={task}
          id="task"
          onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          maxLength={70}
        />
        <label htmlFor="task" className="label">
          Enter Task
        </label>
      </div>
      <button className="btn" aria-label="Add Task" type="submit">
        <FaPlus size={30} />
      </button>
    </form>
  );
}
