/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const [email, setEmail] = useState('');

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log('Email submitted: ', email);
  };

  return (
    <footer>
      <div className="footer-container">
        <Link to="/" className="logo-container">
          <img src="/assets/images/logo.png" alt="Ouzo Logo" className="header__logo" />
        </Link>
        <div className="email-form-container">
          <FiMail className="mail-icon" />
          <form onSubmit={onFormSubmit}>
            <label htmlFor="email">Subscribe to our newsletter:</label>
            <input type="email" id="email" value={email} onChange={onEmailChange} />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
