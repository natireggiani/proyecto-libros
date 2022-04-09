import React, {useEffect, useState} from 'react';
import ItemList from './ItemList';
import promesa from './Utils/promesa';
import libros from './Utils/libros';
import { useParams } from 'react-router-dom';

export default function ItemListContainer() {

  const[prod, setProd] = useState([])
  const {Id} = useParams()
  
 


  useEffect(()=>{
    promesa(0, libros)
    .then((res) => {
      if(Id){
        setProd( res.filter((el) => el.coleccion === Id) )
      }else{
        setProd(res)
      }
    })
    .catch((err) => {console.log(err)} );
  },[Id])

  return (
    <>
        <div className='container-card'>
          <ItemList prod = {prod}/>
        </div>
    </>
  );
}
