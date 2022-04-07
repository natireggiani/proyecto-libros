import React from 'react';
import {BsCart} from "react-icons/bs";


export default function CartWidget() {

  return (
    <>
    <p>
      <BsCart className='imagen-carrito' />
      <sup className='cantidad-carrito'>()</sup>
    </p>
      
    </>
  );
}
