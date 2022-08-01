import React from 'react';
import { supabaseClient } from '../supabase/client';

export const TaskContext = React.createContext();
export const TasksContext = () => React.useContext(TaskContext);

export const ContextProvider = ({ children }) => {
  const [tasks, setTasks] = React.useState([]);

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
  return <TaskContext.Provider value={{ tasks, getTasks }}>{children}</TaskContext.Provider>;
};

export default ContextProvider;
