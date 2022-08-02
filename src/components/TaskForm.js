import React from 'react';
import { TasksContext } from '../context/Context';

const TaskForm = () => {
  const [task, setTask] = React.useState('');
const { createTask, loading } = TasksContext();

  const handleTask = async (e) => {
    e.preventDefault();
   createTask(task)
   setTask('');
  };

  return (
    <div>
      <form onSubmit={handleTask}>
        <input
          type="text"
          name="task"
          value={task}
          placeholder="Task..."
          onChange={(e) => setTask(e.target.value)}
        />
        <button disabled={loading}>
          {loading ? 'Adding...' : 'Add task'}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
