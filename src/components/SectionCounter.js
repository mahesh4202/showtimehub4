import React from 'react'
import './SectionCounter.css'
import { GiFilmProjector } from "react-icons/gi";
import { BsPatchQuestion } from "react-icons/bs";
import { ImHappy } from "react-icons/im";
import { FaTasks } from "react-icons/fa";

const SectionCounter = () => {
  return (
    <div className='container'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div class="row">
            <div class="column">
                <div class="card58">
                <p><GiFilmProjector/></p>
                <h3>1500+</h3>
                <p>Theatres</p>
                </div>
            </div>
            <div class="column">
                <div class="card58">
                <p><BsPatchQuestion/></p>
                <h3>5600+</h3>
                <p>Queries solved</p>
                </div>
            </div>
            <div class="column">
                <div class="card58">
                <p><ImHappy/></p>
                <h3>10000+</h3>
                <p>Happy Customers</p>
                </div>
            </div>
            <div class="column">
                <div class="card58">
                <p><FaTasks/></p>
                <h3>13700+</h3>
                <p>Orders</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionCounter