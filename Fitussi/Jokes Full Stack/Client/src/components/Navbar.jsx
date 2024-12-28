import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">Jokes App</div>
      <div className="space-x-4">
        <Link to="/dashboard" className="hover:text-gray-400">Dashboard</Link>
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/about" className="hover:text-gray-400">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
