// src/components/Education.js
import React from "react";

const Education = ({ education }) => {
  return (
    <div className="container py-5">
      <h2 className="display-4 text-center mb-5">Formación Académica</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-4">
          <h3 className="h5">{edu.title}</h3>
          <h4 className="h6" style={{ color: "black" }}>
            {edu.venue} | {edu.years}
          </h4>
          <p style={{ textAlign: "justify" }}>{edu.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
