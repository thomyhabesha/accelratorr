import React from 'react'
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import {Link} from 'react-router-dom'
import img1 from '../images/New folder/man.png'
import'./Hero.css'

function Hero() {
  const [text]=useTypewriter({
    words:['Startup','Business','Ideas'],
    loop:{},
    typeSpeed:160,
    deleteSpeed:80
  })
  return (
    <div className='hero'>
    <div className="hero-content">
        <div className="hero-texts">
        <h1>Seed Fund On Your {' '}
          <span>
            {text}
          </span>
          <span>
            <Cursor cursorStyle='|'  />
          </span>

       </h1>
        <p>We give startups opportunity to accelerate through mentor-guidance
         and financial funds
        </p>
        <Link to="/apply" className='btn hero-btn'>Apply</Link>
        </div>

        <div className="hero-img" style={{background:`url(${img1})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}>
        
        </div>
    </div>
<div className="circiles-div">
    <div className="circle1">.</div>
    <div className="circle2">.</div>
    <div className="circle3">.</div>
    <div className="circle4">.</div>
</div>
    </div>
  )
}

export default Hero