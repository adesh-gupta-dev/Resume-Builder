import React from 'react';
import Layout from '../UI/Layout.jsx';
import { Container, Row, Col, Form as BootstrapForm, Button } from 'react-bootstrap';

export default function Form() {
  return (
    <Layout>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 className="text-center mb-4">Create Your Resume</h1>
            <p className="text-center mb-5">Fill in your information below to create a professional resume.</p>
            
            <BootstrapForm>
              <Row>
                <Col md={6}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>First Name</BootstrapForm.Label>
                    <BootstrapForm.Control type="text" placeholder="Enter your first name" />
                  </BootstrapForm.Group>
                </Col>
                <Col md={6}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Last Name</BootstrapForm.Label>
                    <BootstrapForm.Control type="text" placeholder="Enter your last name" />
                  </BootstrapForm.Group>
                </Col>
              </Row>
              
              <BootstrapForm.Group className="mb-3">
                <BootstrapForm.Label>Email</BootstrapForm.Label>
                <BootstrapForm.Control type="email" placeholder="Enter your email" />
              </BootstrapForm.Group>
              
              <BootstrapForm.Group className="mb-3">
                <BootstrapForm.Label>Phone</BootstrapForm.Label>
                <BootstrapForm.Control type="tel" placeholder="Enter your phone number" />
              </BootstrapForm.Group>
              
              <BootstrapForm.Group className="mb-3">
                <BootstrapForm.Label>Professional Summary</BootstrapForm.Label>
                <BootstrapForm.Control as="textarea" rows={12} placeholder="Brief summary of your professional background" />
              </BootstrapForm.Group>
              
              <div className="text-center">
                <Button variant="primary" size="lg" className="me-3">
                  Generate Resume
                </Button>
                <Button variant="outline-secondary" size="lg">
                  Save Draft
                </Button>
              </div>
            </BootstrapForm>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}