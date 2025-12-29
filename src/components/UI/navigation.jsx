import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { FaRocket, FaInfoCircle, FaPalette, FaHome } from 'react-icons/fa';


import './componentCss/navigation.css'; // Assuming you have a CSS file for styling

function Navbar2() {
  return (
    <Navbar   expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand">
          <FaRocket className="brand-icon" />
          ResumeBuilder Pro
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-link">
              <FaHome className="nav-icon" />
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link">
              <FaInfoCircle className="nav-icon" />
              About
            </Nav.Link>
            <NavDropdown title="Templates" id="basic-nav-dropdown" className="nav-dropdown ">
              <NavDropdown.Item as={Link} to="/templates">View Upcoming Templates</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/create-resume">Create Resume</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/about">Learn More</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/create-resume" className="nav-link cta-button">
              <FaPalette className="nav-icon" />
              Start Building
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar2;