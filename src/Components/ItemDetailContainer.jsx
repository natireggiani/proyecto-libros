import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { SpinnerDotted } from 'spinners-react';
import promesa from './Utils/promesa';
import libros from './Utils/libros';


export default function ItemDetailContainer() {

    const[detailProd, setdetailProd] = useState()
    const[loading, setLoading] = useState(false)
    const {itemId} = useParams()

  useEffect(()=>{
    setLoading(true)
    promesa(2000, libros)
    .then((res) => {
      if(itemId){
        setdetailProd( res.find((el) => el.id === parseInt(itemId)) )
      }else{
        setdetailProd(res)
      }
    })
    .catch((err) => {console.log(err)
    })
    .finally(()=>{
      setLoading(false)
    })
  },[itemId])


return (
    <>
    {
      loading
      ? <div className='loading'>
          <SpinnerDotted  size={64} thickness={111} speed={100} color="rgba(186, 189, 213)" /> 
        </div>
      : <ItemDetail {...detailProd}/>
    }
    </>
    );
}
