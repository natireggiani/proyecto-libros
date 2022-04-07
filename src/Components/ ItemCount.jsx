import React, { useState } from 'react';


export default function ItemCount({stock}) {
    
    const [cantidad, setCantidad] = useState(1);
    const agregar = ()=>{
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
    function onAdd(){
        alert(`Estas seleccionando ${cantidad} items`)
    }
        
    return (
    <>
    <div className='item-count'>
        <div className='flex-padre'>
            <button className='suma-resta' onClick = {()=> {restar()}}>-</button>
            <p className='input-cantidad'>{cantidad}</p>
            <button className='suma-resta' onClick = {()=> {agregar()}}>+</button>
        </div>
        <button className='boton-agregar' onClick={() => {onAdd()}}>Agregar al Carrito</button>
    </div>
    
    </>
    );
}