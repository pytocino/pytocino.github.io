// src/components/About.js
import React from "react";
import fotoPerfil from "../assets/FotoPerfil.jpg";

const About = ({ additionalInfo }) => {
  return (
    <div className="container text-light">
      <div className="row align-items-center">
        {/* Imagen de perfil */}
        <div className="col-md-2 text-center">
          <img
            src={fotoPerfil}
            alt="Profile"
            className="rounded-circle"
            style={{ width: "100px", height: "auto" }}
          />
        </div>

        {/* Información Personal */}
        <div className="col-md-6">
          <h2 className="h3">{additionalInfo.name}</h2>
          <p className="lead mb-1">{additionalInfo.mainSkill}</p>
          <p className="text-muted">
            <i className="bi bi-geo-alt-fill"></i> {additionalInfo.location}
          </p>
        </div>

        {/* Iconos de contacto */}
        <div className="col-md-4 text-center">
          <a
            href={`mailto:${additionalInfo.email}`}
            className="btn btn-outline-primary mx-2"
          >
            <i className="bi bi-envelope"></i>
          </a>
          <a
            href={additionalInfo.github}
            className="btn btn-outline-primary mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href={additionalInfo.linkedin}
            className="btn btn-outline-primary mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>

      {/* Descripción adicional */}
      <div className="mt-5">
        <h3 className="h5">Sobre mí</h3>
        <p>{additionalInfo.aMe}</p>
      </div>
    </div>
  );
};

export default About;
