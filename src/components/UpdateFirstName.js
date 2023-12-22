import React, {useState} from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';

function UpdateFirstName() {

  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const changeName = (event) => {
    event.preventDefault();
    updateProfile(auth.currentUser, {
      displayName: name
    })
    .then(() => {
      console.log("Name successfully changed")
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
        <input type="name" placeholder='New Name' onChange={(event) => {setName(event.target.value)}}/>
        <button type="submit" onClick={changeName}>Change Name</button>
        <p>{error}</p>
      </form>
    </div>
  )
}

export default UpdateFirstName;