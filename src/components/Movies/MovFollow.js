import React from 'react'
import './MovFollow.css'
import Follow1 from './Follow1.jpg'
import Follow2 from './Follow2.jpg'
import Follow3 from './Follow3.jpg'
import Follow4 from './Follow4.jpg'

const MovFollow = () => {
  return (
    <div className='container'>
        <div class="row">
            <div class="column">
                <div class="card1">
                <img src= {Follow1} alt="John" style= {{ width: "100%" }}/>
                <div class="container22">
                    <h2>Chiranjeevi</h2>
                    <p>He gained popularity among masses for introducing break dances<span style={{color: "blue"}}>.....Read more</span></p>
                    <p><button class="button">Follow</button></p>
                </div>
                </div>
            </div>
            <div class="column">
                <div class="card1">
                <img src= {Follow2} alt="Mike" style= {{ width: "100%" }}/>
                <div class="container22">
                    <h2>Tamannah</h2>
                    <p>The actress made her acting debut at a very young age<span style={{color: "blue"}}>.....Read more</span></p>
                    <p><button class="button">Follow</button></p>
                </div>
                </div>
            </div>
            <div class="column">
                <div class="card1">
                <img src= {Follow3} alt="Mike" style= {{ width: "100%" }}/>
                <div class="container22">
                    <h2>Bobby Deol</h2>
                    <p>Bobby Deol is an Indian actor who made his debut in 1995<span style={{color: "blue"}}>.....Read more</span></p>
                    <p><button class="button">Follow</button></p>
                </div>
                </div>
            </div>
            <div class="column">
                <div class="card1">
                <img src= {Follow4} alt="Jane" style= {{ width: "100%" }}/>
                <div class="container22">
                    <h2>Alia Bhatt</h2>
                    <p>Alia Bhatt debuted as a child actress in Sangharsh (1999)<span style={{color: "blue"}}>.....Read more</span></p>
                    <p><button class="button">Follow</button></p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovFollow