// src/components/TopArrow.js
import React from "react";
import { animateScroll as scroll } from "react-scroll"; // npm install react-scroll
import "../styles/TopArrow.css";

const TopArrow = () => {
  return (
    <div className="top-arrow" onClick={() => scroll.scrollToTop()}>
      <i
        className="bi bi-arrow-up-circle-fill"
        style={{ fontSize: "2rem", cursor: "pointer" }}
      ></i>
    </div>
  );
};

export default TopArrow;
