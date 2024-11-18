import React from 'react'
import './Card1.css';
import Card from 'react-bootstrap/Card';
import Card11 from './Card1.1.jpg';
import Card12 from './Card1.2.jpg';
import Card13 from './Card1.3.jpg';

const Card1 = () => {
  return (
    <div className='container'>
        <div>
            <Card className="mb-5" style={{ height: "650px" , width: "100%" }}>
                <Card.Img className="mb-3" src={Card11} alt="Card image" style={{ height: "500px" , width: "100%" }} />
                <Card.Title style={{ color: "black" , fontSize: "24px" , fontWeight: "600" }}>The Art of Being Present: Wisdom from Haiku Poetry</Card.Title>
                <Card.Text style={{ color: "black" , fontSize: "18px" }}>
                    Venue: Kakinada
                </Card.Text>
                <a href="/"><button class="c">View</button></a>
            </Card>
        </div>
        <div>
            <Card className="mb-5" style={{ height: "650px" , width: "100%" }}>
                <Card.Img className="mb-3" src={Card12} alt="Card image" style={{ height: "500px" , width: "100%" }} />
                <Card.Title style={{ color: "black" , fontSize: "24px" , fontWeight: "600" }}>SCC Sky Cinema</Card.Title>
                <Card.Text style={{ color: "black" , fontSize: "18px" }}>
                    Venue: Kakinada
                </Card.Text>
                <a href="/"><button class="bn632-hover bn23">View</button></a>
            </Card>
        </div>
        <div>
            <Card className="mb-5" style={{ height: "650px" , width: "100%" }}>
                <Card.Img className="mb-3" src={Card13} alt="Card image" style={{ height: "500px" , width: "100%" }} />
                <Card.Title style={{ color: "black" , fontSize: "24px" , fontWeight: "600" }}>AGAM Live in Kakinada</Card.Title>
                <Card.Text style={{ color: "black" , fontSize: "18px" }}>
                    Venue: Kakinada
                </Card.Text>
                <a href="/"><button class="bn632-hover bn23">View</button></a>
            </Card>
        </div>
    </div>
  )
}

export default Card1