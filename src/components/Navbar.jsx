import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
   <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/beddings" className="navbar-link">Beddings</Link>
        </li>
        <li className="navbar-item">
          <Link to="/fruits" className="navbar-link">Fruits</Link>
        </li>
        <li className="navbar-item">
          <Link to="/players" className="navbar-link">Players</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar
