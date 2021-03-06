
import React from 'react';
import { Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';



export default function Item({id, titulo, autor, precio, imagen}) {


  return (
    <>
      <Card  key={id} style={{ width: '15.5em'}}>
        <Card.Img variant="top" src={imagen} className='imagen-card'/>
        <Card.Body className='body-card'>
          <Card.Title className='titulo-card'>{titulo}</Card.Title>
          <Card.Text>{autor}</Card.Text>
          <Card.Text>${precio}</Card.Text>
          <Link to = {`/detalle/${id}`} ><Button variant='light' className='boton-ver'>Ver detalle</Button></Link> 
        </Card.Body>
      </Card>
    </>
  );
}

