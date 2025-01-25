import React from 'react'
import "./Custom.css"
import { useNavigate } from 'react-router-dom'

function Sender() {

  const navigate = useNavigate();
  const msgToSend = {message: "Hello from Sender!"};

  // Navigate to Receiver with state
  function goToReceiver(){
    navigate("/receiver", {state:msgToSend});
  }
  
  return (
    <>
    <div className='sender-receiver-page-container'>I'm Sender
      <button className='sender-button' onClick={goToReceiver}>Send</button>
    </div>
    </>
  )
}

export default Sender