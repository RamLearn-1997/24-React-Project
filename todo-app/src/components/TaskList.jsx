import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, toggleTask, enterEditMode }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode} // Make sure enterEditMode is passed correctly
        />
      ))}
    </ul>
  );
};

export default TaskList;
