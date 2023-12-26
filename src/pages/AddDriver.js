import React, { useState } from 'react';
import { addDoc, collection, where, query, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';

function AddDriver() {
    
    const navigate = useNavigate();
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: 0,
        medicalCardNumber: 0,
        truckNumber: 0,
        driverLicenseNumber: 0,
        certification: '',
        citizenship: '',
        driverLicenseExpiryDate: Date.now().timestamp,
        medicalCardExpiryDate: Date.now().timestamp,
    });

    const colRef = collection(db, 'drivers');

    const onChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    }

    const submitNewDriver = (event) => {
        event.preventDefault();
        
        const q = query(colRef, where("email", '==', values.email));

        const addDriver = async () => {
            await addDoc(collection(db, "drivers"), {first_name: values.firstName, last_name: values.lastName, email: values.email, phone: values.phone, medical_card_number: values.medicalCardNumber, truck_number: values.truckNumber, driver_license_number: values.driverLicenseNumber, certification: values.certification, citizenship: values.citizenship, driver_license_expiry_date: values.driverLicenseExpiryDate, medical_card_expiry_date: values.medicalCardExpiryDate}); 
        }
        
        onSnapshot(q, (snapshot) => {
            if (snapshot.docs.length === 0){
                addDriver();
                navigate('/home');
            } else {
                console.log("That email already exists.");
            }
        })
        
    }

    const driversCollectionRef = collection(db, "drivers");
    

  return (
    <div>
        <h1>Add Driver</h1>
        <form>
            <input type='text' placeholder='First Name' name='firstName' onChange={onChange}/>
            <input type='text' placeholder='Last Name' name='lastName' onChange={onChange} />
            <input type='email' placeholder='Email' name='email' onChange={onChange} />
            <input type='number' placeholder='Phone Number' name='phone' onChange={onChange} />
            <input type='number' placeholder='Medical Card Number' name='medicalCardNumber' onChange={onChange} />
            <input type='date' placeholder='Medical Card Expiry Date' name='medicalCardExpiryDate' onChange={onChange} />
            <input type='number' placeholder='Truck Number' name='truckNumber' onChange={onChange} />
            <input type='number' placeholder='Driver License Number' name='driverLicenseNumber' onChange={onChange} />
            <input type='date' placeholder='Driver License Expiry Date' name='driverLicenseExpiryDate' onChange={onChange} />
            <input type='text' placeholder='Certification' name='certification' onChange={onChange} />
            <input type='text' placeholder='Citizenship' name='citizenship' onChange={onChange} />
            <button type='submit' onClick={submitNewDriver}>Submit New Driver</button>
        </form>
    </div>
  )
}

export default AddDriver;