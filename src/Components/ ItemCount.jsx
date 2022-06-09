import React, { useState }from 'react';
import {Button} from 'react-bootstrap';

export default function ItemCount({stock, onAdd} ) {
    const [cantidad, setCantidad]= useState(0);

    const sumar = ()=>{
        if(cantidad<stock){
            setCantidad(cantidad+1)   
        } else{
            alert(`No hay más stock`)
        }     
    }

    const restar = ()=>{
        if(cantidad>1){
            setCantidad(cantidad-1)  
        }    
    }
    

    return (
    <>  
    <div className='item-count'>
        <div className='flex-padre'>
            <button className='suma-resta' onClick = {restar}>-</button>
            <p className='input-cantidad'>{cantidad}</p>
            <button className='suma-resta' onClick = {sumar}>+</button>
        </div>
        <Button variant='light' className='boton-count' onClick={()=>onAdd(cantidad)}>Agregar al Carrito</Button>
    </div>
    
    </>
    );
}