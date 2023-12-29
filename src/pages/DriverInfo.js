import React, {useState} from 'react'

function DriverInfo(props) {
  const [showDriverInfo, setShowDriverInfo] = useState('none');

  const driverInfo = () => {
    if (showDriverInfo === "none") {
      setShowDriverInfo("block");
    } else {
      setShowDriverInfo("none");
    }
  }

    return (
        <div>
            <div className='driver' onClick={driverInfo}>{props.driver.first_name} {props.driver.last_name}</div> 
            <div style={{display: showDriverInfo}}>{props.driver.email}</div>
        </div>
  )
}

export default DriverInfo