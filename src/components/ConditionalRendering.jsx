import React, { useState } from 'react'
import "./Custom.css"

function ConditionalRendering() {
  let template = ""
  let msg = <Card/>
  let [pshow, setPshow] = useState(true)
  if(pshow){
    template= <button className="buttons" onClick={()=>{setPshow(!pshow)}}>Hide</button>
  }else{
    template = <button className="buttons" onClick={()=>{setPshow(!pshow)}}>Show</button>
    msg = ""
  }
  return (
    <>
        <div className='template'>{template}</div>
        <div className='msg'>{msg}</div>
    </>
  )
}
export default ConditionalRendering
let Card = ()=>{
    return(
        <h3>Welcome to Monday Night Raw!!</h3>
    )
}