import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import promesa from './Utils/promesa';
import libros from './Utils/libros';


export default function ItemDetailContainer() {

    const[detailProd, setdetailProd] = useState([])
    const {itemId} = useParams()

  console.log(itemId)

  useEffect(()=>{
    promesa(0, libros)
    .then((res) => {
      if(itemId){
        setdetailProd( res.find((el) => el.id === Number(itemId)) )
      }else{
        setdetailProd(res)
      }
    })
    .catch((err) => {console.log(err)} );
  },[itemId])


        


return (
    <>
    
        <ItemDetail {...detailProd}/>
    </>
    );
}
