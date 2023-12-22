import React, {useState} from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { updateEmail } from 'firebase/auth';

function UpdateEmail() {

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const changeEmail = (event) => {
    event.preventDefault();
    updateEmail(auth.currentUser, email)
    .then(() => {
      console.log("Email successfully changed")
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
        <input type="email" placeholder='New Email' onChange={(event) => {setEmail(event.target.value)}}/>
        <button type="submit" onClick={changeEmail}>Change Email</button>
        <p>{error}</p>
      </form>
    </div>
  )
}

export default UpdateEmail;