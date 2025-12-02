import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRocket, FaInfoCircle, FaPalette, FaHome } from 'react-icons/fa';
import './componentCss/navigation.css';
import { useAuth } from '../../context/AuthContext.jsx';

function Navbar2() {
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <Navbar expand="lg" className="custom-navbar">
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
          <Nav className="align-items-center">
            {isAuthenticated ? (
              <>
                <span className="me-3 text-light small">
                  Signed in as {user?.name || user?.email}
                </span>
                <Nav.Link onClick={handleLogout} className="nav-link">
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login" className="nav-link">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup" className="nav-link cta-button">
                  <FaPalette className="nav-icon" />
                  Sign Up
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar2;