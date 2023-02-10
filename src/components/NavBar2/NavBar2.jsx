import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar2.css';

function NavBar2() {
  return (
    <nav className="navbar">
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/about">
        About
      </NavLink>
      <NavLink activeClassName="active" to="/contact">
        Contact
      </NavLink>
    </nav>
  );
}

export default NavBar2;
