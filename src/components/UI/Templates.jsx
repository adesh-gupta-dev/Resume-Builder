import React from 'react';
import Layout from './Layout.jsx';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Templates = () => {
  const templates = [
    {
      id: 1,
      name: 'Professional',
      description: 'Clean and modern design perfect for corporate positions',
      image: 'https://www.my-resume-templates.com/wp-content/uploads/2025/03/resume-template-ats-two-columns-343.jpg',
      category: 'Corporate'
    },
    {
      id: 2,
      name: 'Creative',
      description: 'Bold and artistic design for creative industries',
      image: 'https://www.my-resume-templates.com/wp-content/uploads/2024/01/internship-resume-sample-116.jpg',
      category: 'Creative'
    },
    {
      id: 3,
      name: 'Minimalist',
      description: 'Simple and elegant design focusing on content',
      image: 'https://www.my-resume-templates.com/wp-content/uploads/2023/07/job-resume-template-259.jpg',
      category: 'Modern'
    },
    {
      id: 4,
      name: 'Executive',
      description: 'Sophisticated design for senior-level positions',
      image: 'https://www.my-resume-templates.com/wp-content/uploads/2023/12/one-page-resume-template-282.jpg',
      category: 'Executive'
    }
  ];

  return (
    <Layout>
      <Container className="py-5 text-white ">
        <Row className="justify-content-center">
          <Col>
            <h1 className="text-center mb-4">Choose Your Resume Template</h1>
            <p className="text-center mb-5">Select from our collection of professionally designed templates</p>
            
            <Row>
              {templates.map((template) => (
                <Col key={template.id} lg={3} md={6} className="mb-4 ">
                  <Card className="h-100 template-card text-white ">
                    <Card.Img variant="top" src={template.image} />
                    <Card.Body className="d-flex flex-column">
                      <Card.Title>{template.name}</Card.Title>
                      <Card.Text>{template.description}</Card.Text>
                      <div className="mt-auto">
                        
                        <Button variant="primary" className="w-100">
                          Coming Soon
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Templates; 