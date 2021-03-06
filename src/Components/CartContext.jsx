import React, { useState, createContext } from "react";

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
const[carrito, setCarrito] = useState([])
const[carritoVacio, setCarritoVacio] = useState(false)

const agregarAlCarrito = (item) => {
    setCarrito([...carrito, item])
}
const removerDeCarrito = (id) => {
    setCarrito(carrito.filter((el) => el.id !== id))
}
const totalItemsCarrito = () => {
    return carrito.reduce((acc, e) => acc + e.cantidad, null)
}

const totalPrecioCarrito = () => {
    return carrito.reduce((acc, e) => acc + e.cantidad * e.precio, 0)
}

const limpiarCarrito = () =>  {
    setCarrito([]);
    setCarritoVacio(true)
}

const checkOut = () => {
    return carrito.map((e) => <p>{e.titulo}</p> )
}

const seguirComprando = () => setCarritoVacio(false)

const estaEnCarrito = (id) => {
    return carrito.some((el) => el.id === id)
}

    return(
        <CartContext.Provider value = {{carrito, agregarAlCarrito, limpiarCarrito, totalPrecioCarrito, totalItemsCarrito, removerDeCarrito, estaEnCarrito, carritoVacio, seguirComprando, checkOut}}>
            {children}
        </CartContext.Provider>
    )     
}
export default CartContextProvider;