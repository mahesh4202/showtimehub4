import React from 'react'
import './ReviewEx.css'

const ReviewEx = () => {
  return (
    <div className='container my-5'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <span class="heading">User Rating</span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <p>4.1 average based on 2,54,435 reviews.</p>
        <hr style={{ border: "3px" , borderColor: "#F1F1F1"}}/>
        <div class="row">
        <div class="side">
            <div>5 star</div>
        </div>
        <div class="middle">
            <div class="bar-container">
            <div class="bar-5"></div>
            </div>
        </div>
        <div class="side right">
            <div>1,50,256</div>
        </div>
        <div class="side">
            <div>4 star</div>
        </div>
        <div class="middle">
            <div class="bar-container">
            <div class="bar-4"></div>
            </div>
        </div>
        <div class="side right">
            <div>63,107</div>
        </div>
        <div class="side">
            <div>3 star</div>
        </div>
        <div class="middle">
            <div class="bar-container">
            <div class="bar-3"></div>
            </div>
        </div>
        <div class="side right">
            <div>15,025</div>
        </div>
        <div class="side">
            <div>2 star</div>
        </div>
        <div class="middle">
            <div class="bar-container">
            <div class="bar-2"></div>
            </div>
        </div>
        <div class="side right">
            <div>6,013</div>
        </div>
        <div class="side">
            <div>1 star</div>
        </div>
        <div class="middle">
            <div class="bar-container">
            <div class="bar-1"></div>
            </div>
        </div>
        <div class="side right">
            <div>20,034</div>
        </div>
        </div>
    </div>
  )
}

export default ReviewEx
