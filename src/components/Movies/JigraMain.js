import React, { useState, Fragment } from "react";
import { ProgressBar, ScrollContent} from "../Styles";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaHome } from "react-icons/fa";
import { MdMovie , MdEventAvailable , MdSportsBasketball } from "react-icons/md";
import { Link } from 'react-router-dom';
import {Group, Select} from 'elementz';
import Knowmore from "./Knowmore";
import FooterEx from '../FooterEx'
const JigraMain = () => {
    const [scroll, setScroll] = useState(0);
 
    const onScroll = () => {
        const Scrolled = document.documentElement.scrollTop;
        const MaxHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const ScrollPercent = (Scrolled / MaxHeight) * 100;
        setScroll(ScrollPercent);
    };
 
    window.addEventListener("scroll", onScroll);
 
    return (
        <Fragment>
            <Container>
                <ProgressBar
                    style={{ width: `${scroll}%` }}
                ></ProgressBar>
            </Container>
            <ScrollContent>
            <Navbar expand="lg" style={{ backgroundColor: "#7532A9" }}>
                <Container fluid>
                <Navbar.Brand href="#" style={{ color: "white" , fontSize: "24px" }}>ShowtimeHub</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                    <Link className='my-3 mx-2' style={{ color: "white" , textDecoration: "none" }} to="/"><FaHome style={{ fontSize: '20px' , paddingBottom: '3px' , paddingRight: '3px' }} />Home</Link>
                    <Link className='my-3 mx-2' style={{ color: "white" , textDecoration: "none" , borderBottom: "5px solid white" }} to="/movies"><MdMovie style={{ fontSize: '20px' , paddingBottom: '3px' , paddingRight: '3px' }} />Movies</Link>
                    <Link className='my-3 mx-2' style={{ color: "white" , textDecoration: "none" }} to="/events"><MdEventAvailable style={{ fontSize: '20px' , paddingBottom: '3px' , paddingRight: '3px' }} />Events</Link>
                    <Link className='my-3 mx-2' style={{ color: "white" , textDecoration: "none" }} to="/sports"><MdSportsBasketball style={{ fontSize: '20px' , paddingBottom: '3px' , paddingRight: '3px' }} />Sports</Link>
                    <Group space ns>
                        <Select style={{ fontSize: "18px" , color: "#7532A9" , fontWeight: "600" , }}>
                        <option style={{ fontSize: "18px" , color: "black" , fontWeight: "600" }}>Kakinada</option>
                        <option style={{ fontSize: "18px" , color: "black" , fontWeight: "600" }}>Ahmedabad</option>
                        <option style={{ fontSize: "18px" , color: "black" , fontWeight: "600" }}>Bengaluru</option>
                        <option style={{ fontSize: "18px" , color: "black" , fontWeight: "600" }}>Chennai</option>
                        <option style={{ fontSize: "18px" , color: "black" , fontWeight: "600" }}>Delhi/NCR</option>
                        <option style={{ fontSize: "18px" , color: "black" , fontWeight: "600" }}>Hyderabad</option>
                        <option style={{ fontSize: "18px" , color: "black" , fontWeight: "600" }}>Jaipur</option>
                        <option style={{ fontSize: "18px" , color: "black" , fontWeight: "600" }}>Kolkata</option>
                        <option style={{ fontSize: "18px" , color: "black" , fontWeight: "600" }}>Lucknow</option>
                        <option style={{ fontSize: "18px" , color: "black" , fontWeight: "600" }}>Mumbai</option>
                        <option style={{ fontSize: "18px" , color: "black" , fontWeight: "600" }}>Pune</option>
                        <option style={{ fontSize: "18px" , color: "black" , fontWeight: "600" }}>Vijayawada</option>
                        <option style={{ fontSize: "18px" , color: "black" , fontWeight: "600" }}>Vizag</option>
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
              <Knowmore />
              <FooterEx />
            </ScrollContent>
        </Fragment>
    );
};
 
export default JigraMain;