import React from 'react';
import {Navbar, Container, Nav}from 'react-bootstrap';
import logo from '../Images/logo.jpg';
import CartWidget from './CartWidget';

export default function NavBar() {

  return (
    <>
    <header className='barra'>
        <Navbar bg="white" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img src={logo}
                  width="30"
                  height="30"
                  alt='Logo'
                  className="d-inline-block align-top"/>{' '}
                  
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-auto" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="me-auto">
                <Nav.Link href="#link">Colección Astronave</Nav.Link>
                <Nav.Link href="#link">Roque y Gervasio</Nav.Link>
                <Nav.Link href="#link">Fuera de Colección</Nav.Link>  
              </Nav>
             
            </Navbar.Collapse>
            <CartWidget />
          </Container>
         
        </Navbar>
       
    </header>
    
   </>
  );
}


