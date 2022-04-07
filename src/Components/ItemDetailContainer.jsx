import React, {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';



export default function ItemDetailContainer() {

    const[detailProd, setdetailProd] = useState({})

    useEffect(() => {

        const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(
            {id:1,
            titulo: 'El Efecto Phobos', 
            autor: 'Ian Giger', 
            precio: '$500', 
            stock: '5',
            imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_861118-MLA44277594418_122020-F.webp', 
            descripcion: 'Ian Giger, el misterioso novelista sueco que vive en EEUU nos ofrece su nueva novela: el General y su ¿novia?, ¿subordinada?, ¿amiga?, el Dos Cabezas, encuentran el secreto de la gravitación universal, se roban el satélite de Marte, lo estacionan en la Patagonia y se hacen millonarios. También hay intrigas políticas y colonos marcianos, todo escrito como si Henry James se hubiera dedicado a las novelitas de kiosko con cohetes'
            }
            )
        reject('Error')
    }, 2000)    
})

getItem
    .then((res) => {
        setdetailProd(res)
    })
    .catch((err) => {
        console.log(err)
    } );
    

}, [detailProd])



return (
    <>
        <ItemDetail getItem = {detailProd}/>
    </>
    );
}
