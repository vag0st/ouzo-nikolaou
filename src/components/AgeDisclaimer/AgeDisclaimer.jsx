import React, { useState } from 'react';
import './AgeDisclaimer.css';

function AgeDisclaimer() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [ageVerified, setAgeVerified] = useState(false);

  console.log(ageVerified);

  const handleVerification = () => {
    setAgeVerified(true);
    setShowDisclaimer(false);
  };

  return (
    <div>
      {showDisclaimer && (
        <div className="age-disclaimer">
          <div className="age-disclaimer-content">
            <p>Are you over the age of 18?</p>
            <button type="submit" onClick={handleVerification}>Yes</button>
            <button type="submit" onClick={() => setShowDisclaimer(false)}>No</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AgeDisclaimer;
