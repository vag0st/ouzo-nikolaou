import React from 'react';
import './Header.css';

function Header() {
  return (
    <div>
      <header className="header">
        <img src="/assets/images/logo.png" alt="Ouzo Logo" className="header__logo" />
        <h1 className="header__title">Ouzo Nikolaou</h1>
      </header>
    </div>
  );
}

export default Header;
