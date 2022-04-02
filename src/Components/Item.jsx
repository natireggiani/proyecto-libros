import React from 'react';
import { Card } from 'react-bootstrap';
import ItemCount from './ ItemCount';

export default function Item({id, titulo, autor, precio, imagen}) {

  return (
    <>
     
      <Card  key={id} style={{ width: '12em'}}>
        <Card.Img variant="top" src={imagen} className='imagen-card'/>
        <Card.Body className='body-card'>
          <Card.Title className='titulo-card'>{titulo}</Card.Title>
          <Card.Text>{autor}</Card.Text>
          <Card.Text>{precio}</Card.Text>
          <ItemCount stock={5}/>
        </Card.Body>
      </Card>
  
    </>
  );
}
