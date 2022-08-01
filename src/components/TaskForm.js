import React from 'react';
import { supabaseClient } from '../supabase/client';

const TaskForm = () => {
  const [task, setTask] = React.useState('');
  const handleTask = async (e) => {
    e.preventDefault();
    try {
      const user =supabaseClient.auth.user()
      
      const result = await supabaseClient.from('tasks').insert({
        name: task,
        userId: user.id,
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleTask}>
        <input
          type="text"
          name="task"
          placeholder="Task..."
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default TaskForm;
