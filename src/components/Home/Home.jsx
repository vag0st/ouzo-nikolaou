import React from 'react';
import './Home.css';
import aboutImage from '../../ouzo-background.png';

function Home() {
  return (
    <div className="about-container">
      <img className="about-image" src={aboutImage} alt="Background" />

    </div>
  // <div className="about-container">
  //   <div className="about-image" />
  // </div>
  );
}

export default Home;
