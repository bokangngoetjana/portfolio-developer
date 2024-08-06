import { useState, useEffect } from "react";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasExample() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);

    }, [] )

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

  return (
    <>
      {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
        <Navbar key={expand} expand={expand} className={scrolled ? "scrolled" : ""}>
          <Container fluid>
            <Navbar.Brand href="#home">
                <img src={logo} alt="logo"/>
            </Navbar.Brand>
            {/**Conditionally render the toggle icon for smaller screens **/}
            {expand !== false && (
              <Navbar.Toggle aria-controls={`basic-navbar-nav ${expand}`} >
              <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
            )}
            
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body id="basic-navbar-nav align-items-center">
                <Nav className="me-auto">
                  <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={ () => onUpdateActiveLink('home')}>Home</Nav.Link>
                  <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={ () => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                  <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={ () => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                  
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;