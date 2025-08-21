import './componentCss/featureSection.css'; // Custom styles
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const features = [
  {
    title: 'Easy to Use',
    description: 'Just fill in the blanks and download your resume.',
  },
  {
    title: 'ATS-Friendly',
    description: 'Designed to pass applicant tracking systems.',
  },
  {
    title: 'Customizable Templates',
    description: 'Choose from modern and professional layouts.',
  },
  {
    title: 'Instant Preview',
    description: 'See your resume update in real-time.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-5  text-white">
      <Container>
        <h2 className="mb-4 text-center fw-bold">Why Use Our Resume Builder?</h2>
        <Row className="justify-content-center">
          <Col md={8} className='responsive-col '>
            <div className="d-flex  flex-column flex-md-row justify-content-center align-items-center">
              {features.map((feature, index) => (
                
                 <div key={index} className="mb-3 card ms-3">
                  <strong>{feature.title}</strong> – <p>{feature.description}</p>
                  </div>
                
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeaturesSection;
