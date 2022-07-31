import React from 'react';
import { client } from '../supabase/client';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await client.auth.signIn({
        email,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

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
