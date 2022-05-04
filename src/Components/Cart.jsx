import React from 'react';
import { useContext } from 'react';
import { CartContext} from './CartContext';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {BsTrash} from "react-icons/bs";


export default function Cart() {
    const {carrito, limpiarCarrito, removerDeCarrito, totalPrecioCarrito, seguirComprando} = useContext(CartContext)
    
    
    
    return (
    <>
        {
        totalPrecioCarrito() === 0 
        ?   <div>
                <h1 className='carrito-titulo animate__animated animate__heartBeat'>El carrito está vacío</h1>
                <p className='carrito-subtitulo'>Te vas a perder estas obras de arte?</p>
                <div className='boton-agregar-cart2'>
                    <Link to='/'><Button variant='light' className='seguir-comprando' onClick= {seguirComprando}>Seguir comprando</Button></Link>
                </div>
            </div>
        :   <div>
                <h1 className='carrito-titulo'>Tu Compra:</h1>
                <div >
                {carrito.map((item)=>
                    <Card className='carrito-card' key={item.id}>
                        <div className='flex-padre'>
                            <div className='carrito-card-img'>
                                <Card.Img variant="top" src={item.imagen} className='carrito-card-img2' alt='iamgen'/>
                            </div>
                        <div className='carrito-card-body'>
                            <Card.Body>
                                <Card.Title className='carrito-card-titulo'><b>{item.titulo}</b></Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>{item.autor}</ListGroupItem>
                                <ListGroupItem>Cantidad = {item.cantidad}</ListGroupItem>
                                <ListGroupItem>Precio unitario = ${item.precio}</ListGroupItem>
                                <ListGroupItem><b>Precio Total = ${item.precio * item.cantidad}</b></ListGroupItem>
                            </ListGroup>
                        </div>
                        <button className='boton-trash'  onClick = {()=>removerDeCarrito(item.id)}><BsTrash className='icono-trash'/></button>
                        </div>
                    </Card> 
                )}  
                </div>
            <h1 className='carrito-titulo'>Total a pagar: ${totalPrecioCarrito()}</h1>
            <div className='boton-cart'>
                <Button variant='light' className='boton-agregar-cart' onClick = {limpiarCarrito}>Vaciar Carrito</Button>
                <Link to='/formulario'><Button variant='light' className='boton-agregar-cart'><b>Finalizar Compra</b></Button></Link>
                <Link to='/'><Button variant='light' className='boton-agregar-cart'>Seguir comprando</Button></Link>
            </div>
            </div>
            }
    </>
    );
}