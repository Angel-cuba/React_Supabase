import React from 'react';
import { useNavigate } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import { TasksContext } from '../context/Context';
import { supabaseClient } from '../supabase/client';
const Home = () => {
  const navigate = useNavigate();

  const tasks = TasksContext();
  console.log('tasks', tasks);

  React.useEffect(() => {
    if (!supabaseClient.auth.user()) {
      navigate('/login');
    }
  }, [navigate]);
  return (
    <div>
      Home
      <button onClick={() => supabaseClient.auth.signOut()}>Log out</button>
      <TaskForm />
    </div>
  );
};

export default Home;
