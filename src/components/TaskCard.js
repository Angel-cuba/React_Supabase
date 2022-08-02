import React from 'react';
import { TasksContext } from '../context/Context';

const TaskCard = ({ task }) => {
  const { deleteTask, updateTask } = TasksContext();

  const handleDelete = async (id) => {
    deleteTask(id);
  };
  const handleDone = () => {
    updateTask(task.id, { done: !task.done });
  };
  return (
    <div className="card card-body mb-3">
      <h2 className="h4">{task?.name}</h2>
      <p>{task.done ? "Done 🚀": "Not Done ❌"}</p>
      <div className="ms-auto">
        <button className="btn btn-danger btn-sm me-1" onClick={() => handleDone()}>
          Done
        </button>
        <button className="btn btn-secondary btn-sm " onClick={() => handleDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
