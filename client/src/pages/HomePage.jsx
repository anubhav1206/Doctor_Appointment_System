import React from "react";
import "../styles/Homepage.css";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="home-page">
        <h1 className="text-center text-xl mx-4">Welcome to the Doctor Appointment System</h1>
      </div>
    </>
  );
};

export default HomePage;
