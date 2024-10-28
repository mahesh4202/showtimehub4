import Card from 'react-bootstrap/Card';
import './Card1.css'
import Card11 from './Card1.1.jpg'
import Card12 from './Card1.2.jpg'
import Card13 from './Card1.3.jpg'
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Card1() {
  return (
    <CardGroup className='container'>
      <Card className='mx-5' style={{ width: "275px" , borderColor: "white" }} >
        <Link>
          <img variant="top" src= {Card11} alt="change" style={{ width: "275px" , height: "420px" , borderTopLeftRadius: "40px" , borderBottomRightRadius: "40px" }}/>
        </Link>
        <Card.Body>
        <Card.Title style={{ fontWeight: "900" }}>Pushpa 2: The Rule</Card.Title>
          <Card.Text><b>Starring:</b> Allu Arjun, Rashmika Mandanna, Fahadh Faasil, Sunil</Card.Text>
          <Button style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" , backgroundColor: "#4CAF50" , border: "none" }} class="btn">Know more<span class="ribbon1">NEW</span></Button>
        </Card.Body>
      </Card>
      <Card className='mx-5' style={{ width: "275px" , borderColor: "white" }} >
        <Link>
          <img variant="top" src= {Card12} alt="change" style={{ width: "275px" , height: "420px" , borderTopLeftRadius: "40px" , borderBottomRightRadius: "40px" }}/>
        </Link>
        <Card.Body>
          <Card.Title style={{ fontWeight: "900" }}>Game Changer</Card.Title>
          <Card.Text><b>Starring:</b> Ram Charan, Kiara Advani, Anjali, S.J.Suryah</Card.Text>
          <Button style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" , backgroundColor: "#4CAF50" , border: "none" }} class="btn">Know more<span class="ribbon2">HOT</span></Button>
        </Card.Body>
      </Card>
      <Card className='mx-5' style={{ width: "275px" , borderColor: "white" }} >
        <Link>
          <img variant="top" src= {Card13} alt="change" style={{ width: "275px" , height: "420px" , borderTopLeftRadius: "40px" , borderBottomRightRadius: "40px" }}/>
        </Link>
        <Card.Body>
          <Card.Title style={{ fontWeight: "900" }}>Emergency</Card.Title>
          <Card.Text><b>Starring:</b> Kangana Ranaut, Anupam Kher, Bhumika Chawla</Card.Text>
          <Button style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" , backgroundColor: "#4CAF50" , border: "none" }} class="btn">Know more</Button>
        </Card.Body>
        </Card>
    </CardGroup>
  );
}

export default Card1;