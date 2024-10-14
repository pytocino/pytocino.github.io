// src/components/Projects.js
import React from "react";

const Projects = ({ projects }) => {
  return (
    <div className="container py-5">
      <h2 className="display-4 text-center mb-5">Proyectos Realizados</h2>
      {projects.map((project, index) => (
        <div key={index} className="mb-4">
          <h3 className="h5">{project.title}</h3>
          <h4 className="h6 text-white">{project.subtitle}</h4>
          <p style={{ textAlign: "justify" }}>{project.description}</p>
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
        </div>
      ))}
    </div>
  );
};

export default Projects;
