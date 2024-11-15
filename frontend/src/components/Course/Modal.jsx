import React from 'react';
import './Modal.css';

function Modal({ closeModal }) {
  return (
    <div id="course-details-modal" className="course-details-modal">
      <div className="course-details-content">
        {/* Close button triggers the closeModal function */}
        <span className="close-btn" onClick={closeModal}>&times;</span>
        <h3>Course Overview</h3>
        <p>
          In this course, you will build 10 projects in just 15 days. Learn key
          web development concepts by hands-on coding experience!
        </p>
        <h4>Course Outline</h4>
        <div className="course-outline">
          {/* Course outline content as before */}
        </div>
      </div>
    </div>
  );
}

export default Modal;
