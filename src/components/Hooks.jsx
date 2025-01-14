import React, { useState } from 'react'

function Hooks() {
    let[counter, setCounter] = useState(0);
    const  addCoffee = ()=>{
        if(counter<20){
            setCounter(counter+1)
        }
    }
    const removeCoffee = ()=>{
        if(counter>0){
            setCounter(counter-1)
        }
    }

  return (
    <div>
        <h2>Coffee Count: {counter}</h2>
        <button onClick={addCoffee}>Add Coffee</button>
        <button onClick={removeCoffee}>Remove Coffee</button>
        <p>Total Coffee: {counter}</p>
    </div>
  )
}

export default Hooks