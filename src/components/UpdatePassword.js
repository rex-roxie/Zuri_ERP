import React, {useState} from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { updatePassword } from 'firebase/auth';

function UpdatePassword() {

  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const changePassword = (event) => {
    event.preventDefault();
    updatePassword(auth.currentUser, password)
    .then(() => {
      console.log("Password successfully changed")
      navigate('/home');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`Error code: ${errorCode} \n Error Message: ${errorMessage}`);
      navigate('/');
    });
  }

  return (
    <div>
      <form>
        <input type="password" placeholder='New Password' onChange={(event) => {setPassword(event.target.value)}}/>
        <button type="submit" onClick={changePassword}>Change Password</button>
        <p>{error}</p>
      </form>
    </div>
  )
}

export default UpdatePassword;