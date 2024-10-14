// src/components/Experience.js
import React from "react";

const Experience = ({ experiences }) => {
  return (
    <div className="container py-5">
      <h2 className="display-4 text-center mb-5">Experiencia Laboral</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-4 p-3">
            {/* Logo y título alineados */}
            <div className="d-flex align-items-center mb-2">
              <img
                src={exp.image}
                alt={exp.title}
                className="img-fluid me-3"
                style={{ width: "75px", height: "75px", borderRadius: "10px" }} // Tamaño y bordes suavizados para el logo
              />
              <div>
                <h3 className="h5 mb-0">{exp.title}</h3>
                <h4 className="h6 text-muted">{exp.subtitle}</h4>
              </div>
            </div>

            {/* Descripción */}
            <p style={{ textAlign: "justify" }}>{exp.description}</p>
            <span className="text-muted">{exp.years}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
