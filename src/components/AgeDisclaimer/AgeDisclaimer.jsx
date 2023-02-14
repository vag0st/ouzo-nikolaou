import React, { useState, useEffect } from 'react';
import './AgeDisclaimer.css';

function AgeDisclaimer() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  useEffect(() => {
    const ageVerification = localStorage.getItem('ageVerification');
    if (ageVerification) {
      setShowDisclaimer(false);
    }
  }, []);

  const handleVerification = () => {
    setShowDisclaimer(false);
    localStorage.setItem('ageVerification', true);
  };

  return (
    showDisclaimer && (
      <div className="age-disclaimer">
        <div className="age-disclaimer-content">
          <p>Are you over the age of 18?</p>
          <button type="submit" onClick={handleVerification}>Yes</button>
          <button type="submit" onClick={() => setShowDisclaimer(false)}>No</button>
        </div>
      </div>
    )
  );
}

export default AgeDisclaimer;
