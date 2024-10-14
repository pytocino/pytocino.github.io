// src/components/Section.js
import React from "react";
import About from "./About";
import Technologies from "./Technologies";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Extra from "./Extra";

const Section = ({ id, title, description, bgColor, textColor, data }) => {
  return (
    <div
      id={id}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        transition: "background-color 0.5s, color 0.5s",
      }}
    >
      <h1>{title}</h1>
      <p>{description}</p>
      {id === "about" && <About additionalInfo={data.additionalInfo} />}
      {id === "technologies" && (
        <Technologies technologies={data.technologies} />
      )}
      {id === "experience" && <Experience experiences={data.experiences} />}
      {id === "projects" && <Projects projects={data.projects} />}
      {id === "education" && <Education education={data.education} />}
      {id === "extra" && <Extra extraInfo={data.extraInfo} />}
    </div>
  );
};

export default Section;
