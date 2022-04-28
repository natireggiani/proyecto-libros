import React from 'react';
import { useContext } from 'react';
import { CartContext} from './CartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

export default function Form() {
    const {carrito, totalPrecioCarrito, limpiarCarrito} = useContext(CartContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    console.log(errors);
    const [orderId, setOrderId] = useState()

    const onSubmit = data => {
        const sendOrder = () => {
            const order = {
                buyer:{
                    name: data.Name,
                    email:data.Email,
                    tel:data.Tel
                },
                items: carrito,
                total: totalPrecioCarrito()
            }
            
            const db = getFirestore();
            const ordersCollection = collection(db, 'orders')
            addDoc(ordersCollection, order)
            .then((res)=> {
                setOrderId(res.id)
                limpiarCarrito()
            })
            .catch((err) => {
                console.log(err)
            })
        }
        sendOrder()
        }
        
        if (orderId) {
            return (
                <>
                <div className='flex-padre-form'>
                    <h2 className='carrito-titulo-form1'>Gracias por tu compra!</h2>
                    <h3 className='carrito-titulo-form'>Tu numero de orden es: </h3>
                    <h3 className='carrito-titulo-form'><b>{orderId}</b></h3>
                    <Link to='/'><button className='boton-volver'>Volver</button></Link>
                </div>
                </>
            )
        }
        
        if(carrito.length === 0){
            alert('No hay items en el carrito')
            return <Navigate to='/'/>
        }
    
    return (
        <>
        <div className='formulario'>
            <center>
            <form onSubmit={handleSubmit(onSubmit)}>
                <legend className='legend'>Ingrese sus datos:</legend>
                <input type="text" className="formulario-input" placeholder="Nombre Completo" {...register("Name", {required: true, maxLength: 80})} />
                <input type="text" className="formulario-input" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                <input type="tel" className="formulario-input" placeholder="Mobile number" {...register("Tel", {required: true, minLength: 6, maxLength: 12})} />
                <input type ="submit" className="formulario-submit"/>
            </form>
            </center>   
        </div>
    </>
    );
}


