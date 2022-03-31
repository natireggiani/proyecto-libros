import React, { useState } from 'react';



export default function ItemCount({ stock, initial, onAdd }) {
    
    const [cantidad, setCantidad] = useState(initial);
    const agregar = ()=>{
        if(cantidad<stock){
            setCantidad(cantidad+1)   
        } else{
            alert(`No hay más stock`)
        } 
        
    }

    const restar = ()=>{
        if(cantidad>initial){
            setCantidad(cantidad-1)  
        }    
    }
  
        
  return (
    <>
    <div className='item-count'>
        <div className='flex-padre'>
            <button className='resta' onClick = {()=> {restar()}}>-</button>
            <p className='input-cantidad'>{cantidad}</p>
            <button className='suma' onClick = {()=> {agregar()}}>+</button>
        </div>
    
        <button className='boton-agregar' onClick={()=>onAdd(cantidad)}>Agregar al Carrito</button>
    </div>
    
    </>
  );

  }