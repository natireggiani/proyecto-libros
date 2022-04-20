import React from 'react';
import {Navbar, Container, Nav}from 'react-bootstrap';
import logo from '../Images/logo.jpg';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { CartContext} from './CartContext';
import { useContext } from 'react';

export default function NavBar() {
  const {seguirComprando} = useContext(CartContext)
  return (
    <>
    <header className='barra'>
        <Navbar bg="white" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img src={logo}
                  width="50"
                  height="50"
                  alt='Logo'
                  className="d-inline-block align-top logo" onClick= {seguirComprando}/>{' '}  
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-auto" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="me-auto">
                <Nav.Link  as={Link} to="/categoria/Astronave" className='barra-links' onClick= {seguirComprando}>Colección Astronave</Nav.Link>
                <Nav.Link as={Link} to="/categoria/RyG" className='barra-links' onClick= {seguirComprando}>Roque y Gervasio</Nav.Link>
                <Nav.Link as={Link} to="/categoria/FC" className='barra-links' onClick= {seguirComprando}>Fuera de Colección</Nav.Link>  
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


