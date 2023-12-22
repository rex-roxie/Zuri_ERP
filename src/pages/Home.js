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

  const name = () => {
    navigate('/changeName');
  }

  const email = () => {
    navigate('/changeEmail');
  }
  const password = () => {
    navigate('/changePassword');
  }

  return (
    <div>
        <h1>Welcome Home {auth.currentUser.displayName}</h1>
        <h1>Welcome Home {auth.currentUser.email}</h1>
        <button onClick={logout}>Logout</button>
        <button onClick={name}>Change Name</button>
        <button onClick={password}>Change Password</button>
        <button onClick={email}>Change Email</button>
    </div>
  )
}

export default Home