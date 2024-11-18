import Card from 'react-bootstrap/Card';
import './Card1.css'
import Card21 from './Card2.1.jpg'
import Card22 from './Card2.2.jpg'
import Card23 from './Card2.3.jpg'
import Card24 from './Card2.4.jpg'
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';

function Card2() {
  return (
    <CardGroup className='container'>
    <div class="row">
        <div class="column">
            <div class="content">
            <img src={Card21} alt="Mountains" style={{ width:"100%" , borderTopLeftRadius: "40px" , borderBottomRightRadius: "40px" }}/>
            <h3 style={{ fontWeight: "700" , paddingTop: "10px" }}>Jigra</h3>
            <Card.Text style={{ paddingBottom: "35px" }}><b>Starring:</b>Vedang Raina, Alia Bhatt, Aditya Nanda, Rahul Ravindran</Card.Text>
          <a><Link class="bn632-hover bn23" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" , paddingTop: "17px" , paddingBottom: "17px" , paddingLeft: "60px" , paddingRight: "60px" , marginTop: "100px" , textDecoration: "none" }} to='/jigra'>View</Link></a>
            </div>
        </div>
        <div class="column">
            <div class="content">
            <img src={Card22} alt="Mountains" style={{ width:"100%" , borderTopLeftRadius: "40px" , borderBottomRightRadius: "40px" }}/>
            <h3 style={{ fontWeight: "700" , paddingTop: "10px" }}>Vettaiyan</h3>
          <Card.Text><b>Starring:</b> Rajinikanth, Amitabh Bachchan, Fahadh Faasil, Rana Daggubati</Card.Text>
          <a><button class="bn632-hover bn23" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >View</button></a>
            </div>
        </div>
        <div class="column">
            <div class="content">
            <img src={Card23} alt="Mountains" style={{ width:"100%" , borderTopLeftRadius: "40px" , borderBottomRightRadius: "40px" }}/>
            <h3 style={{ fontWeight: "700" , paddingTop: "10px" }}>Swag</h3>
          <Card.Text><b>Starring:</b> Sree Vishnu, Ritu Varma, Meera Jasmine, Daksha Nagarkar</Card.Text>
          <a><button class="bn632-hover bn23" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >View</button></a>
            </div>
        </div>
        <div class="column">
            <div class="content">
            <img src={Card24} alt="Mountains" style={{ width:"100%" , borderTopLeftRadius: "40px" , borderBottomRightRadius: "40px" }}/>
            <h3 style={{ fontWeight: "700" , paddingTop: "10px" }}>Bhool Bhulaiyaa 3</h3>
          <Card.Text><b>Starring:</b>Kartik Aaryan, Vidya Balan, Madhuri Dixit and Triptii Dimri</Card.Text>
          <a><button class="bn632-hover bn23" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >View</button></a>
            </div>
        </div>
    </div>
    </CardGroup>
  );
}

export default Card2;