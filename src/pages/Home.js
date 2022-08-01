import React from 'react';
import { useNavigate } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { supabaseClient } from '../supabase/client';

const Home = () => {
  const navigate = useNavigate();

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
      <TaskList />
    </div>
  );
};

export default Home;
