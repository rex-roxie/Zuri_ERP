import React, {useState} from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("SUCCESS!");
      navigate('/home');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`Error code: ${errorCode} \n Error Message: ${errorMessage}`);

      switch(errorMessage) {
        case 'Firebase: Error (auth/invalid-email).':
          setError('Invalid email');
          break;
        case 'Firebase: Error (auth/wrong-password).':
          setError('Invalid password');
          break;
        default:
          setError('Oops, there seems to be an error. Please try again.');
          break;
      }
      navigate('/');
    });
  }

  return (
    <div>
      <form>
        <input type="email" placeholder='Email' onChange={(event) => {setEmail(event.target.value)}}/>
        <input type="password" placeholder='Password' onChange={(event) => {setPassword(event.target.value)}} />
        <button type="submit" onClick={handleLogin}>Login</button>
        <p>{error}</p>
      </form>
    </div>
  )
}

export default Login;