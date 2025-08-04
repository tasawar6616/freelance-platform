import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { useState } from 'react';
import './header.css'
interface NavItem {
  label: string;
  path: string;
}

const generalNavItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact Us', path: '/contact-us' },
];
const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleClick = () => setIsNavOpen((prev) => !prev);

    const navigate = useNavigate();

    const navItems: NavItem[] =  generalNavItems;
 return (
   <Navbar expand="lg" className="navWrap custom-header">
      <Container>
       
             <Navbar.Brand as={NavLink} to="/" >
         
           <div className="logoWrap ">
            <img src={Logo} alt="logo" className="logoImg" />
          </div>
          
          
        </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggleClick} />
       
        <Navbar.Collapse id="basic-navbar-nav" className={isNavOpen ? 'show' : 'collapse'}>
          <Nav className="me-auto">
            {navItems.map((item) => (
              <Nav.Link as={NavLink} key={item.path} to={item.path} className="nav-link-custom">
                {item.label}
              </Nav.Link>
            ))}
            <NavDropdown title="Browse Jobs" id="browse-jobs-dropdown" className="nav-link-custom">
              <NavDropdown.Item as={NavLink} to="/projects">Projects</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services">Services</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Button onClick={() => {
              navigate('/register');
            }} variant="dark" className="me-2 btn secondary-btn">REGISTER</Button>
            <Button onClick={() => {
              navigate('/login');
            }} variant="danger" className="btn primary-btn">SIGN IN</Button>
          </Nav>
        </Navbar.Collapse>
       
      
        
        </Container>
    </Navbar>
  );
};

export default Header;