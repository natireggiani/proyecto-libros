import React from 'react';
import { Card } from 'react-bootstrap';
import ItemCount from './ ItemCount';

export default function ItemDetail({ imagen, titulo, autor, descripcion, stock, precio}) {

return (
    <>
    <div className='flex-padre detalle-item'>
        <div className='detalle-imagen'>
            <img src={imagen} alt={`tapa libro`} className='detalle-imagen'/>
        </div>
        <div className='detalle-libro'>
            <p className='titulo-libro'>{titulo}</p>
            <p>{autor}</p>
            <p className='descripcion-libro'>{descripcion}</p>
            <p>{precio}</p>
            <ItemCount stock={5}/>
            <Card.Footer className="text-muted detalle-stock">{`Stock disponible ${stock}`}</Card.Footer>
        </div>
    </div>
    </>
    );
}