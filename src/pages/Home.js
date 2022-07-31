import React from 'react';
import { useNavigate } from 'react-router-dom';
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
    </div>
  );
};

export default Home;
