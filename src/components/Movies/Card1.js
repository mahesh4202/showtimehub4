import Card from 'react-bootstrap/Card';
import './Card1.css'
import Card11 from './Card1.1.jpg'
import Card12 from './Card1.2.jpg'
import Card13 from './Card1.3.jpg'
import Card14 from './Card1.4.jpg'
import CardGroup from 'react-bootstrap/CardGroup';

function Card1() {
  return (
    <CardGroup className='container'>
    <div class="row">
        <div class="column">
            <div class="content">
            <img src={Card11} alt="Mountains" style={{ width:"100%" , borderTopLeftRadius: "40px" , borderBottomRightRadius: "40px" }}/>
            <h3 style={{ fontWeight: "700" , paddingTop: "10px" }}>Pushpa 2: The Rule</h3>
            <Card.Text><b>Starring:</b> Allu Arjun, Rashmika Mandanna, Fahadh Faasil, Sunil</Card.Text>          
            <a><button class="bn632-hover bn23" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >View</button></a>
            </div>
        </div>
        <div class="column">
            <div class="content">
            <img src={Card12} alt="Mountains" style={{ width:"100%" , borderTopLeftRadius: "40px" , borderBottomRightRadius: "40px" }}/>
            <h3 style={{ fontWeight: "700" , paddingTop: "10px" }}>Game Changer</h3>
            <Card.Text><b>Starring:</b> Ram Charan, Kiara Advani, Anjali, S.J.Suryah, Srikanth</Card.Text>          
            <a><button class="bn632-hover bn23" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >View</button></a>
            </div>
        </div>
        <div class="column">
            <div class="content">
            <img src={Card13} alt="Mountains" style={{ width:"100%" , borderTopLeftRadius: "40px" , borderBottomRightRadius: "40px" }}/>
            <h3 style={{ fontWeight: "700" , paddingTop: "10px" }}>Emergency</h3>
            <Card.Text><b>Starring:</b> Kangana Ranaut, Anupam Kher, Bhumika Chawla</Card.Text>          
            <a><button class="bn632-hover bn23" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >View</button></a>
            </div>
        </div>
        <div class="column">
            <div class="content">
            <img src={Card14} alt="Mountains" style={{ width:"100%" , borderTopLeftRadius: "40px" , borderBottomRightRadius: "40px" }}/>
            <h3 style={{ fontWeight: "700" , paddingTop: "10px" }}>Swayambhu</h3>
          <Card.Text><b>Starring:</b>Nikhil Siddharth, Nabha Natesh, Samyuktha Menon</Card.Text>          
          <a><button class="bn632-hover bn23" style={{ borderTopRightRadius: "0px" , borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" , borderBottomLeftRadius: "0px" }} >View</button></a>
            </div>
        </div>
    </div>
    </CardGroup>
  );
}

export default Card1;