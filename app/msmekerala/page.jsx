'use client'
import React from "react";
import "../css/msmekerala.css";
import Navbar from "../components/navbar";
import Socials from "../components/socials";

export default function Page() {
  const handleRedirect = () => {
    window.open("https://industry.kerala.gov.in/", "_blank"); // replace with your target site
  };

  return (
    <div className="msme-container">
        <Navbar />
        <Socials />
      <div className="msme-content">
      <h1 className="msme-heading">MSME's in Kerala</h1>
      <p className="msme-description">
        Micro, Small, and Medium Enterprises (MSMEs) in Kerala are the backbone
        of the state’s economy, providing employment opportunities and fostering
        entrepreneurship. They contribute significantly to industrial growth,
        exports, and regional development by promoting innovation and
        self-reliance.
      </p>
      <button className="msme-button" onClick={handleRedirect}>
        Click here to learn more
      </button>
      </div>
    </div>
  );
}
