import React from 'react'
import "./Custom.css"
import { useLocation } from "react-router-dom";

function Receiver() {

  //Retrieve data using useLocation
  const location = useLocation();
  const receivedMsg = location.state;

  return (
    <div className='page-container'>
        <p>{receivedMsg.message}</p>
    </div>
  )
}

export default Receiver