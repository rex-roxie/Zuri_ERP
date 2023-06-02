import React from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth);
    navigate('/');
  }

  return (
    <div>
        <h1>Welcome Home {auth.currentUser.email}</h1>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home