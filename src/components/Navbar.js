// src/components/Navbar.js
import React from "react";
import { Link } from "react-scroll"; // npm install react-scroll

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon bg-light"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="about"
                smooth={true}
                duration={300}
              >
                Sobre mí
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="technologies"
                smooth={true}
                duration={300}
              >
                Tecnologías
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="experience"
                smooth={true}
                duration={300}
              >
                Experiencia
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="projects"
                smooth={true}
                duration={300}
              >
                Proyectos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="education"
                smooth={true}
                duration={300}
              >
                Formación
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
