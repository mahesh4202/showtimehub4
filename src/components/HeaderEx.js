import './CarouselEx.css'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaHome } from "react-icons/fa";
import { MdMovie } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { MdSportsBasketball } from "react-icons/md";
import { BiCurrentLocation } from "react-icons/bi";
import { Link } from 'react-router-dom';
import '../App.css'

function HeaderEx() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#4CAF50" }}>
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: "white" , fontSize: "24px" }}>ShowtimeHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Link className='my-3 mx-2' style={{ color: "white" , textDecoration: "none" }} to="/"><FaHome style={{ fontSize: '20px' , paddingBottom: '3px' , paddingRight: '3px' }} />Home</Link>
            <Link className='my-3 mx-2' style={{ color: "white" , textDecoration: "none" }} to="/movies"><MdMovie style={{ fontSize: '20px' , paddingBottom: '3px' , paddingRight: '3px' }} />Movies</Link>
            <Link className='my-3 mx-2' style={{ color: "white" , textDecoration: "none" }} to="/events"><MdEventAvailable style={{ fontSize: '20px' , paddingBottom: '3px' , paddingRight: '3px' }} />Events</Link>
            <Link className='my-3 mx-2' style={{ color: "white" , textDecoration: "none" }} to="/sports"><MdSportsBasketball style={{ fontSize: '20px' , paddingBottom: '3px' , paddingRight: '3px' }} />Sports</Link>
            <Link className='my-3 mx-2' style={{ color: "white" , textDecoration: "none" }} to="/"><BiCurrentLocation style={{ fontSize: '20px' , paddingBottom: '3px' , paddingRight: '3px' }} />Kakinada</Link>
            <NavDropdown id="navbarScrollingDropdown" className='my-2' style={{ backgroundColor: "white" }}>
              <NavDropdown.Item href="#action3">Ahmedabad</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Bengaluru</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Chennai</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Delhi/NCR</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Hyderabad</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Jaipur</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Kolkata</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Lucknow</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Mumbai</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Pune</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Vijayawada</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Vizag</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">View All</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
              <a class="carousel-btn" href="/">Search</a>
            </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderEx;