import React from "react";
import "./Header.css";
import useModal from "../hooks/useModal";
import RegisterModal from "../Modal/Register/RegisterModal";

function Header() {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <header>
        <div className="container">
          <h1>Welcome to #GO Academy</h1>
          <p>Your journey to becoming a MERN Stack Developer starts here!</p>
          <button onClick={openModal}>Register Now</button>
          <p id="countdown-timer" className="timer"></p>
        </div>
      </header>

      {isModalOpen && <RegisterModal closeModal={closeModal} />}
    </>
  );
}

export default Header;
