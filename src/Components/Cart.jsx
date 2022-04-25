import React from 'react';
import { useContext } from 'react';
import { CartContext} from './CartContext';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {BsTrash} from "react-icons/bs";


export default function Cart() {
    const {carrito, limpiarCarrito, removerDeCarrito, totalPrecioCarrito, seguirComprando} = useContext(CartContext)
    
    console.log(carrito)
    
    
    return (
    <>
        {
        totalPrecioCarrito() === 0 
        ?   <div>
                <h1 className='carrito-titulo'>El carrito está vacío</h1>
                <div className='boton-agregar-cart2'>
                    <Link to='/'><button className='seguir-comprando' onClick= {seguirComprando}>Seguir comprando</button></Link>
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
                <button className='boton-agregar-cart' onClick = {limpiarCarrito}>Vaciar Carrito</button>
                <button className='boton-agregar-cart'><b>Finalizar Compra</b></button>
                <Link to='/'><button className='boton-agregar-cart'>Seguir comprando</button></Link>
            </div>
            </div>
            }
    </>
    );
}