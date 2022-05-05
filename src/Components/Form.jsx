import React from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { CartContext} from './CartContext';
import { doc, addDoc, collection, getDoc, getFirestore, Timestamp, updateDoc } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

export default function Form() {
    const {carrito, totalPrecioCarrito, totalItemsCarrito, limpiarCarrito, checkOut} = useContext(CartContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    console.log(errors);
    const [orderId, setOrderId] = useState()

    const onSubmit = data => {
        const sendOrder = () => {
            const order = {
                buyer:{
                    name: data.Name,
                    email:data.Email,
                    tel:data.Tel,
                    date: Timestamp.fromDate(new Date()),
                },
                items: carrito,
                total: totalPrecioCarrito()
            }
            
            const db = getFirestore();
            const ordersCollection = collection(db, 'orders')
            addDoc(ordersCollection, order)
            .then((res)=> {
                carrito.forEach((item)=>{
                    const docRef = doc(db, 'libros', item.id)
                    getDoc(docRef)
                        .then((dbDoc)=>{
                            updateDoc(docRef, {stock:dbDoc.data().stock-item.cantidad})
                        })
                })
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
                    <Link to='/'><Button variant='light' className='boton-volver'>Volver</Button></Link>
                </div>
                </>
            )
        }
        
        if(carrito.length === 0){
            return <Navigate to='/'/>
        }
    
    return (
        <>
            <center>
            <form onSubmit={handleSubmit(onSubmit)} className='formulario'>
                <div className='resumen-compra'>
                    <h3 className='legend'>Resumen de tu compra:</h3>
                    <p>{totalItemsCarrito()} libros</p>
                    <div>{checkOut()}</div>
                    <p><b>Total a pagar: ${totalPrecioCarrito()}</b></p>
                </div>
                <legend className='legend'>Ingrese sus datos para finalizar:</legend>
                <input type="text" className="formulario-input" placeholder="Nombre Completo" {...register("Name", {required: true, minLength: 6, maxLength: 80})} />
                <p>{errors.Name?.type === 'required' && "Complete su Nombre completo"}</p>
                <input type="text" className="formulario-input" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                <p>{errors.Email?.type === 'required' && "Ingrese un email valido"}</p>
                <input type="tel" className="formulario-input" placeholder="Mobile number" {...register("Tel", {required: true, pattern:/^\d{11}$/,minLength: 6, maxLength: 12})} />
                <p>{errors.Tel?.type === 'required' && "Ingrese un numero valido"}</p>
                <input type ="submit" className="formulario-submit"/>
            </form>
            </center>       
    </>
    );
}

