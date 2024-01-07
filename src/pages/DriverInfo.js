import { doc, updateDoc } from 'firebase/firestore';
import React, {useState} from 'react'
import { db } from '../firebase';

function DriverInfo(props) {
  const [showDriverInfo, setShowDriverInfo] = useState('none');
  const [values, setValues] = useState({
    email: ""
  });

  const driverInfo = () => {
    if (showDriverInfo === "none") {
      setShowDriverInfo("block");
    } else {
      setShowDriverInfo("none");
    }
  }

  const updateDriverEmail = async (event) => {
    event.preventDefault();
    await updateDoc(doc(db, "drivers", props.driver.id), {
      email: values.email
    }).then(() => {
      setValues({
        ...values, email: ""
      });
    });
  }

  const onChange = (event) => {
    setValues({
        ...values,
        [event.target.name]: event.target.value,
    });
  }

    return (
        <div>
            <div className='driver' onClick={driverInfo} name="email">{props.driver.first_name} {props.driver.last_name}</div> 
            <div style={{display: showDriverInfo}}>
              {props.driver.email}
              <input placeholder={props.driver.email} type='text' name="email" onChange={onChange} value={values.email} />
              <button type='submit' onClick={updateDriverEmail}>Update</button>
            </div>
        </div>
  )
}

export default DriverInfo