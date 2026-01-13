import '../signup/signup.css';
import './login.css'
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {  useNavigate } from 'react-router-dom';

const Login = () => {
     const [formData, setFormData] = useState({
        displayName: '',
        username: '',
        email: '',
        password: '',
        terms: false
      });

      const [show, setShowModal] = useState(false);

      const navigate =  useNavigate();
  
      const handleShowModal = () => setShowModal(true);
      const handleCloseModal = () => setShowModal(false);

      const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: type === 'checkbox' ? checked : value
        }));
      };

      const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
      };
  return (
    <section className='fr-sign-in-hero'>
     <Container>
          <Row>
            <Col md={6}>
              <div className="fr-sign-container">
                 <div className='fr-sign-content position-relative'>
                    <div className='heading-panel'>
                        <h2>Sign to Exertio World</h2>
                         <p className='position-relative'>Sign in to use your dashboard it's fast and free. Showcase your brand, enhance your listings, and much more.</p>
                    </div>
                    
                <form onSubmit={handleSubmit}>
                  <div className='fr-sign-form position-relative'>
                    <label htmlFor="email" className="form-label"></label>
                    <input
                      type="email"
                      className="form-control email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email address"
                      required
                    />
                  </div>
                  <div className='fr-sign-form position-relative'>
                    <label htmlFor="password" className="form-label"></label>
                    <input
                      type="password"
                      className="form-control password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="mb-3 form-check ">
                    <input
                      type="checkbox"
                      className="form-check-input "
                      id="terms"
                      name="terms"
                      checked={formData.terms}
                      onChange={handleChange}
                      required
                    />
                    <label className="form-check-label" htmlFor="terms">Keep me logged in</label>
                    <a onClick={() => {handleShowModal()}}>
                        <span>Forgot Password</span>
                    </a>
                  </div>
                  <button type="submit" className="btn primary-btn">Sign in</button>
                  <p className="text-center fr-sign-bundle-content  mt-3">Don't have an account? ? <Button onClick={()=> {
                    navigate('/register')
                  }}  className="text-danger">Register here</Button></p>
                </form>
              </div>
              {/* <div className="alert-custom" role="alert">
                <i className="fas fa-home"></i> User Dashboard
                <br />
                Each user will have their own dashboard and enjoy working
              </div> */}

                 </div>
                
            </Col>
            <Col md={6} className='right-div'>
              
            </Col>
            
          </Row>
        </Container>

         <Modal className='forget_pwd' show={show} onHide={handleCloseModal} centered>
      <Modal.Header closeButton >
          <Modal.Title>Forget Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3 fr-sign-form" controlId="formProjectName">
              
              <Form.Control
                 
                      type="email"
                      className="form-control email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email address"
                      required
                    
              />
            </Form.Group>
          <Button className='btn primary-btn' variant="primary" >
            Recover Now
          </Button>
          </Form>
        </Modal.Body>
        
    </Modal>
      </section>
  )
}

export default Login