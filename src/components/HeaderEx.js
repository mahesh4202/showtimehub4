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
import {Group, Select} from 'elementz';
import '../App.css'

function HeaderEx() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#7532A9" }}>
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: "white" , fontSize: "24px" }}>ShowtimeHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Link className='my-3 mx-2' style={{ color: "white" , textDecoration: "none" }} to="/"><FaHome style={{ fontSize: '20px' , paddingBottom: '3px' , paddingRight: '3px' }} />Home</Link>
            <Link className='my-3 mx-2' style={{ color: "white" , textDecoration: "none" }} to="/movies"><MdMovie style={{ fontSize: '20px' , paddingBottom: '3px' , paddingRight: '3px' }} />Movies</Link>
            <Link className='my-3 mx-2' style={{ color: "white" , textDecoration: "none" }} to="/events"><MdEventAvailable style={{ fontSize: '20px' , paddingBottom: '3px' , paddingRight: '3px' }} />Events</Link>
            <Link className='my-3 mx-2' style={{ color: "white" , textDecoration: "none" }} to="/sports"><MdSportsBasketball style={{ fontSize: '20px' , paddingBottom: '3px' , paddingRight: '3px' }} />Sports</Link>
            <Group space ns>
              <Select md>
              <option>Kakinada</option>
              <option>Ahmedabad</option>
              <option>Bengaluru</option>
              <option>Chennai</option>
              <option>Delhi/NCR</option>
              <option>Hyderabad</option>
              <option>Jaipur</option>
              <option>Kolkata</option>
              <option>Lucknow</option>
              <option>Mumbai</option>
              <option>Pune</option>
              <option>Vijayawada</option>
              <option>Vizag</option>
              </Select>
            </Group>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
            <button className='button63'>Search</button>
            </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderEx;