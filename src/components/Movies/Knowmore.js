import React from 'react'
import Card21 from "./Card2.1.jpg"
import Knowmore1 from './Knowmore1.jpg'
import Knowmore2 from './Knowmore2.jpg'
import Knowmore3 from './Knowmore3.jpg'
import Knowmore4 from './Knowmore4.jpg'
import Knowmore5 from './Knowmore5.jpg'
import './Knowmore.css'
import HeaderEx from '../HeaderEx'

const Knowmore = () => {
  return (
    <div>
        <HeaderEx />
    <div className='container my-4'>
        <div className='d-flex'>
            <div class="image" style={{ width: "30%" }}>
                <img className='img85' src={Card21} style={{ width: "100%" }}/>
            </div>
            <div style={{ width: "70%" , paddingLeft: "10px"}}>
            <h1>Jigra</h1>
            <div style={{ textAlign: "left"}}>
                <h4>Plot</h4>
                <p>Satya is a young woman who has faced more than her fair share of struggles. Growing up with her brother Ankur after their parents’ tragic deaths, the siblings became inseparable, relying on each other entirely. Their lives are stable but modest under the care of a distant uncle. This quiet life takes a dramatic turn when Ankur, while on a business trip with a reckless cousin, is accused of possessing drugs. In this foreign land with unforgiving drug laws, Ankur’s case swiftly escalates, and he is sentenced to death, devastating Satya.Determined to rescue her brother, Satya refuses to accept the grim fate handed to him. She travels to the country where Ankur is imprisoned, finding herself entangled in a complex legal and social landscape. To navigate this foreign justice system, she enlists the help of two unlikely allies: Bhatia, a former gangster whose son faces a similar predicament, and Muthu, an ex-policeman<span style={{color: "blue"}}>.....Read more</span></p>
                <h4>Released on</h4>
                <p>11 October 2024</p>
            </div>
            </div>
        </div>        
        <div className='mt-5'>
            <div>
                <h4 style={{ textAlign: "left"}}>Cast</h4>
            </div>
            <div className='d-flex '>
                <div>
                    <img style={{ width: "80%" , borderRadius: "50%"}} src={Knowmore1} alt="Avatar" />
                    <p>Alia Bhatt</p>
                </div>
                <div>
                    <img style={{ width: "80%" , borderRadius: "50%"}} src={Knowmore2} alt="Avatar" />
                    <p>Vedang Raina</p>
                </div>
                <div>
                    <img style={{ width: "80%" , borderRadius: "50%"}} src={Knowmore3} alt="Avatar" />
                    <p>Aditya Nanda</p>
                </div>
                <div>
                    <img style={{ width: "80%" , borderRadius: "50%"}} src={Knowmore4} alt="Avatar" />
                    <p>Rahul Ravindran</p>
                </div>
                <div>
                    <img style={{ width: "80%" , borderRadius: "50%"}} src={Knowmore5} alt="Avatar" />
                    <p>Vivek Gomber</p>
                </div>
            </div>
        </div>
        <a href="/buttons/43" class="btn41-43 btn-43" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >Book now</a>
    </div>
    </div>
  )
}

export default Knowmore