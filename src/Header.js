import React from 'react';
import { Link } from 'react-router-dom';
import './styles/global.css';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/seasons">Seasons</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;