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
  };
  return (
    <div className="row pt-4">
      <TaskForm />
      <header className="d-flex justify-content-between my-4 ">
        <span className="h5">{taskDone ? 'Done' : 'Pending'}</span>
        <button className="btn btn-dark btn-small" onClick={toggleTaskDone}>
          {taskDone ? 'Pending tasks' : 'Done tasks '}
        </button>
      </header>
      <TaskList taskDone={taskDone} />
    </div>
  );
};

export default Home;
