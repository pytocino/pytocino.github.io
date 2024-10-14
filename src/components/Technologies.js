// src/components/Technologies.js
import React from "react";

const Technologies = ({ technologies }) => {
  return (
    <div className="container text-center py-5">
      <h2 className="display-4">Tecnologías que manejo</h2>
      <ul className="list-inline">
        {technologies.map((tech, index) => (
          <li
            key={index}
            className="list-inline-item badge badge-pill badge-primary p-2 m-2"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Technologies;
