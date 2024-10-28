import React from 'react'
import './FooterEx.css'
import { MDBFooter } from 'mdb-react-ui-kit';

const FooterEx = () => {
  return (
    <div>
    <MDBFooter className='text-center text-dark' style={{ backgroundColor: '#dcdcdc' , fontWeight: 200 }}>
      <div>
        <h5>Follow us</h5>
      </div>
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <a href="#" class="fa mx-3 fa-facebook"></a>
        <a href="#" class="fa mx-3 fa-twitter"></a>
        <a href="#" class="fa mx-3 fa-google"></a>
        <a href="#" class="fa mx-3 fa-linkedin"></a>
        <a href="#" class="fa mx-3 fa-youtube"></a>
        <a href="#" class="fa mx-3 fa-instagram"></a>
        <a href="#" class="fa mx-3 fa-pinterest"></a>
        <a href="#" class="fa mx-3 fa-snapchat-ghost"></a>
        <a href="#" class="fa mx-3 fa-yahoo"></a>
        <a href="#" class="fa mx-3 fa-reddit"></a>
      </div>
      <div className='text-center text-dark p-3'>
        © 2024 Copyright:
        <a className='text-dark' href='https://mdbootstrap.com/'>
            showtimehub.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default FooterEx