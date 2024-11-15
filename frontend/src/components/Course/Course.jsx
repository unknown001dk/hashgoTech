import React from "react";
import "./Course.css";
import useModal from "../hooks/useModal";
import RegisterModal from "../Modal/Register/RegisterModal";
import CourseDetailsModal from "../Modal/CourseDetails/CourseDetailsModal";

function Course() {
  // Separate modals for Register and Learn More
  const {
    isModalOpen: isRegisterModalOpen,
    openModal: openRegisterModal,
    closeModal: closeRegisterModal,
  } = useModal();
  const {
    isModalOpen: isDetailsModalOpen,
    openModal: openDetailsModal,
    closeModal: closeDetailsModal,
  } = useModal();

  return (
    <section id="courses" className="container">
      <h2>Available Courses</h2>
      <div className="course-list">
        <div className="course-card animated-card">
          <h3>10 Projects in 15 Days</h3>
          <p>Learn the MERN Stack by building 10 hands-on projects!</p>
          <button onClick={openRegisterModal}>Register</button>
          <button onClick={openDetailsModal}>Learn More</button>
        </div>
      </div>

      {/* Conditionally render the Register Modal */}
      {isRegisterModalOpen && <RegisterModal closeModal={closeRegisterModal} />}

      {/* Conditionally render the Course Details Modal */}
      {isDetailsModalOpen && (
        <CourseDetailsModal closeModal={closeDetailsModal} />
      )}
    </section>
  );
}

export default Course;
