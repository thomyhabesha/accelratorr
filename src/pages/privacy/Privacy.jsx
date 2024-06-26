import React from 'react'
import Nav from '../../components/nav/Nav'
import Footer from '../../components/footer/Footer'
import './Privacy.css'
import Data from './Data'

function Privacy() {
  return (
    <>
            <Nav/>
        <div className='priv'>
<div className="priv-header">
    <h1>PRIVACY POLICY </h1>
    <p> <b>Last Revised: Dec 12, 2023</b></p>
<p>
Our startup acceleretor is committed to protecting
 your privacy. This Privacy Policy describes how we collect, process, and share Personal Data, your
 Rights and Choices, and other important information about how we handle your Personal Data. </p>
</div>

<div className="priv-contents">


{
    Data.map(items=>{
        return(
            <div >
                <h2><span>{items.id}. </span>{items.termhead}</h2>
                <p>{items.termtext}</p>
                </div>
        )
    })
}  
                <ul className="pri-data">
<h2>Categories of Personal Data We Process</h2>
<li>Audio/Visual Data: Recordings such as audio files and records (e.g., voice mails, call recordings, and the like).</li>
<li>Biographical Data: Data relating to professional, company name and similar biographic information..</li>
<li>Contact Data: Identity Data that includes personal and business contact information, such as phone 
    number, email address or other identifiers used for communication..</li>
<li>Device/Network Data: Information regarding your interaction with a website, application, or 
    advertisement (e.g., IP Address, MAC Address, SSIDs, etc.), online user ID, 
    device characteristics (such as browser/OS version), web server logs, application logs, clear GIFs, pixel tags, and 
    information about how you use our Site and interact with us.</li>

     <h2>Sources of Personal Data We Process</h2>
<li>Data you provide us: We receive Personal Data when you provide them to us, when you fill forms or when you 
    otherwise use our Services</li>
<li>Data we collect automatically: We collect Personal Data about or generated by any device used to access our 
    Service, e.g. IP addresses and similar
     Device/Network Data.</li>
<li>Aggregators and advertisers: We receive Personal Data from ad networks, data brokers, market research, or 
    similar companies who provide us 
    with additional Personal Data, e.g. Inference Data</li>
               
                    </ul>
            
</div>
</div>
<Footer/>
    </>
  )
}

export default Privacy
