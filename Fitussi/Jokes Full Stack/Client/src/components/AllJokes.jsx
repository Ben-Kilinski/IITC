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

    useEffect(() => {
        getAllJokes();
    }, []);

    return (
        <div style={styles.container}>
            {jokes.length > 0 ? (
                jokes.map((joke) => (
                    <div style={styles.card} key={joke._id}>
                        <h6 style={styles.title}>{joke.setup}</h6>
                        <p style={styles.punchline}>{joke.punchline}</p>
                    </div>
                ))
            ) : (
                <p style={styles.loading}>Loading jokes...</p>
            )}
        </div>
    );
};

// Estilos Inline
const styles = {
    container: {
        maxHeight: '70vh', // Limita a altura do container
        overflowY: 'auto', // Ativa o scroll vertical
        padding: '1rem',
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Fundo semitransparente
        borderRadius: '12px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)', // Sombra
        width: '90%',
        maxWidth: '600px', // Limita a largura do container
        margin: '1rem auto', // Centraliza na tela
    },
    card: {
        marginBottom: '1rem',
        padding: '1rem',
        backgroundColor: '#ffffff', // Fundo branco
        border: '1px solid rgba(0, 0, 0, 0.1)', // Bordas suaves
        borderRadius: '8px', // Bordas arredondadas
        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)', // Sombra leve
        transition: 'transform 0.2s ease-in-out',
    },
    cardHover: {
        transform: 'scale(1.03)', // Efeito de zoom ao passar o mouse
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)', // Destaque na sombra
    },
    title: {
        margin: '0 0 0.5rem 0',
        fontSize: '1.4rem',
        color: '#333', // Texto escuro
    },
    punchline: {
        margin: '0',
        fontSize: '1.1rem',
        color: '#555', // Texto suave
    },
    loading: {
        textAlign: 'center',
        color: '#555',
        fontSize: '1.2rem',
    },
};

export default AllJokes;
