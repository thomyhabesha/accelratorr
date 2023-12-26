import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Aboutcomp.css'
import img1 from '../images/New folder/working_result.png'
import img2 from '../images/New folder/girllaptop.jpg'
import wigly from '../images/New folder/gray_wiggly_flower_shape-removebg-preview.png'
import AOS from 'aos'
import 'aos/dist/aos.css'


function Aboutcomp() {
    useEffect(()=>{
        AOS.init();
        AOS.refresh();
        },[]);

  return (
    <div className="aboutcomp">
<div className="about-top">
    <div className="about-top_text" data-aos="fade-right" data-aos-duration="2700">
<h1>Who we are</h1>
<p >We provide tools for entrepreneurs to gain a competitive advantage in an increasingly competitive and 
    crowded ecosystem. Consider Newton’s first law of motion – “An object in motion remains in motion at constant speed unless acted
     on by an unbalanced force. At Startup accelerator, we provide investments to startups and early-stage entrepreneurs. </p> 
    <Link to="/info" className="btn about-btn"> Read More</Link>
    </div>
    <img src={img1} />
</div>
<div className="about-bottom">
<img src={img2}/>
    <div className="about-bottom_text" data-aos="fade-left" data-aos-duration="2700">
<h1>How we work</h1>
<p >Investment: Join our well structured program and grow your startup. When you join our team as a member, your family, we 
    make sure your feet reaches your destination.
Start a company: Ready to start a new business? We've got you covered with our experts who have been working in this field for a 
long time and with a wealth of expertise. 
In addition to our investment, your advisors, along with the right management team, will help you bring your ideas to life.
.Check-in: After starting the program, we continue with fast days, where we organize training seminars and workshops on topics such as fundraising, working with lawyers, product development.</p>
<Link to="/info" className="btn about-btn"> Read More</Link>
</div>
</div>

<div className="about-wiggle">
<img src={wigly}/>
</div>
    </div>
  )
}

export default Aboutcomp