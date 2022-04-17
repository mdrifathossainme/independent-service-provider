import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Link to="/"><img className='logo' src={'https://i.ibb.co/XDZsLVF/zz-letter-logo-design-template-260nw-1144706711-prev-ui.png'} alt="" /></Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto nav-item">
          <Link className='nav-item' to="/home">Home</Link>
          <Link className='nav-item' to="/about">About</Link>
          <Link className='nav-item' to="/blog">Blog</Link>
        </Nav>
        <Nav>
          <Link className='nav-item' to="/login">Login</Link>
          <Link className='nav-item' to="/signup">Sign Up</Link>
        
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;