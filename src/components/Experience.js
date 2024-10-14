// src/components/Experience.js
import React from "react";

const Experience = ({ experiences }) => {
  return (
    <div className="container py-5">
      <h2 className="display-4 text-center mb-5">Experiencia Laboral</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-4">
          <h3 className="h5">{exp.title}</h3>
          <h4 className="h6 text-muted">{exp.subtitle}</h4>
          <p>{exp.description}</p>
          <span className="text-muted">{exp.years}</span>
        </div>
      ))}
    </div>
  );
};

export default Experience;
