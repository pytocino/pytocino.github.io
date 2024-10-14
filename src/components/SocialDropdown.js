// src/components/SocialDropdown.js
import React, { useState } from "react";
import "../styles/SocialDropdown.css";

const SocialDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="social-dropdown">
      <button
        className="btn btn-danger"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        <i className="bi bi-share-fill"></i>
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <a
            href="mailto:pedrodavidg88@gmail.com"
            className="btn btn-light d-block mb-2"
          >
            <i className="bi bi-envelope"></i> Correo
          </a>
          <a
            href="https://github.com/pytocino"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light d-block mb-2"
          >
            <i className="bi bi-github"></i> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pytocino"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light d-block"
          >
            <i className="bi bi-linkedin"></i> LinkedIn
          </a>
        </div>
      )}
    </div>
  );
};

export default SocialDropdown;
