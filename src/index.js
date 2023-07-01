import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLsNI-yEqA_4sX1Q1ZbJ6Ur9QmgR34zLw",
  authDomain: "tiendafashion-c3eac.firebaseapp.com",
  projectId: "tiendafashion-c3eac",
  storageBucket: "tiendafashion-c3eac.appspot.com",
  messagingSenderId: "458413593401",
  appId: "1:458413593401:web:0a40ab71ebfc46f08e4ee8"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
