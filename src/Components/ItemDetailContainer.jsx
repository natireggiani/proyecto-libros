import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { SpinnerDotted } from 'spinners-react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

export default function ItemDetailContainer() {

    const[detailProd, setdetailProd] = useState({})
    const[loading, setLoading] = useState(false)
    const {itemId} = useParams()

  useEffect(()=>{
    setLoading(true)
    const db = getFirestore()
    const libroRef = doc(db, 'libros', itemId)
    getDoc(libroRef)
      .then((doc) => {setdetailProd({id: doc.id, ...doc.data()})
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
