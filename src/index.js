import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeJIsBz4EDkv1zZfl7vI9NqhbcCrql1mU",
  authDomain: "proyecto-libros-f2a56.firebaseapp.com",
  projectId: "proyecto-libros-f2a56",
  storageBucket: "proyecto-libros-f2a56.appspot.com",
  messagingSenderId: "261908578116",
  appId: "1:261908578116:web:fe0354cfa4e9413379e111"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
