import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css'; // Certifique-se de importar o CSS

function App() {
  return (
    <Router>
      <div id="root">
        {/* Conteúdo do site à esquerda */}
        <div className="app-container">
          <Navbar />
          <Home />
        </div>

        {/* Imagem à direita */}
        <div className="background-container"></div>
      </div>
    </Router>
  );
}

export default App;
