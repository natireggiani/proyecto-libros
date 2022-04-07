import React from 'react';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';


export default function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer/>
      
    </>
  );
}


