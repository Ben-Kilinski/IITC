import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">Jokes App</div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/about" className="hover:text-gray-400">About</Link>
        {isAuthenticated ? (
          <>
            <Link to="/profile" className="hover:text-gray-400">Profile</Link>
            <button
              onClick={handleLogout}
              className="hover:text-gray-400 bg-transparent border-none cursor-pointer focus:outline-none"
              aria-label="Logout"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-gray-400">Login</Link>
            <Link to="/signup" className="hover:text-gray-400">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
