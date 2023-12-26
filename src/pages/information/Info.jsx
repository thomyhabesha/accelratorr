import React from 'react'
import './Info.css'
import Nav from '../../components/nav/Nav'
import InfoHeader from '../../components/info/InfoHeader'
import Program from '../../components/programs/Program'
import Footer from '../../components/footer/Footer'

function Info() {
  return (
    <div className="Info" style={{overflow:"hidden"}}>
        <Nav/>
        <InfoHeader/>
        <Program/>
        <Footer/>
    </div>
  )
}

export default Info