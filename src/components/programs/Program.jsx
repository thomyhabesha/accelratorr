import React from 'react'
import './Program.css'
import leaf from '../images/New folder/Objects-removebg-preview.png'
import textimg from '../images/New folder/THE_PROGRAM-removebg-preview.png'
import Data from '../programs/Data'
import vectorimg from '../images/New folder/Vector-removebg-preview.png'


function Program() {
  return (
    <div className='program' style={{overflow:"hidden"}}>
        <div className="program-leafimg">
            <img src={leaf}/>
        </div>
      
        <div className="program-contents" style={{background:`url(${vectorimg})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}} > 

<div className="program-content-header">
    <img src={textimg}/>
    <div >

    {
       Data.map(items=>{
        return(
             <ul>
              <li><b>{items.header}</b></li>
              <li>{items.text}</li>
             </ul>
        )
       })
    }
    </div>
</div>
<div className="whyaccekeratr">
  <div>
<h1>Why need an acceleretor?</h1>
<p>
Startup accelerators offer a plethora of benefits to both startups and corporations, making them a valuable investment
 and collaboration opportunity. Here are some key reasons why they are worth it for both parties and
For startups:</p>
<p><b>Funding opportunities:</b> Many accelerators offer seed funding or connections to investors, which can be crucial for 
startups to scale their operations and bring their ideas to life.</p>

<p><b>Access to expertise:</b> Accelerators provide startups with access to a network of
 experienced mentors, industry experts, and successful entrepreneurs. These experts offer guidance, feedback, and
 </p>
<p><b>Validation & credibility:</b> Participation in a reputable accelerator program can enhance a startup’s credibility and 
market</p>
 reputation, making it more attractive to potential customers, partners, and investors.

<p><b>Networking:</b> Accelerator cohorts bring together a diverse group of startups and mentors, fostering valuable networking 
opportunities and potential collaborations that can lead to long-term business partnerships.</p>

<p><b>Intensive learning environment:</b> Accelerators often organize workshops, seminars, and boot camps to accelerate 
learning and equip startups with essential skills in areas like marketing, product development, and sales.</p>

</div>

<div > 
<h1>Areas</h1>
<p>
Startup accelerators have a proven success rate and can help you grow in several different areas:</p>
<ul className="info-last-div">
      <li> Business model & strategy</li>
       <li>Leadership & team</li>
      <li> User-centered design</li>
      <li> Technology</li>
      <li> Compliance </li> 
      <li> Relational capital</li>
     <li> Networking</li>
</ul>
    </div>


         </div>


        </div>
    </div>
  )
}

export default Program