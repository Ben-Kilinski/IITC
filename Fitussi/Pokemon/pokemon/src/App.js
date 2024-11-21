import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios"; 

function App() {

  useEffect( // 'efeitos' a serem feitos após o react montar a tela 
    () => {console.log("The component was loaded!")}, // o que fazer 
    [] // quando fazer 
  );

  return (
    <div className="App">
      <h1>Pokémon Viewer App</h1>
      <p>Show time!</p>
    </div>
  );
}

export default App;