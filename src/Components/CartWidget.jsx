import React from 'react';
import {BsCart} from "react-icons/bs";


export default function CartWidget() {

  return (
    <>
      <BsCart className='imagen-carrito' />
      <p className='imagen-carrito'>()</p>
    </>
  );
}
