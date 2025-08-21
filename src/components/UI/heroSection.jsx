import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRocket, FaPalette, FaEye, FaDownload, FaStar,  FaCode } from 'react-icons/fa';
import './componentCss/heroSection.css';

const HeroSection = () => {
  const features = [
    {
      icon: <FaPalette />,
      title: "3 Professional Templates",
      description: "Choose from Classic, Modern, and Creative designs"
    },
    {
      icon: <FaEye />,
      title: "Live Preview",
      description: "See your resume in real-time as you build it"
    },
    {
      icon: <FaDownload />,
      title: "PDF Export",
      description: "Download your resume as a professional PDF"
    }
  ];

  const stats = [
    { number: "3", label: "Professional Templates", icon: <FaPalette /> },
    { number: "5", label: "Easy Steps", icon: <FaCode /> },
    { number: "100%", label: "Free to Use", icon: <FaStar /> }
  ];

  return (
    <div className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="hero-content">
            <div className="hero-badge">
              <FaRocket className="badge-icon" />
              <span>Professional Resume Builder</span>
            </div>
            
            <h1 className="hero-title">
              Create Stunning Resumes with
              <span className="gradient-text"> 3D Effects</span>
            </h1>
            
            <p className="hero-description">
              Build professional resumes in minutes with our advanced 3D interactive form builder. 
              Choose from multiple templates, preview in real-time, and export to PDF with just one click.
            </p>
            
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="hero-actions">
              <Button as={Link} to="/create-resume" className="btn-primary btn-lg">
                <FaRocket className="btn-icon" />
                Start Building Now
              </Button>
              <Button as={Link} to="/about" variant="outline-light" className="btn-lg">
                <FaEye className="btn-icon" />
                Learn More
              </Button>
            </div>
          </Col>
          
          <Col lg={6} className="hero-visual">
            <div className="hero-mockup">
              <div className="mockup-screen">
                <div className="screen-content">
                  <div className="form-preview">
                    <div className="form-header">
                      <h3>Resume Builder</h3>
                      <div className="progress-bar">
                        <div className="progress-fill"></div>
                      </div>
                    </div>
                    <div className="form-fields">
                      <div className="field-group">
                        <div className="field-label">Personal Information</div>
                        <div className="field-input"></div>
                      </div>
                      <div className="field-group">
                        <div className="field-label">Professional Summary</div>
                        <div className="field-textarea"></div>
                      </div>
                      <div className="field-group">
                        <div className="field-label">Work Experience</div>
                        <div className="field-input"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mockup-shadow"></div>
            </div>
          </Col>
        </Row>
        
        <Row className="hero-features">
          {features.map((feature, index) => (
            <Col lg={4} md={6} key={index} className="feature-card ms-lg-3 mt-3">
              <div className="feature-icon">{feature.icon}</div>
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-description">{feature.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
      
      <div className="hero-background">
        <div className="bg-shape bg-shape-1"></div>
        <div className="bg-shape bg-shape-2"></div>
        <div className="bg-shape bg-shape-3"></div>
      </div>
    </div>
  );
};

export default HeroSection;
