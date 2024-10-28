import Card from 'react-bootstrap/Card';
import './Card1.css'
import Card21 from './Card2.1.jpg'
import Card22 from './Card2.2.jpg'
import Card23 from './Card2.3.jpg'
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Card2() {
  return (
    <CardGroup className='container'>
      <Card className='mx-5' style={{ width: "275px" , borderColor: "white" }} >
        <Link>
          <img variant="top" src= {Card21} alt="change" style={{ width: "275px" , height: "420px" , borderTopLeftRadius: "40px" , borderBottomRightRadius: "40px" }}/>
        </Link>
        <Card.Body>
        <Card.Title style={{ fontWeight: "900" }}>Jigra</Card.Title>
          <Card.Text><b>Starring:</b>Vedang Raina, Alia Bhatt, Aditya Nanda, Rahul Ravindran</Card.Text>
          <Button style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" , backgroundColor: "#4CAF50" , border: "none" }} class="btn">Know more<span class="ribbon3">Trending</span></Button>
        </Card.Body>
      </Card>
      <Card className='mx-5' style={{ width: "275px" , borderColor: "white" }} >
        <Link>
          <img variant="top" src= {Card22} alt="change" style={{ width: "275px" , height: "420px" , borderTopLeftRadius: "40px" , borderBottomRightRadius: "40px" }}/>
        </Link>
        <Card.Body>
          <Card.Title style={{ fontWeight: "900" }}>Vettaiyan</Card.Title>
          <Card.Text><b>Starring:</b> Rajinikanth, Amitabh Bachchan, Fahadh Faasil</Card.Text>
          <Button style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" , backgroundColor: "#4CAF50" , border: "none" }} class="btn">Know more<span class="ribbon2">HOT</span></Button>
        </Card.Body>
      </Card>
      <Card className='mx-5' style={{ width: "275px" , borderColor: "white" }} >
        <Link>
          <img variant="top" src= {Card23} alt="change" style={{ width: "275px" , height: "420px" , borderTopLeftRadius: "40px" , borderBottomRightRadius: "40px" }}/>
        </Link>
        <Card.Body>
          <Card.Title style={{ fontWeight: "900" }}>SWAG</Card.Title>
          <Card.Text><b>Starring:</b> Sree Vishnu, Ritu Varma, Meera Jasmine, Daksha Nagarkar</Card.Text>
          <Button style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" , backgroundColor: "#4CAF50" , border: "none" }} class="btn">Know more<span class="ribbon1">NEW</span></Button>
        </Card.Body>
        </Card>
    </CardGroup>
  );
}

export default Card2;