// src/components/Projects.js
import React from "react";

const Projects = ({ projects }) => {
  return (
    <div className="container py-5">
      <h2 className="display-4 text-center mb-5">Proyectos</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {projects.map((project, index) => (
          <div key={index} className="mb-4 p-3">
            {/* Imagen y título alineados */}
            <div className="d-flex align-items-center mb-2">
              <img
                src={project.image}
                alt={project.title}
                className="tech-icon img-fluid me-3"
                style={{
                  width: "75px",
                  height: "75px",
                  borderRadius: "15px",
                  boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                }}
              />
              <div>
                <h3 className="h5 mb-0">{project.title}</h3>
                <h4 className="h6 text-muted">{project.subtitle}</h4>
              </div>
            </div>

            {/* Descripción del proyecto */}
            <p style={{ textAlign: "justify" }}>{project.description}</p>

            {/* Tecnologías utilizadas */}
            <h5 className="mt-3">Tecnologías usadas:</h5>
            <ul className="list-inline">
              {project.technologies.map((tech, idx) => (
                <li
                  key={idx}
                  className="list-inline-item badge badge-pill badge-secondary p-2 m-2"
                >
                  {tech}
                </li>
              ))}
            </ul>
            {project.gif ? (
              <img
                src={project.gif}
                alt={project.title}
                className="img-fluid d-flex mx-auto"
                style={{
                  borderRadius: "15px",
                  boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                }}
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
