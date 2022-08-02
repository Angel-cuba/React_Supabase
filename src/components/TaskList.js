/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { TasksContext } from '../context/Context';
import TaskCard from './TaskCard';

const TaskList = () => {
  const { tasks, getTasks, loading } = TasksContext();
  console.log(tasks);
  React.useEffect(() => {
    getTasks(false);
  }, []);

  function renderTask() {
    if (loading) {
      return <div>Loading...</div>;
    } else if (tasks.length === 0) {
      return <div>No tasks</div>;
    } else {
      return (
        <div>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      );
    }
  }
  return <div>{renderTask()}</div>;
};

export default TaskList;
