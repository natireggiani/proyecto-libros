import React from 'react';
import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import ItemCount from './ ItemCount';
import {CartContext} from './CartContext';
import { Link } from 'react-router-dom';


export default function ItemDetail({id, imagen, titulo, autor, descripcion, stock, precio}) {
    // const [quantity, setQuantity] = useState(0)

    const {agregarAlCarrito, estaEnCarrito} = useContext(CartContext)

    function onAdd (cantidad){
        // setQuantity(cantidad);
        if(estaEnCarrito(id) === (false)){
            const addItem = {id, imagen, titulo, autor, precio, stock, cantidad}
            agregarAlCarrito(addItem)   
            }    
        }

    // console.log(quantity)
return (
    <>
    <div className='flex-padre detalle-item'>
        <div className='detalle-imagen'>
            <img src={imagen} alt={`tapa libro ${id}`} className='detalle-imagen animate__animated animate__zoomIn'/>
        </div>
        <div className='detalle-libro'>
            <p className='titulo-libro'>{titulo}</p>
            <p>{autor}</p>
            <p className='descripcion-libro'>{descripcion}</p>
            <p>${precio}</p>
            {
                estaEnCarrito(id)
                ?<Link to='/cart'><button className='boton-agregar'>Ver compra</button></Link>
                :<div className='item-count'>
                <ItemCount stock={stock}  onAdd={onAdd}/>
                </div>
            }
            <Card.Footer className="text-muted detalle-stock">{`Stock disponible ${stock} unidades`}</Card.Footer>
        </div>  
    </div>
    </>
    );
}