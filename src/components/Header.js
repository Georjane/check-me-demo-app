import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
// import { FaAngleDown } from 'react-icons/fa';
import logoSvg from '../assets/images/logo.svg';
import globalSvg from '../assets/images/global.svg';
import arrowDownSvg from '../assets/images/arrow-down.svg';

function Header() {
  return (
    <Navbar expand="lg" bg="light" variant="light" sticky="top">
      <Container>
        <Navbar.Brand href="#"><img src={logoSvg} alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
            <Nav.Link href="#">
              Services
              {' '}
              <img src={arrowDownSvg} alt="Arrow down" />
            </Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
            <Nav.Link href="#">Careers</Nav.Link>
            <Nav.Link href="#">
              <img src={globalSvg} alt="Globe" />
              {' '}

              English
              {' '}

              <img src={arrowDownSvg} alt="Arrow down" />
            </Nav.Link>
            <Nav.Link href="#">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
