import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Random_btn = () => {
  const [joke, setJoke] = useState({ setup: '', punchline: '' });
  const [loading, setLoading] = useState(false);

  // Função para buscar uma piada aleatória
  async function fetchJoke() {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:3000/api/v1/jokes/random');
      if (res.data) {
        setJoke(res.data);
      } else {
        setJoke({ setup: 'No joke found', punchline: '' });
      }
    } catch (error) {
      console.error('Error fetching random joke:', error);
      setJoke({ setup: 'Error fetching joke', punchline: '' });
    } finally {
      setLoading(false);
    }
  }

  // Busca inicial ao carregar o componente
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={fetchJoke}>
        Get Random Joke
      </button>
      {loading ? (
        <p style={styles.loading}>Loading...</p>
      ) : (
        <div style={styles.jokeContainer}>
          <p style={styles.jokeSetup}>{joke.setup || 'Loading joke...'}</p>
          <p style={styles.jokePunchline}>{joke.punchline || ''}</p>
        </div>
      )}
    </div>
  );
};

// Estilos Inline
const styles = {
  container: {
    backgroundColor: '#1e293b', // Fundo mais escuro
    color: 'white',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)', // Sombra leve
    maxWidth: '600px', // Largura máxima do container
    margin: '2rem auto', // Centraliza horizontalmente
    textAlign: 'center',
    overflow: 'hidden', // Garante que não haja problemas de overflow
    minHeight: '18rem'
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
  },
  loading: {
    fontSize: '1.2rem',
    color: '#94a3b8', // Cor suave para o texto de carregamento
  },
  jokeContainer: {
    margin: '1rem'
  },
  jokeSetup: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  jokePunchline: {
    fontSize: '1.2rem',
    color: '#94a3b8', // Cor mais suave para o punchline
  },
  button: {
    backgroundColor: '#2563eb', // Azul forte
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    margin: '1rem'
  },
  buttonHover: {
    backgroundColor: '#1d4ed8', // Azul mais escuro ao passar o mouse
  },
};

export default Random_btn;
