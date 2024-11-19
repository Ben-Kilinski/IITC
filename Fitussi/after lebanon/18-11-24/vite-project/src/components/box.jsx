import React from 'react';

function Box({ backgroundColor = 'lightgray', padding = '20px', design = 'modern', children }) {
  // Estilos padrões
  const baseStyle = {
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Sombra suave
    margin: '10px 0', // Para separar um pouco os boxes
  };

  // Estilos Vintage
  const vintageStyle = {
    ...baseStyle,
    backgroundColor: backgroundColor,
    color: '#5f4b8b', // Cor de texto mais suave
    fontFamily: '"Times New Roman", serif', // Fonte clássica
    border: '2px solid #d0a4b4', // Borda mais delicada
    boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.2)', // Sombra mais forte para o vintage
  };

  // Estilos Modernos
  const modernStyle = {
    ...baseStyle,
    backgroundColor: backgroundColor,
    color: '#333', // Cor de texto mais escura
    fontFamily: '"Arial", sans-serif', // Fonte moderna e simples
    border: 'none', // Sem borda
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)', // Sombra suave e moderna
  };

  // Escolhe o estilo com base na prop 'design'
  const boxStyle = design === 'vintage' ? vintageStyle : modernStyle;

  return <div style={boxStyle}>{children}</div>;
}

export default Box;
