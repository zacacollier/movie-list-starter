import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
/* import * as firebase from 'firebase'*/
import './index.css'

/* const firebaseConfig = {
 *     apiKey: "AIzaSyCkNe9apYsDRFt3pfz91IM0pNmYV3soiI4",
 *     authDomain: "movie-list-23b5a.firebaseapp.com",
 *     databaseURL: "https://movie-list-23b5a.firebaseio.com",
 *     storageBucket: "movie-list-23b5a.appspot.com",
 *     messagingSenderId: "828070793267"
 * }
 * 
 * const firebaseApp = firebase.initializeApp(firebaseConfig)
 * */
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
