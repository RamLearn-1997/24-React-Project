import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";

export default function EditForm({ editedTask, updateTask, closeEditMode }) {
  useEffect(() => {
    const closeModalIfEscaped = (e) => {
      e.key === "Escape" && closeEditMode();
    };

    window.addEventListener("keydown", closeModalIfEscaped);

    return () => {
      window.removeEventListener("keydown", closeModalIfEscaped);
    };
  }, [closeEditMode]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTask({ id: editedTask.id, name: updatedTaskName });
  };

  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

  return (
    <div
      role="dialog"
      aria-labelledby="editTask"
      onClick={(e) => {
        e.target === e.currentTarget && closeEditMode();
      }}>
      <form className="todo" onSubmit={handleFormSubmit}>
        <div className="wrapper">
          <input
            type="text"
            className="input"
            placeholder="Update Task"
            value={updatedTaskName}
            id="editTask"
            onChange={(e) => setUpdatedTaskName(e.target.value)}
            required
            autoFocus
            maxLength={70}
          />
          <label htmlFor="editTask" className="label">
            Update Task
          </label>
        </div>
        <button
          className="btn"
          aria-label={`Confirm edited task to read ${updatedTaskName}`}
          type="submit">
          <FaCheck size={24} />
        </button>
      </form>
    </div>
  );
}
