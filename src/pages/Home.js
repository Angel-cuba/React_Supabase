import React from 'react';
import { useNavigate } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { supabaseClient } from '../supabase/client';

const Home = () => {
  const navigate = useNavigate();
  const [taskDone, setTaskDone] = React.useState(false);

  React.useEffect(() => {
    if (!supabaseClient.auth.user()) {
      navigate('/login');
    }
  }, [navigate]);

  const toggleTaskDone = () => {
    setTaskDone(!taskDone);
  }
  return (
    <div>
      Home
      <button onClick={() => supabaseClient.auth.signOut()}>Log out</button>
      <TaskForm />
      <header>
        <span>Tasks pending</span>
        <button onClick={toggleTaskDone}>
          Showing tasks done
        </button>
      </header>
      <TaskList taskDone={taskDone}/>
    </div>
  );
};

export default Home;
