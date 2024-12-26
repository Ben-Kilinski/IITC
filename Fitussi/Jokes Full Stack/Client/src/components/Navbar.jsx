import React from 'react';

const Navbar = () => {
  const navbarStyle = {
    backgroundImage: "url('https://images6.alphacoders.com/542/542776.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    wedth: "120%",
    height: "auto", // Altura da navbar
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 32px",
    color: "white",
  };

  return (
    <nav style={navbarStyle}>
      <h1 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>My Website</h1>
      <ul style={{ display: "flex", gap: "16px" }}>
        <li><a href="#home" style={{ color: "white", textDecoration: "none" }}>Home</a></li>
        <li><a href="#about" style={{ color: "white", textDecoration: "none" }}>About</a></li>
        <li><a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
