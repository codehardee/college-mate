import React from 'react';
import './BackgroundSection.css';

const BackgroundSection = () => {
  return (
    <section className="background-section">
      {/* Overlay Text */}
      <div className="overlay">
        <div className="text-container">
          <h4>For the Students</h4>
          <h2>Learn & Earn Together</h2>
          <p>Work with the largest network of  <br />
          independent professionals and get    <br />
          things done—from quick turnarounds   <br />
          to big transformations.</p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="cards">
        <div className="card">
          <h3>Post a job and<br />
           hire a pro</h3>
          <p>Go and Visit ➡️</p>
        </div>
        <div className="card">
          <h3>Browse and Bid Projects</h3>
          <p>Go and Visit ➡️</p>
        </div>
        <div className="card">
          <h3>Get Advice from an expert seniors</h3>
          <p>Consult ➡️</p>
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection;
