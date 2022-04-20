import React from 'react';
import {BsCart} from "react-icons/bs";
import { useContext } from 'react';
import { CartContext} from './CartContext';
import { Link } from 'react-router-dom';

export default function CartWidget() {
  const {totalItemsCarrito} = useContext(CartContext)
  
  return (
    <>
      
    
      <p> 
      <Link to='/cart'><BsCart className='imagen-carrito' /></Link>
      <sup className='cantidad-carrito'>{totalItemsCarrito()}</sup>
      </p>
    </>
  );
}
