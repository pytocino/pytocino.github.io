import React, { useEffect, useState } from "react";
import { sectionsData } from "../assets/data";
import Section from "./Section";

const Portfolio = () => {
  const [currentStyle, setCurrentStyle] = useState(sectionsData[0]);

  const handleScroll = () => {
    sectionsData.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.25 && rect.bottom >= 0) {
          setCurrentStyle(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        backgroundColor: currentStyle.bgColor,
        color: currentStyle.textColor,
        transition: "background-color 0.5s, color 0.5s",
      }}
    >
      {sectionsData.map((sectionData) => (
        <Section
          key={sectionData.id}
          id={sectionData.id}
          bgColor={currentStyle.bgColor}
          textColor={currentStyle.textColor}
          data={sectionData}
        />
      ))}
    </div>
  );
};

export default Portfolio;
