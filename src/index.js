import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

const firebaseConfig = {
  apiKey: 'AIzaSyBZQXXApj9YpxK2UuRIo4Ybofqf2nA7nkY',
  authDomain: 'evernote-clone-tutorial-6de48.firebaseapp.com',
  databaseURL: 'https://evernote-clone-tutorial-6de48.firebaseio.com',
  projectId: 'evernote-clone-tutorial-6de48',
  storageBucket: '',
  messagingSenderId: '580131787800',
  appId: '1:580131787800:web:47b480d941cf91e6'
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
