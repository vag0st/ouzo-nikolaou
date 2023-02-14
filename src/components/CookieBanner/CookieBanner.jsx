import React, { useState } from 'react';
import './CookieBanner.css';

function CookieBanner() {
  const [display, setDisplay] = useState(true);

  const dismissBanner = () => {
    setDisplay(false);
    document.cookie = 'cookieConsent=true; max-age=31536000; path=/';
  };

  const readCookie = (name) => {
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
    if (match) {
      return match[2];
    }
    return null;
  };

  const cookieConsent = readCookie('cookieConsent');

  return !cookieConsent && display ? (
    <div id="cookie-banner">
      <p>This website uses cookies to ensure you get the best experience on our website.</p>
      <button type="submit" id="cookie-button" onClick={dismissBanner}>Got it!</button>
    </div>
  ) : null;
}

export default CookieBanner;
