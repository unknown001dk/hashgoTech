import React from 'react';
import './Features.css';

function Features() {
  return (
    <section id="features" className="container">
      <h2>Why Choose Us?</h2>
      <div className="feature-list">
        <div className="feature-item animated-card">
          <h3>Hands-On Projects</h3>
          <p>
            Each day, tackle a real-world project that enhances your skills and
            builds your portfolio.
          </p>
        </div>
        <div className="feature-item animated-card">
          <h3>Expert Guidance</h3>
          <p>
            Learn from experienced developers who will guide you through the
            learning process step-by-step.
          </p>
        </div>
        <div className="feature-item animated-card">
          <h3>Community Support</h3>
          <p>
            Join a community of like-minded learners and receive feedback,
            support, and encouragement.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Features
