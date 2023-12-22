import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { signOut } from 'firebase/auth';
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

const getDrivers = async () => {
  const querySnapshot = await getDocs(collection(db, "drivers"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id);
  });
}

const Home = () => {
  const navigate = useNavigate();
  const [drivers, setDrivers] = useState([]);

  const getDrivers = async () => {
    const querySnapshot = await getDocs(collection(db, "drivers"));
      // doc.data() is never undefined for query doc snapshots
    setDrivers(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
  }

  getDrivers();

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
        <section>
          {drivers.map((driver) => {
            return <div className='driver'>{driver.first_name} {driver.last_name}</div>
          })}
        </section>
    </div>
  )
}

export default Home