import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import ItemCount from './ ItemCount';

export default function ItemDetail({ imagen, titulo, autor, descripcion, stock, precio}) {
    const [quantity, setQuantity] = useState(0)
    const [agregar, setAgregar] = useState(false)

    function handleOnAdd (q){
        setQuantity(q)
        setAgregar(true)  
        alert(`estas seleccionando ${q} productos`)
    }
    console.log(quantity)

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
            <p>${precio}</p>
            {
                agregar
                ?<button className='boton-agregar'>Ver compra</button>
                :<div className='item-count'>
                <ItemCount stock={stock}  onAdd={handleOnAdd}/>
                </div>
            }
            <Card.Footer className="text-muted detalle-stock">{`Stock disponible ${stock} unidades`}</Card.Footer>
        </div>
    </div>
    </>
    );
}