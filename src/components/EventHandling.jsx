import React, { useState } from 'react';
import './Custom.css'

function EventHandling() {

  let displayAlerts = () => {
    alert("Earthquake Alert: Magnitude 7.0 near China Border || Seek Safety Immediately!");
  };

  let [sum, setSum] = useState();
  let addNumbers = (a, b) => {
    setSum(a + b);
  };

  return (
    <div className='event-handling'>
      <h2>EventHandling</h2>
      <button onClick={displayAlerts}>See Alerts!</button>
      <button onClick={()=>{addNumbers(30, 20)}}>Sum</button>
      <p><strong><i>{sum}</i></strong></p>
    </div>
  );
}

export default EventHandling;
