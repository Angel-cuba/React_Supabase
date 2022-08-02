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
      <form onSubmit={handleTask} className="card card-body">
        <input
          type="text"
          name="task"
          value={task}
          placeholder="Task..."
          onChange={(e) => setTask(e.target.value)}
          className="form-control mb-2"
        />
        <div className="ms-auto">
          <button disabled={loading} className="btn btn-primary">
          {loading ? 'Adding...' : 'Add task'}
        </button>
        </div>
      </form>
  );
};

export default TaskForm;
