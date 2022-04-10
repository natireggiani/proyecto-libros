import React from 'react';
import {Navbar, Container, Nav}from 'react-bootstrap';
import logo from '../Images/logo.jpg';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

export default function NavBar() {

  return (
    <>
    <header className='barra'>
        <Navbar bg="white" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img src={logo}
                  width="30"
                  height="30"
                  alt='Logo'
                  className="d-inline-block align-top"/>{' '}  
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-auto" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="me-auto">
                <Nav.Link  as={Link} to="/categoria/Astronave" className='barra-links'>Colección Astronave</Nav.Link>
                <Nav.Link as={Link} to="/categoria/RyG" className='barra-links'>Roque y Gervasio</Nav.Link>
                <Nav.Link as={Link} to="/categoria/FC" className='barra-links'>Fuera de Colección</Nav.Link>  
              </Nav>
            </Navbar.Collapse>
            <CartWidget />
          </Container>
        </Navbar>
    </header>
    <div className='encabezado'>
            <h1>Libros del Cosmonauta</h1>
            <h2>Tienda Virtual</h2>
    </div>
    </>
  );
}


