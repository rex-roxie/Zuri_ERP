import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { signOut } from 'firebase/auth';
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import DriverInfo from './DriverInfo';

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
  const addDriver = () => {
    navigate('/addDriver')
  }
  const deleteDriver = () => {
    navigate('/deleteDriver')
  }

  


  return (
    <div>
        <h1>Welcome Home {auth.currentUser.displayName}</h1>
        <h1>Welcome Home {auth.currentUser.email}</h1>
        <button onClick={logout}>Logout</button>
        <button onClick={name}>Change Name</button>
        <button onClick={password}>Change Password</button>
        <button onClick={email}>Change Email</button>
        <button onClick={addDriver}>Driver</button>
        <button onClick={deleteDriver}>Delete Driver</button>
        <section>
          {drivers.map((driver) => {
            return <DriverInfo driver={driver} />
          })}
        </section>
    </div>
  )
}

export default Home