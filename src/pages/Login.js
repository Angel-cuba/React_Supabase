import React from 'react';
import { useNavigate } from 'react-router-dom';
import { supabaseClient } from '../supabase/client';

const Login = () => {
  const navigate= useNavigate();
  const [email, setEmail] = React.useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await supabaseClient.auth.signIn({
        email,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    if(supabaseClient.auth.user()) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Login;
