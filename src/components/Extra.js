// src/components/Extra.js
import React from "react";

const Extra = ({ extraInfo }) => {
  return (
    <div className="container py-5">
      <h2 className="display-4 text-center mb-5">Adicional</h2>
      {extraInfo.map((extra, index) => (
        <div key={index} className="mb-4">
          {/* <h3 className="h5">{extra.title}</h3> */}
          <p style={{ textAlign: "justify" }}>{extra.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Extra;
