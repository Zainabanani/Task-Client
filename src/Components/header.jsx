import React from "react";
import "../Styles/header.css";
// import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/Logo.png"
import hoto from "../assets/hoto.png"

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-white backg mobile-nav header">
        <Container className="">
          <Navbar.Brand className="headie d-flex">
        
              <img className="header-img" src={Logo} alt="" />
              <h1>TaskDuty</h1>
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="me-auto header-one gida">
              
            </Nav>

            <Nav className="maballi">
            <li>New Tasks</li>
            <li>All Tasks</li>
              <img src={hoto} alt={'hoto'} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
