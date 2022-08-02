import React from 'react';
import { supabaseClient } from '../supabase/client';

export const TaskContext = React.createContext();
export const TasksContext = () => React.useContext(TaskContext);

export const ContextProvider = ({ children }) => {
  const [tasks, setTasks] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getTasks = async (done = false) => {
    setLoading(true);
    const user = supabaseClient.auth.user();
    const { error, data } = await supabaseClient
      .from('tasks')
      .select()
      .eq('userId', user?.id)
      .eq('done', done);
    if (error) throw error;

    setTasks(data);
    setLoading(false);
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
  const deleteTask = async (id) => {
    setLoading(true);
    const user = await supabaseClient.auth.user();
    console.log(id);
    try {
      const { error, data } = await supabaseClient
        .from('tasks')
        .delete()
        .eq('userId', user.id)
        .eq('id', id);
      if (error) throw error;

      //Removing task from the array
      console.log(data);
      setTasks(tasks.filter((task) => task.id !== id));
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  const updateTask = async (id, fileds) => {
    const user = await supabaseClient.auth.user();

    const { error } = await supabaseClient
      .from('tasks')
      .update(fileds)
      .eq('userId', user.id)
      .eq('id', id);

    if (error) throw error;
    //Updating task in the array
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const logOut = async () => {
    await supabaseClient.auth.signOut(); 
  }

  return (
    <TaskContext.Provider value={{ tasks, getTasks, createTask, loading, deleteTask, updateTask, logOut }}>
      {children}
    </TaskContext.Provider>
  );
};

export default ContextProvider;
