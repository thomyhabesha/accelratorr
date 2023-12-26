import React from 'react'
import {Link} from 'react-router-dom'
import user from '../images/New folder/usericon-removebg-preview.png'
import './Nav.css'
function Nav() {
  return (
    <div className="nav">
        <div className="nav-logo">
          <h1><Link to="/">SA</Link></h1>
        </div>

        <div className='nav-links'>
             <h2> <Link to="/info">About</Link></h2>
              
        <h2> <Link to="/apply">Apply</Link></h2>
        </div>
    </div>
  )
}

export default Nav