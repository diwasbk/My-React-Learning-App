import React from 'react'
import { Link } from 'react-router-dom'
import "./Custom.css"

function Navbar() {
  return (
    <div className="navbar-container">
        <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/about">About us</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar