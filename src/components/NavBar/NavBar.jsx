import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <nav className="navbar">
      <NavLink to="/home" activeClassName="active">Home</NavLink>
      <div role="presentation" className="dropdown" onClick={toggleSubMenu}>
        <NavLink to="/products" activeClassName="active">Products</NavLink>
        <div className={`dropdown-content ${showSubMenu ? 'show' : ''}`}>
          <NavLink to="/products/ouzo" activeClassName="active">Ouzo</NavLink>
          <NavLink to="/products/liker" activeClassName="active">Liker</NavLink>
          <NavLink to="/products/krasi" activeClassName="active">Krasi</NavLink>
          <NavLink to="/products/tsipouro" activeClassName="active">Tsipouro</NavLink>
        </div>
      </div>
      <NavLink to="/history" activeClassName="active">History</NavLink>
      <NavLink to="/contact" activeClassName="active">Contact</NavLink>
    </nav>
  );
}

export default NavBar;
