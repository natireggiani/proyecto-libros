import React from 'react';
import { Card } from 'react-bootstrap';
import ItemCount from './ ItemCount';

export default function ItemDetail({getItem}) {

return (
    <>
    <br></br>
    <br></br>
    <div className='flex-padre detalle-item'>
        <div>
            <img src={getItem.imagen} alt='efecto Phobos' className='detalle-imagen'/>
        </div>
        <div className='detalle-libro'>
            <p className='titulo-libro'>{getItem.titulo}</p>
            <p>{getItem.autor}</p>
            <p className='descripcion-libro'>{getItem.descripcion}</p>
            <p>{getItem.precio}</p>
            <ItemCount stock={5}/>
            <Card.Footer className="text-muted detalle-stock">{`Stock disponible ${getItem.stock}`}</Card.Footer>

        </div>
    </div>
    <br></br>
    <br></br>
    
    </>
    );
}