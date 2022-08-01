import React from 'react';
import { TasksContext } from '../context/Context';

const TaskList = () => {
  const { tasks, getTasks } = TasksContext();
  console.log('tasks', tasks);
  React.useEffect(() => {
    getTasks();
  }, []);
  return <div>{
    tasks.map(task =>
      <div key={task.id}>
        {task?.name}
        <p>{JSON.stringify(task.done)}</p>
        </div>
        )
    }</div>;
};

export default TaskList;
