import React from 'react'
import './InfoHeader.css'
import imgheader from '../images/New folder/darkroom.png'


function InfoHeader() {
  return (
    <>
    <div className='infoheader' style={{background:`url(${imgheader})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}>
<div className="info-header-text">
    <h1>O<span>ur Pro</span>grams</h1>
    <p>Our overall goal is to see your startup takeoff and to power founders to go further and faster. After you are family member, you'll basically be intensively productive hence, be in better position than before </p>
</div>
</div>


    
    </>
  )
}

export default InfoHeader