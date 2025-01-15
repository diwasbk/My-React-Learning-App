import React, { useState } from 'react'
import "./Custom.css"

function BackgroundChanger() {

  let[mycolor, setColor] = useState("white");

  return (
    <div className="bgchanger-design" style={{backgroundColor:mycolor}}>
        <button onClick={()=>{setColor("black")}}>Black</button>
        <button onClick={()=>{setColor("white")}}>White</button>
        <button onClick={()=>{setColor("red")}}>Red</button>
        <button onClick={()=>{setColor("#4CAF50")}}>Green</button>
        <button onClick={()=>{setColor("rgb(0, 186, 254)")}}>Blue</button>
    </div>
  )
}
export default BackgroundChanger