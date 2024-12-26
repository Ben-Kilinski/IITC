import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [joke, setJoke] = useState({}); // Inicializando como um objeto vazio
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchJoke() {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:3000/api/v1/jokes/random');
      if (res.data) {
        setJoke(res.data);
      } else {
        setJoke({ setup: "No joke found", punchline: "" });
      }
    } catch (error) {
      console.error('Error fetching random joke:', error);
      setJoke({ setup: "Error fetching joke", punchline: "" });
    } finally {
      setLoading(false);
    }
  }

  async function getAllJokes() {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:3000/api/v1/jokes');
      setJokes(res.data || []);
    } catch (error) {
      console.error('Error fetching all jokes:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchJoke();
    getAllJokes();
  }, []);

  return (
    <>
      <div>
        <h1>Random Joke</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <p>{joke.setup || "Loading joke..."}</p>
            <p>{joke.punchline || ""}</p>
          </>
        )}
      </div>
      <button onClick={fetchJoke}>Get Random Joke</button>

      {jokes.map((joke) => (
        <div key={joke._id}>
          <h6>{joke.setup}</h6>
          <p>{joke.punchline}</p>
          <span>{joke._id}</span>
        </div>
      ))}
    </>
  );
}

export default App;
