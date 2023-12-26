import React from 'react'
import Data from './Data'
import img2 from '../images/New folder/gray_wiggly_flower_shape-removebg-preview.png'
import "./Road.css"
function Road() {
    const roadsection=Data.map(item=>{
        return(
            <ul className="road-sections">
                <li>{item.firsttext}</li>
                <li>{item.sectext}</li>
                
                <div class="image-container">
                <li><img src={item.img}/></li>
        <div class="image-text">{item.hoverText}</div>
    </div>
            </ul>
        )
    })
  return (
    <div className='road'>
        <h1>You are <span style={{color:"#fd8349"}}>family </span>now!</h1>

<div className="road-container">
{roadsection}
</div>
<div className="wiggly-road">
    <img src={img2}/>
</div>
    </div>
  )
}

export default Road