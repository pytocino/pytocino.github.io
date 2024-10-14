// src/components/Technologies.js
import React from "react";

const Technologies = ({ technologies }) => {
  const renderCategory = (category, title) => (
    <div className="col-12 col-md-6 mb-4">
      <h3 className="mb-3">{title}</h3>
      <div className="d-flex flex-wrap justify-content-center">
        {category.map((tech, index) => (
          <div key={index} className="m-2 text-center">
            <img
              src={tech.image}
              alt={tech.title}
              className="tech-icon img-fluid"
              style={{ width: "75px", height: "75px" }}
            />
            <p className="mt-2">{tech.title}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container text-center py-5">
      <h2 className="display-4 mb-5">Stack Tecnológico</h2>
      <div className="row">
        {renderCategory(technologies.backend, "Backend")}
        {renderCategory(technologies.databases, "Bases de Datos")}
        {renderCategory(technologies.frontend, "Frontend")}
        {renderCategory(technologies.frameworks, "Frameworks")}
        {renderCategory(technologies.tools, "Herramientas")}
        {renderCategory(technologies.graphicTools, "Diseño Gráfico")}
      </div>
    </div>
  );
};

export default Technologies;
