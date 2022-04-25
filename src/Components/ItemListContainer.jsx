import React, {useEffect, useState} from 'react';
import ItemList from './ItemList';
import { SpinnerDotted } from 'spinners-react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where, orderBy } from 'firebase/firestore';

export default function ItemListContainer() {

  const[prod, setProd] = useState([])
  const[loading, setLoading] = useState(false)
  const {Id} = useParams()

  useEffect(()=>{
    setLoading(true)
    const db = getFirestore();
    const librosCollection = query(collection (db, 'libros'), orderBy("precio"))
    const q = Id ? query(collection (db, 'libros'), where('coleccion', '==', Id)) : librosCollection
      
    getDocs(q)
      .then((res) => {setProd(res.docs.map((doc) => ({id: doc.id,...doc.data()})))
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

