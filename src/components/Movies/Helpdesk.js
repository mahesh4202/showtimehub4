import React from 'react'
import './Helpdesk.css'
import Helpdeskgif from './Helpdesk.gif'
import { PiPhoneOutgoingFill } from "react-icons/pi";

const Helpdesk = () => {
  return (
    <div className='d-flex' style={{ backgroundColor: "#7532A9" }}>
        <div>
        <img src={Helpdeskgif} alt='Help' width={200} height={200}/>
        </div>
        <div className='center'>
            <div>
            <div style={{ fontSize: "24px" , fontWeight: "600" }}> Contact our Customer Service for any queries</div>
            <div className='center2'>
            <a class="bn39" href="/"><span class="bn39span"><PiPhoneOutgoingFill style={{ paddingRight: "1px" }} />Call Now</span></a>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Helpdesk