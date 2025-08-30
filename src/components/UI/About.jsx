import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { 
  FaReact, 
  FaBootstrap, 
  FaCss3Alt, 
  FaJs, 
  FaHtml5, 
  FaGithub, 
  FaDownload, 
  FaPrint, 
  FaEye, 
  FaPalette, 
  FaCube, 
  FaMobile, 
  FaDesktop, 
  FaTabletAlt,
  FaCheckCircle,
  FaStar,
  FaRocket,
  FaUsers,
  FaCode,
  FaHeart
} from 'react-icons/fa';
import Layout from './Layout.jsx';
import './componentCss/About.css';

const About = () => {
  const features = [
    {
      icon: <FaCube />,
      title: "3D Interactive Effects",
      description: "Mouse-responsive 3D rotation effects that create an immersive user experience"
    },
    {
      icon: <FaPalette />,
      title: "Multiple Templates",
      description: "Three professional templates: Classic, Modern, and Creative designs"
    },
    {
      icon: <FaDownload />,
      title: "PDF Export",
      description: "Generate professional PDF resumes with high-quality formatting"
    },
    {
      icon: <FaPrint />,
      title: "Print Ready",
      description: "Optimized for printing with clean, professional layouts"
    },
    {
      icon: <FaEye />,
      title: "Live Preview",
      description: "Real-time preview of your resume as you build it"
    },
    {
      icon: <FaMobile />,
      title: "Responsive Design",
      description: "Works perfectly on desktop, tablet, and mobile devices"
    }
  ];

  const technologies = [
    { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
    { name: "React Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" }
  ];

  const steps = [
    {
      number: "01",
      title: "Personal Information",
      description: "Enter your basic details including name, contact information, and location"
    },
    {
      number: "02",
      title: "Professional Summary",
      description: "Write a compelling summary of your professional background and objectives"
    },
    {
      number: "03",
      title: "Work Experience",
      description: "Add your work history with job titles, companies, dates, and descriptions"
    },
    {
      number: "04",
      title: "Education & Skills",
      description: "Include your educational background and technical skills"
    },
    {
      number: "05",
      title: "Choose Template",
      description: "Select from three professional templates that match your style"
    }
  ];

  const templates = [
    {
      name: "Classic Professional",
      description: "Traditional and elegant design perfect for corporate environments",
      features: ["Clean typography", "Professional layout", "ATS friendly", "Easy to read"]
    },
    {
      name: "Modern Minimalist",
      description: "Contemporary design with clean lines and modern aesthetics",
      features: ["Two-column layout", "Modern typography", "Visual hierarchy", "Creative design"]
    },
    {
      name: "Creative Portfolio",
      description: "Eye-catching design with gradients and visual elements",
      features: ["Gradient backgrounds", "Card-based layout", "Visual appeal", "Stand out design"]
    }
  ];

  return (
    <Layout>
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={10}>
              <div className="hero-content">
                <h1 className="hero-title">
                  <FaRocket className="hero-icon" />
                  ResumeBuilder Pro
                </h1>
                <p className="hero-subtitle">
                  Professional Resume Builder with 3D Effects and Multiple Templates
                </p>
                <p className="hero-description">
                  Create stunning, professional resumes in minutes with our advanced 3D interactive form builder. 
                  Choose from multiple templates, preview in real-time, and export to PDF with just one click.
                </p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <FaUsers className="stat-icon" />
                    <span className="stat-number">3</span>
                    <span className="stat-label">Professional Templates</span>
                  </div>
                  <div className="stat-item">
                    <FaCode className="stat-icon" />
                    <span className="stat-number">5</span>
                    <span className="stat-label">Easy Steps</span>
                  </div>
                  <div className="stat-item">
                    <FaStar className="stat-icon" />
                    <span className="stat-number">100%</span>
                    <span className="stat-label">Free to Use</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h2 className="section-title">Amazing Features</h2>
              <p className="section-subtitle">
                Everything you need to create a professional resume that stands out
              </p>
            </Col>
          </Row>
          <Row>
            {features.map((feature, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <Card className="feature-card">
                  <Card.Body className="text-center">
                    <div className="feature-icon">
                      {feature.icon}
                    </div>
                    <h4 className="feature-title">{feature.title}</h4>
                    <p className="feature-description">{feature.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h2 className="section-title">How It Works</h2>
              <p className="section-subtitle">
                Create your professional resume in just 5 simple steps
              </p>
            </Col>
          </Row>
          <Row>
            {steps.map((step, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <div className="step-card">
                  <div className="step-number">{step.number}</div>
                  <h4 className="step-title">{step.title}</h4>
                  <p className="step-description">{step.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Templates Section */}
      <section className="templates-section">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h2 className="section-title">Professional Templates</h2>
              <p className="section-subtitle">
                Choose from three beautifully designed templates
              </p>
            </Col>
          </Row>
          <Row>
            {templates.map((template, index) => (
              <Col lg={4} key={index} className="mb-4">
                <Card className="template-card">
                  <Card.Body>
                    <h4 className="template-name">{template.name}</h4>
                    <p className="template-description">{template.description}</p>
                    <div className="template-features">
                      {template.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} className="feature-badge">
                          <FaCheckCircle className="badge-icon" />
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Technology Stack Section */}
      <section className="tech-section">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h2 className="section-title">Built with Modern Technologies</h2>
              <p className="section-subtitle">
                Using the latest web technologies for optimal performance and user experience
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {technologies.map((tech, index) => (
              <Col lg={2} md={3} sm={4} key={index} className="text-center mb-4">
                <div className="tech-item">
                  <div className="tech-icon" style={{ color: tech.color }}>
                    {tech.icon}
                  </div>
                  <h5 className="tech-name">{tech.name}</h5>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Responsive Design Section */}
      <section className="responsive-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h2 className="section-title">Responsive Design</h2>
              <p className="section-description">
                Our resume builder works perfectly on all devices. Whether you're using a desktop, 
                tablet, or mobile phone, you'll have the same great experience.
              </p>
              <div className="device-features">
                <div className="device-feature">
                  <FaDesktop className="device-icon" />
                  <span>Desktop Optimized</span>
                </div>
                <div className="device-feature">
                  <FaTabletAlt className="device-icon" />
                  <span>Tablet Friendly</span>
                </div>
                <div className="device-feature">
                  <FaMobile className="device-icon" />
                  <span>Mobile Responsive</span>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="responsive-mockup">
                <div className="device-mockup desktop">
                  <div className="screen"></div>
                </div>
                <div className="device-mockup tablet">
                  <div className="screen"></div>
                </div>
                <div className="device-mockup mobile">
                  <div className="screen"></div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Project Info Section */}
      <section className="project-info-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="section-title">About This Project</h2>
              <div className="project-info">
                <p className="project-description">
                  ResumeBuilder Pro is a modern, interactive resume builder built with React.js and advanced CSS3. 
                  It features 3D effects, multiple professional templates, and seamless PDF export functionality.
                </p>
                
                <div className="project-highlights">
                  <div className="highlight-item">
                    <FaCode className="highlight-icon" />
                    <h5>Clean Code</h5>
                    <p>Well-structured, maintainable codebase</p>
                  </div>
                  <div className="highlight-item">
                    <FaHeart className="highlight-icon" />
                    <h5>User-Focused</h5>
                    <p>Designed with user experience in mind</p>
                  </div>
                  <div className="highlight-item">
                    <FaGithub className="highlight-icon" />
                    <h5>Open Source</h5>
                    <p>Available for learning and contribution</p>
                  </div>
                </div>

                <div className="project-features-list">
                  <h4>Key Features:</h4>
                  <ul>
                    <li>3D interactive form with mouse-responsive effects</li>
                    <li>Multi-step form process with progress tracking</li>
                    <li>Three professional resume templates</li>
                    <li>Real-time preview functionality</li>
                    <li>PDF export with high-quality formatting</li>
                    <li>Print-optimized layouts</li>
                    <li>Fully responsive design</li>
                    <li>Dynamic form fields (add/remove experience/education)</li>
                    <li>Modern UI with glassmorphism effects</li>
                    <li>CSS-only animations for optimal performance</li>
                  </ul>
                </div>

                <div className="tech-details">
                  <h4>Technical Details:</h4>
                  <div className="tech-grid">
                    <div className="tech-category">
                      <h5>Frontend Framework</h5>
                      <p>React.js with functional components and hooks</p>
                    </div>
                    <div className="tech-category">
                      <h5>UI Components</h5>
                      <p>React Bootstrap for responsive design</p>
                    </div>
                    <div className="tech-category">
                      <h5>Styling</h5>
                      <p>Advanced CSS3 with 3D transforms and animations</p>
                    </div>
                    <div className="tech-category">
                      <h5>PDF Generation</h5>
                      <p>html2pdf.js for professional PDF export</p>
                    </div>
                    <div className="tech-category">
                      <h5>Icons</h5>
                      <p>React Icons for beautiful iconography</p>
                    </div>
                    <div className="tech-category">
                      <h5>Performance</h5>
                      <p>Optimized for speed and user experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer Section */}
      <section className="footer-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h3>Ready to Create Your Professional Resume?</h3>
              <p>Start building your resume today and take the next step in your career!</p>
              <div className="footer-actions">
                <a href="/" className="btn btn-primary btn-lg">
                  <FaRocket /> Start Building
                </a>
              </div>
              <div className="footer-note">
                <p>
                  <FaHeart className="heart-icon" />
                  Built with love for the developer community
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
    </Layout>
  );
};

export default About; 