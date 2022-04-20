import React from 'react';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Footer from './Components/Footer';
import Cart from './Components/Cart';
import CartContextProvider  from './Components/CartContext';

export default function App() {
  

  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path = '/' element={<ItemListContainer />}/>  
          <Route exact path = '/categoria/:Id' element={<ItemListContainer />}/> 
          <Route exact path = '/detalle/:itemId' element={<ItemDetailContainer/>}/> 
          <Route exact path = '/cart' element={<Cart/>}></Route>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
        <Footer /> 
      </BrowserRouter>  
    </CartContextProvider>
    
    </>
  );
}


