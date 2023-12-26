import './Step.css'
import ellipse from '../images/New folder/Ellipse_9-removebg-preview.png';
import users from '../images/New folder/Users-removebg-preview.png';
import book from '../images/New folder/Bookmark-removebg-preview.png';
import message from '../images/New folder/Speech_Bubble-removebg-preview.png';
import leaf2 from '../images/New folder/Objects-removebg-preview (1).png';
import vectorimg from '../images/New folder/vectorimg.png';
import React, { useRef, useState } from 'react';



 const Step = () => {
  return (
<div className="step">
      <div className="left-half" style={{background:`url(${vectorimg})`,backgroundSize:"contain",backgroundPosition:"left",backgroundRepeat:"no-repeat"}}>
<h1>Ho<span style={{paddingBottom:"3px",borderBottom:"1px solid black"}}>w to get inv</span>olved</h1>
<div className="elipse-d">
<div className="elipse1">.</div>
<div className="elipse2">.</div>
<div className="elipse3">.</div>
</div>

<div className="left-content">
  <div className="left-cont-left">
    <img src={message}/>
    <div>
     <p> Mentor founders
Join our growing network of skilled mentors and entrepreneur.
</p>
    </div>
  </div>

  <div className="left-cont-right">
    <img src={users}/>
        <div>

      <p>Meet our alumni
We’ll support your startup. located  in Ethiopia, Addis Ababa;. We help entrepreneurs improve their 
investment readiness through our network of entrepreneur support organizations and our platform.</p>
    </div>
 
  </div>
</div>
</div>


<div className="right-content" >

<div className="right-leafimg">
  <img src={leaf2}/>
  
</div>

<div className="right-cont" style={{background:`url(${ellipse})`,backgroundSize:"contain",backgroundPosition:"right",backgroundRepeat:"no-repeat"}}>
    <div className="right-cont-right">
      <img src={book}/>
    <div>
     <p> Mentor founders
Join our growing network of skilled mentors and entrepreneur.
</p>
    </div>
    </div>
  </div>
</div>
     
      

    </div>
  );
};
export default Step;