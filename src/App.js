import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import React from 'react';
import { supabaseClient } from './supabase/client';
import ContextProvider from './context/Context';
import Navbar from './components/Navbar';

function App() {
  const navigate = useNavigate();
  React.useEffect(() => {
    supabaseClient.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate('/login');
      } else {
        navigate('/');
      }
    });
  }, [navigate]);
  return (
    <>
      <ContextProvider>
        <Navbar/>
        <div className="container">
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
        </div>
      </ContextProvider>
    </>
  );
}

export default App;
