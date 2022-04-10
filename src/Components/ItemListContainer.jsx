import React, {useEffect, useState} from 'react';
import ItemList from './ItemList';
import promesa from './Utils/promesa';
import libros from './Utils/libros';
import { SpinnerDotted } from 'spinners-react';
import { useParams } from 'react-router-dom';

export default function ItemListContainer() {

  const[prod, setProd] = useState([])
  const[loading, setLoading] = useState(false)
  const {Id} = useParams()

  useEffect(()=>{
    setLoading(true)
    promesa(2000, libros)
    .then((res) => {
      if(Id){
        setProd( res.filter((el) => el.coleccion === Id) )
      }else{
        setProd(res)
      }
    })
    .catch((err) => {console.log(err)
    })
    .finally(()=>{
      setLoading(false)
    })

  },[Id])

  return (
    <>
    {
      loading
      ? <div className='loading'>
          <SpinnerDotted  size={64} thickness={111} speed={100} color="rgba(186, 189, 213)" /> 
        </div>
      : <div className='container-card'>
          <ItemList prod = {prod}/>
        </div>
    }
      
    </>
  );
}

