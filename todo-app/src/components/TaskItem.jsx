import { useState } from "react";
// import module css
import styles from "./TaskItem.module.css";

// import library
import {FaCheck, FaEdit, FaTrash} from 'react-icons/fa'

const TaskItem = ({ task, deleteTask, toggleTask, enterEditMode }) => {
    const [isChecked, setIsChecked ] = useState(task.checked);
  
    const handleCheckboxChange = (e) =>{
      setIsChecked(!isChecked);
      toggleTask(task.id);
    }
  
    return (
      <li className={styles.task}>
        <div className={styles["task-group"]}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={isChecked}
            onChange={handleCheckboxChange}
            name={task.name}
            id={task.id}
          />
          <label
            htmlFor={task.id}
            className={styles.label}
          >
            {task.name}
            <p className={styles.checkmark}>
              <FaCheck strokeWidth={2} width={24} height={24}/>
            </p>
          </label>
        </div>
        <div className={styles["task-group"]}>
          <button
            className='btn'
            aria-label={`Update ${task.name} Task`}
            onClick={() => enterEditMode(task)}
          >
            <FaEdit width={24} height={24} />
          </button>
  
          <button
            className={`btn ${styles.delete}`}
            aria-label={`Delete ${task.name} Task`}
            onClick={() => deleteTask(task.id)}
          >
            <FaTrash width={24} height={24} />
          </button>
  
        </div>
      </li>
    )
  }
  export default TaskItem
