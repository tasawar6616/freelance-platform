import React from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';
import './footer.css';  // CSS for styling
import Logo from '../../assets/images/logo.png'
const Footer = () => {
  return (
   <>
   
    <footer className="custom-footer">
      <Container>
        <Row className="align-items-center">
          {/* Left side: Logo and Social Links */}
          <Col xs={12} md={3} className="text-center text-md-left">
            <div className="footer-logo">
              <img src={Logo} alt="Xertio" className="footer-logo-img" />
            </div>
            <div className="social-icons">
              <Button variant="link" className="social-icon"><FaFacebook /></Button>
              <Button variant="link" className="social-icon"><FaTwitter /></Button>
              <Button variant="link" className="social-icon"><FaLinkedin /></Button>
              <Button variant="link" className="social-icon"><FaYoutube /></Button>
              <Button variant="link" className="social-icon"><FaInstagram /></Button>
            </div>
            <p className="footer-description">
              A modern user-focused, premium freelance marketplace WordPress Theme, developed using best practices from the market.
            </p>
          </Col>

          {/* Right side: Job Locations, Services Locations, Most Visited Links */}
          <Col xs={12} md={9}>
            <Row>
              <Col xs={12} md={4}>
                <h3 className="h3">Job Locations</h3>
                <ListGroup>
                  <ListGroup.Item>Arad, Bahrain</ListGroup.Item>
                  <ListGroup.Item>Australia</ListGroup.Item>
                  <ListGroup.Item>Bahrain</ListGroup.Item>
                  <ListGroup.Item>Muharraq</ListGroup.Item>
                  <ListGroup.Item>Germany</ListGroup.Item>
                </ListGroup>
              </Col>

              <Col xs={12} md={4}>
                <h3 className="h3">Services Locations</h3>
                <ListGroup>
                  <ListGroup.Item>Pakistan</ListGroup.Item>
                  <ListGroup.Item>Germany</ListGroup.Item>
                  <ListGroup.Item>Australia</ListGroup.Item>
                  <ListGroup.Item>California</ListGroup.Item>
                  <ListGroup.Item>Hamburg</ListGroup.Item>
                </ListGroup>
              </Col>

              <Col xs={12} md={4}>
                <h3 className="h3">Most Visited Links</h3>
                <ListGroup>
                  <ListGroup.Item>Blog</ListGroup.Item>
                  <ListGroup.Item>About Us</ListGroup.Item>
                  <ListGroup.Item>Services Search</ListGroup.Item>
                  <ListGroup.Item>Freelancer Search</ListGroup.Item>
                  <ListGroup.Item>Terms and Conditions</ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Col>
        </Row>
        </Container>
        </footer>
        <footer>
            
          <div className='fr-bottom'>
            <p className="footer-bottom">
              Copyright 2025 © Theme Created By <a href="https://www.scriptsbundle.com/" target="_blank" rel="noopener noreferrer">ScriptsBundle</a>, All Rights Reserved.
            </p>
          </div>
           
         
        </footer>
        
      
      
      </>
   
  );
};

export default Footer;
