import React from 'react';
import ItemCount from './ ItemCount';


export default function ItemListContainer() {

function onAdd(cantidad){
  alert(`Estas seleccionando ${cantidad} items`)
}

  return (
    <>
        <div className='encabezado'>
            <h1>Libros del Cosmonauta</h1>
            <h2>Tienda Virtual</h2>
        </div>
        <ItemCount onAdd={onAdd} stock={5} initial={1}/>
     
  
    </>
  );
}
