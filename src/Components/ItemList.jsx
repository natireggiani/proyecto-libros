import React from 'react';
import Item from './Item';

export default function ItemList({prod}) {


  return (
    <>
    {prod.map(item => <Item key = {item.id}
                            id = {item.id}
                            titulo = {item.titulo}
                            autor = {item.autor}
                            precio = {item.precio}
                            imagen = {item.imagen}
                  /> )}
                  
    </>
  );
}