import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [userJokes, setUserJokes] = useState([]);
  const [favoriteJokes, setFavoriteJokes] = useState([]);
  const [newJoke, setNewJoke] = useState({ setup: '', punchline: '' });

  useEffect(() => {
    // Fetch piadas favoritas e do usuário
    const fetchData = async () => {
      const token = localStorage.getItem('token'); // Token armazenado no login
      const headers = { Authorization: `Bearer ${token}` };

      // Fetch piadas do usuário
      const userJokesResponse = await fetch('http://localhost:3000/api/v1/jokes/my-jokes', { headers });
      const userJokesData = await userJokesResponse.json();
      setUserJokes(userJokesData);

      // Fetch piadas favoritas
      const favoriteJokesResponse = await fetch('http://localhost:3000/api/v1/jokes/favorites', { headers });
      const favoriteJokesData = await favoriteJokesResponse.json();
      setFavoriteJokes(favoriteJokesData);
    };

    fetchData();
  }, []);

  // Função para criar uma nova piada
  const handleCreateJoke = async () => {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    const response = await fetch('http://localhost:3000/api/v1/jokes', {
      method: 'POST',
      headers,
      body: JSON.stringify(newJoke),
    });

    if (response.ok) {
      alert('Joke created successfully!');
      setNewJoke({ setup: '', punchline: '' }); // Limpar formulário
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Welcome to Your Profile</h1>

      {/* Formulário para criar nova piada */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Create a New Joke</h2>
        <input
          type="text"
          placeholder="Setup"
          value={newJoke.setup}
          onChange={(e) => setNewJoke({ ...newJoke, setup: e.target.value })}
          className="block w-full mb-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Punchline"
          value={newJoke.punchline}
          onChange={(e) => setNewJoke({ ...newJoke, punchline: e.target.value })}
          className="block w-full mb-2 p-2 border border-gray-300 rounded"
        />
        <button onClick={handleCreateJoke} className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </div>

      {/* Lista de piadas do usuário */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Your Jokes</h2>
        {userJokes.length > 0 ? (
          userJokes.map((joke) => (
            <div key={joke._id} className="p-4 border border-gray-300 rounded mb-2">
              <p className="font-semibold">{joke.setup}</p>
              <p>{joke.punchline}</p>
            </div>
          ))
        ) : (
          <p>No jokes created yet.</p>
        )}
      </div>

      {/* Lista de piadas favoritas */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Your Favorite Jokes</h2>
        {favoriteJokes.length > 0 ? (
          favoriteJokes.map((joke) => (
            <div key={joke._id} className="p-4 border border-gray-300 rounded mb-2">
              <p className="font-semibold">{joke.setup}</p>
              <p>{joke.punchline}</p>
            </div>
          ))
        ) : (
          <p>No favorite jokes yet.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
