// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <div className="container">
        <p className="mb-0">
          Pedro David García López &copy; {new Date().getFullYear()}
        </p>
        <p className="mb-0">
          Sígueme en{" "}
          <a
            href="https://github.com/pytocino"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/pytocino"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
