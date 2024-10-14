// src/components/About.js
import React from "react";
import "../styles/About.css"; // Asegúrate de crear este archivo para los estilos personalizados
import fotoPerfil from "../assets/FotoPerfil.jpg"; // Asegúrate de tener una imagen de perfil en la carpeta assets
const About = ({ additionalInfo }) => {
  return (
    <div className="container text-light py-5">
      <div className="row align-items-center">
        {/* Imagen de perfil */}
        <div className="col-md-2 text-center">
          <img
            src={fotoPerfil}
            alt="Profile"
            className="img-fluid"
            style={{ width: "auto", height: "auto" }}
          />
        </div>

        {/* Información Personal */}
        <div className="col-md-6">
          <h2 className="h3">{additionalInfo.name}</h2>
          <p className="lead mb-1">
            {additionalInfo.mainSkill} | pedrodavidg88@gmail.com
          </p>
          <p className="text-muted">
            <i className="bi bi-geo-alt-fill"></i> {additionalInfo.location}
          </p>
        </div>

        {/* Botones personalizados de contacto */}
        <div className="col-md-4 text-center">
          <a
            href={`mailto:${additionalInfo.email}`}
            className="custom-btn m-2 h4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-envelope"></i> Correo
          </a>
          <a
            href={additionalInfo.github}
            className="custom-btn m-2 h4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i> GitHub
          </a>
          <a
            href={additionalInfo.linkedIn}
            className="custom-btn m-2 h4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>

      {/* Descripción adicional */}
      <div className="mt-5">
        <h3 className="h5">Sobre mí</h3>
        <p className="h3" style={{ textAlign: "justify" }}>
          {additionalInfo.aMe}
        </p>
      </div>
    </div>
  );
};

export default About;
