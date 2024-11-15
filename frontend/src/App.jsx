import React from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Course from "./components/Course/Course";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Modal from "./components/Course/Modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

function App() {
  return (
    <>
      <Header />
      <About />
      <Features />
      <Course />
      <Testimonials />
      <Modal />
      {/* <RegisterModal /> */}
      <Contact />
      <ToastContainer /> 
    </>
  );
}

export default App;
