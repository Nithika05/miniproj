import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Decentralized Storage</h1>
      <nav>
        <Link to="/login" className="nav-btn">Login</Link>
        <Link to="/signup" className="nav-btn">Signup</Link>
      </nav>
    </header>
  );
}

export default Header;
