import React, {useEffect, useState} from 'react';
import ItemList from './ItemList';


export default function ItemListContainer() {

  const[prod, setProd] = useState([])

  useEffect(() => {

    const productos = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {id:1,titulo: 'El efecto Phobos', autor: 'Ian Giger', precio: '$500', imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_861118-MLA44277594418_122020-F.webp'},
          {id:2,titulo: 'Los Gusanos Gigantes de la Luna', autor: 'Ian Giger', precio: '$500', imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_891998-MLA46433928374_062021-F.webp'},
          {id:3,titulo: 'R.U.R.', autor: 'Karel Capek', precio: '$600', imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_706543-MLA47357870294_092021-F.webp' },
        ])
        reject('Error')
    }, 2000)    
  })

productos
    .then((res) => {
       setProd(res)
     })
    .catch((err) => {
      console.log(err)
    } );
    

}, [prod])



  return (
    <>
        <div className='encabezado'>
            <h1>Libros del Cosmonauta</h1>
            <h2>Tienda Virtual</h2>
        </div>

       <div className='container-card'>
          <ItemList productos = {prod}/>
       </div>
       
  
    </>
  );
}
