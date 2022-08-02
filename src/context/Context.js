import React from 'react';
import { supabaseClient } from '../supabase/client';

export const TaskContext = React.createContext();
export const TasksContext = () => React.useContext(TaskContext);

export const ContextProvider = ({ children }) => {
  const [tasks, setTasks] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getTasks = async () => {
    const user = supabaseClient.auth.user();
    const { error, data } = await supabaseClient
      .from('tasks')
      .select()
      .eq('userId', user.id)
      .eq('done', false);
    if (error) throw error;

    setTasks(data);
  };
  const createTask = async (task) => {
    setLoading(true);
    try {
      const user = supabaseClient.auth.user();

      const { error, data } = await supabaseClient.from('tasks').insert({
        name: task,
        userId: user.id,
      });
      if (error) throw error;
      //Adding new task to the array
      setTasks([...tasks, ...data]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <TaskContext.Provider value={{ tasks, getTasks, createTask, loading }}>
      {children}
    </TaskContext.Provider>
  );
};

export default ContextProvider;
