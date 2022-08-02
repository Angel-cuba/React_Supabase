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
    <div>
      <h2>{task?.name}</h2>
      <p>{JSON.stringify(task.done)}</p>
      <div className="">
        <button onClick={() => handleDone()}>Done</button>
        <button onClick={() => handleDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskCard;
