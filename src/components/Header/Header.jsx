import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div>
      <header className="header">
        <Link to="/">
          <img src="/assets/images/logo.png" alt="Ouzo Logo" className="header__logo" />
        </Link>
        <h1 className="header__title">Ouzo Nikolaou</h1>
      </header>
    </div>
  );
}

export default Header;
