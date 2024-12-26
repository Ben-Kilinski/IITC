

import React, { useState, useEffect } from 'react';

const AllJokes = () => {
    const [jokes, setJokes] = useState([]);

    // Função para buscar todas as piadas
    const getAllJokes = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/v1/jokes'); // Substitua pela URL correta da API
            const data = await response.json();
            setJokes(data);
        } catch (error) {
            console.error('Erro ao buscar as piadas:', error);
        }
    };

    useEffect(() => { getAllJokes() }, []);

    return (
        <>
            {jokes.length > 0 ? (
                jokes.map((joke) => (
                    <div key={joke._id}>
                        <h6>{joke.setup}</h6>
                        <p>{joke.punchline}</p>
                        <span>{joke._id}</span>
                    </div>
                ))
            ) : (
                <p>Loading jokes...</p>
            )}
        </>
    );
};

export default AllJokes;
