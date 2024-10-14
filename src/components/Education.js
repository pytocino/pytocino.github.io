// src/components/Education.js
import React from "react";

const Education = ({ education }) => {
  return (
    <div className="container py-5">
      <h2 className="display-4 text-center mb-5">Formación Académica</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {education.map((edu, index) => (
          <div key={index} className="mb-4 p-3 education-card">
            {/* Logo y título alineados */}
            <div className="d-flex align-items-center mb-2">
              <img
                src={edu.image}
                alt={edu.title}
                className="img-fluid me-3"
                style={{ width: "auto", height: "75px", borderRadius: "10px" }} // Tamaño y bordes suaves para el logo
              />
              <div>
                <h3 className="h5 mb-0">{edu.title}</h3>
                <h4 className="h6 text-muted">
                  {edu.venue} | {edu.years}
                </h4>
              </div>
            </div>

            {/* Descripción */}
            <p style={{ textAlign: "justify" }}>{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
