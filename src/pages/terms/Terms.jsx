import React from 'react'
import Nav from '../../components/nav/Nav'
import Footer from '../../components/footer/Footer'
import './Terms.css'
import Data from './Data'

function Terms() {
  return (
    <>
            <Nav/>
        <div className='terms'>
<div className="terms-header">
    <h1>Terms of use</h1>
    <p> <b>Last Revised: Dec 12, 2023</b></p>
<p>
 you may have with us (together with our Site, collectively referred to as our “Services”). By accessing or using our Services, you are agreeing 
to these terms and conditions (the “Terms”) and concluding a legally binding
 contract with us. Do not access or use our Services if you are unwilling or unable to be bound by the Terms.</p>
</div>
<div className="term-contents">


{
    Data.map(items=>{
        return(
            <div>
                <h2><span>{items.id}. </span>{items.termhead}</h2>
                <p>{items.termtext}</p>
            </div>
        )
    })
}
</div>
</div>
<Footer/>
    </>
  )
}

export default Terms