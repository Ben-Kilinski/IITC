import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Random_btn = () => {
  const [joke, setJoke] = useState({ setup: '', punchline: '' });
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <>
      <h1>It's better to laugh than cry</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>{joke.setup || 'Loading joke...'}</p>
          <p>{joke.punchline || ''}</p>
        </>
      )}
      <button onClick={fetchJoke}>Get Random Joke</button>
    </>
  );
};

export default Random_btn;
