import React, { useState } from 'react';
import './CookieBanner.css';

function CookieBanner() {
  const [display, setDisplay] = useState(true);

  const dismissBanner = () => {
    setDisplay(false);
  };

  return display ? (
    <div id="cookie-banner">
      <p>This website uses cookies to ensure you get the best experience on our website.</p>
      <button type="submit" id="cookie-button" onClick={dismissBanner}>Got it!</button>
    </div>
  ) : null;
}

export default CookieBanner;
