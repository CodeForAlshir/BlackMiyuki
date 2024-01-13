// LandingPage.js
import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>STREAM SPHERE</h1>
        <p>WHERE EVERY PIXEL TELLS A STORY, AND EVERYHEARTBEAT eCHOES IN THE STREAM OF CREATIVE</p>
      </header>

      <section className="features">
        <h2>Welcome!</h2>
        <div className="feature">
          <h3>Video 1</h3>
          <p>Description of Video 1.</p>
        </div>
        <div className="feature">
          <h3>Video 2</h3>
          <p>Description of Video 2.</p>
        </div>
      </section>

      <section className="cta">
        <h2>Sign Up Now</h2>
        <p>Join us and experience the greatness!</p>
        <button>Sign Up</button>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
