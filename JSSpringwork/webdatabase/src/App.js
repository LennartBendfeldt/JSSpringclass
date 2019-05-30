import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAe8iHngvZJTK9UL4iPf6qSKWj4XAp9BPk",
  authDomain: "classproject-cbd23.firebaseapp.com",
  databaseURL: "https://classproject-cbd23.firebaseio.com",
  projectId: "classproject-cbd23",
  storageBucket: "classproject-cbd23.appspot.com",
  messagingSenderId: "788739538310",
  appId: "1:788739538310:web:f47325df49f95c84"
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
