// src/components/Education.js
import React from "react";

const Education = ({ education }) => {
  return (
    <div className="container py-5">
      <h2 className="display-4 text-center mb-5">Formación Académica</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-4">
          <h3 className="h5">{edu.title}</h3>
          <h4 className="h6 text-muted">{edu.subtitle}</h4>
          <p>{edu.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
