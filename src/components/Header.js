import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { FaAngleDown } from 'react-icons/fa';
import logoSvg from '../assets/images/logo.svg';
import globalSvg from '../assets/images/global.svg';
import menuSvg from '../assets/images/menu.svg';
import arrowDownSvg from '../assets/images/arrow-down.svg';
import Button from './Button';
import '../assets/css/Header.css';

function Header() {
  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#"><img src={logoSvg} alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle id="menu-icon" aria-controls="navbar-nav">
          <img src={menuSvg} alt="Menu bar" />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto" id="navbar-links">
            <Nav.Link as={Link} to="/" className="px-3">Home</Nav.Link>
            <Nav.Link className="px-3" as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link className="px-3" as={Link} to="/home">
              Services
              {' '}
              <img src={arrowDownSvg} alt="Arrow down" />
            </Nav.Link>
            <Nav.Link className="px-3" href="#">Blog</Nav.Link>
            <Nav.Link className="px-3" href="#">Careers</Nav.Link>
            <Nav.Link className="px-3" href="#">
              <img src={globalSvg} alt="Globe" />
              {' '}

              English
              {' '}

              <img src={arrowDownSvg} alt="Arrow down" />
            </Nav.Link>
            <Nav.Link className="px-4" href="#"><Button type="default" text="Contact Us" /></Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Header;
