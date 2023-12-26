import React,{useRef} from 'react'
import {Link} from 'react-router-dom'
import emailjs from '@emailjs/browser'
import vectorbg from '../../components/images/New folder/vectorbg.png'
import ellipse from '../../components/images/New folder/vectorcircle.png'
import formimg from '../../components/images/New folder/man_working_online-removebg-preview.png'
import './Apply.css'

function Apply() {
const form=useRef();

const sendEmail=(e)=>{
e.preventDefault();

emailjs.sendForm('service_egpun0w','template_pwjulen',form.current,'SnYKvxFO7qdiKlqMI')
.then((result)=>{
  alert("Great! we'll get back to you");
}, (error)=>{
  alert("woops! somethings wrong, please try again");
});

e.target.reset()
};


  return (
    <div className='Apply' style={{background:`url(${vectorbg})`,backgroundSize:"contain",backgroundPosition:"right",backgroundRepeat:"no-repeat"}}>
       <div className="apply-contents">
        <h1>Application</h1>

        <div className="form-content">
          <form ref={form} onSubmit={sendEmail}>
     <lable>Full name</lable>
     <input type='text' name="name" />
        
     <lable>Email</lable>
     <input type='email' name="email" />
          
     <lable>Company Name</lable>
     <input type='text' name="company-name" />
          
     <lable>Phone number</lable>
     <input type='text' name="number" />

     <lable>Give us Little info about your Startup</lable>
     <textarea rows="7" cols="30" style={{backgroundColor:"#cfcdcd"}} name="info"/>
     <p className="agree">By clickig on "Apply", You agree to and understand our <span><Link to="/terms">terms of use</Link></span> & <span><Link to="/privacy">Privacy policy</Link></span></p>
         
          <button type="submit" className='btn'>Apply</button>
          </form>

          <div className="form-img">
            <img src={formimg} />
          </div>
        </div>
          <div className="apply-ellipse">
<img src={ellipse}/>
          </div>
       </div>
    </div>
  )
}

export default Apply