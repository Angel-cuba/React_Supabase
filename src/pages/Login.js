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
    <div className="row pt-4">
    <div className="col-md-4 offset-md-4">
        <form onSubmit={handleSubmit} className="card card-body">
        <input
          type="email"
          name="email"
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
          className="form-control mb-2"
        />
        <button className="btn btn-primary">Send</button>
      </form>
    </div>
    </div>
  );
};

export default Login;
