import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-3 mt-5">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md={6} className="mb-2 mb-md-0">
            <p className="mb-0">
              &copy; {year} Resume Builder by <strong><a href="https://adesh-gupta-dev.github.io/PORTFOLIO/" target="_blank" rel="noopener noreferrer">Adesh Gupta</a></strong>. All rights reserved.
            </p>
          </Col>

          <Col md={6} className="text-center text-md-end">
            <a href="https://github.com/adesh-gupta-dev" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="me-3" style={{ fontSize: '2.5rem' }} />
            </a>
            <a href="http://www.linkedin.com/in/adesh-gupta-linked-in" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="me-3" style={{ fontSize: '2.5rem' }} />
            </a>
            <a href="https://www.instagram.com/your___adesh/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="me-3" style={{ fontSize: '2.5rem' }} />
            </a>
            <a href="mailto:adeshgwork@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
              <FaEnvelope className="me-3" style={{ fontSize: '2.5rem' }} />
            </a>
          </Col>
        </Row>
         <Row className="align-items-center text-center text-md-start">
          <Col md={12}>
            <p className="mb-0 mt-2">
              <strong>
                Made with <span role="img" aria-label="love">❤️</span>
              </strong>
            </p>
          </Col>
         </Row>
      </Container>
    </footer>
  );
};

export default Footer;
