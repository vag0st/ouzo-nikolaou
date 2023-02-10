import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <a href="home">Home</a>
      <a href="products">Products</a>
      <a href="history">History</a>
      <a href="contact">Contact</a>
    </nav>
  );
}

export default NavBar;
