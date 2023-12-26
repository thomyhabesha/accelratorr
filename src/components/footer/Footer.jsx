import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import insta from '../images/New folder/Instagram-removebg-preview.png'
import linkdin from '../images/New folder/LinkedIn-removebg-preview.png'
import fb from '../images/New folder/Facebook-removebg-preview.png'


function Footer() {
  return (
    <div className='footer'>
        <div className="footer-top">
        <h1>SA</h1>
<div>
        <div className="left-footer">
            <h3>About</h3>
            <Link to="/info">About Us</Link>
            <Link to="/apply">Apply</Link>
        </div>

        <div className="center-footer">
            <h3>Contact</h3>
            <p>Email: <span><a href="mailto:leultsegayem@gmail.com">leultsegayem@gmail.com</a></span></p>
            <p>Phone: <span><a href="tel:+251947327951">+251947327951</a></span> </p>
            
        </div>
        </div>
        <div className="right-footer">
            <Link to="/terms">TERMS OF SERVICE</Link>
            <Link to="/privacy">PRIVACY</Link>
        </div>

        <div className="footer-socials" style={{display:"flex"}}>
            <a href="#"><img src={insta}/></a>
            <a  href="#"><img className="twitter" src={fb}/></a>
            <a href="#"><img src={linkdin}/></a>
            
        </div>

        </div>
        <div className='copyright'> 
  <p>&copy; All right reserved SparkTutor</p>

</div>
    </div>
  )
}

export default Footer