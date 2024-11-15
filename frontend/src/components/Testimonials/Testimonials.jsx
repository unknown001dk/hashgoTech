import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return (
    <section id="testimonials" className="container">
    <h2>What Our Students Say</h2>
    <div className="testimonial-list">
      <div className="testimonial-item animated-card">
        <p>
          "I learned so much in just 15 days! The projects were engaging, and
          I felt supported every step of the way."
        </p>
        <p><strong>- sankar, Student</strong></p>
      </div>
      <div className="testimonial-item animated-card">
        <p>
          "The hands-on projects were exactly what I needed to build my
          skills. I now feel confident applying for jobs!"
        </p>
        <p><strong>- dk, Junior Developer</strong></p>
      </div>
    </div>
  </section>
  )
}

export default Testimonials
