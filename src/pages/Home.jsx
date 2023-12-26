import React from 'react'

import Nav from '../components/nav/Nav'
import About from '../components/about/Aboutcomp'
import Hero from '../components/hero/Hero.jsx'
import Road from '../components/road/Road.jsx'
import Step from '../components/step/Step'
import Footer from '../components/footer/Footer'
import './Home.css'

function Home() {
  return (
    <div className="home" style={{width:"100vw", overflow:"hidden"}}>
       <Nav/>
  <Hero/>
  <About/>
  <Road/>
  <Step/>
  <Footer/>
    </div>
  )
}

export default Home