import React, { useState } from 'react';
import { collection, deleteDoc, doc, query, where, onSnapshot} from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';

function DeleteDriver() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        firstName: '',
        email: ''
    });


    const onChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    }

    const deleteDriver = (event) => {
        event.preventDefault();
        const colRef = collection(db, 'drivers');
        const q = query(colRef, where("email", '==', values.email));

        onSnapshot(q, (snapshot) => {
            snapshot.docs.forEach((the) => {
                deleteDoc(doc(db, 'drivers', the.id))
            })
        })

        navigate('/home');

    }


  return (
    <div>
        <h1>Delete Driver</h1>
        <form>
            <input type='email' name='email' placeholder='Email' onChange={onChange} />
            <button type='submit' onClick={deleteDriver}>Delete Driver</button>
        </form>
    </div>
  )
}

export default DeleteDriver;