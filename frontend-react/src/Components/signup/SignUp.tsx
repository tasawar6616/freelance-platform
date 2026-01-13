import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './signup.css';
import {  useNavigate } from 'react-router-dom';
const SignUp = () => {

    const [formData, setFormData] = useState({
        displayName: '',
        username: '',
        email: '',
        password: '',
        terms: false
      });

      const navigate = useNavigate();

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
                        <h2>Register With Us</h2>
                         <p className='position-relative'>Create a new account with us and start using the most trusted platform to hire freelancers and provide services</p>
                    </div>
                    
                <form onSubmit={handleSubmit}>
                    <div className='fr-sign-form position-relative'>
                      <label htmlFor="displayName" className="form-label"></label>
                    <input
                      type="text"
                      className="form-control display-name"
                      id="displayName"
                      name="displayName"
                      value={formData.displayName}
                      onChange={handleChange}
                      placeholder="Display name"
                      required
                    />
                    </div>
                  <div className='fr-sign-form position-relative'>
                    <label htmlFor="username" className="form-label"></label>
                    <input
                      type="text"
                      className="form-control username"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      placeholder="Username"
                      required
                    />
                  </div>
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
                    <label className="form-check-label" htmlFor="terms">I agree to the Terms and Conditions</label>
                  </div>
                  <button type="submit" className="btn primary-btn">Create Account</button>
                  <p className="text-center fr-sign-bundle-content  mt-3">Already have an account? <Button onClick={()=> {
                    navigate('/login')
                  }}  className="text-danger">Log in here</Button></p>
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
      </section>
    
  )
}

export default SignUp