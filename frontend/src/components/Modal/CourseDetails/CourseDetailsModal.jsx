import React from "react";
import "./CourseDetailsModal.css";
import { courseTopics } from "../../../data/CourseTopic";

function CourseDetailsModal({ closeModal }) {
  return (
    <div className="modal-overlay">
      <div className="course-modal-content">
        <span className="close-btn" onClick={closeModal}>
          &times;
        </span>
        <h3>Course Overview</h3>
        <p>
          In this course, you will build 10 projects in just 15 days. Learn key
          web development concepts through hands-on coding!
        </p>

        <h4>Course Outline</h4>
        <div className="course-outline">
          {courseTopics.map((topic, index) => (
            <div key={index} className="outline-item">
              <i className={`${topic.icon} outline-icon`}></i>
              <div className="outline-text">
                <h5>{topic.title}</h5>
                <p>{topic.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseDetailsModal;
