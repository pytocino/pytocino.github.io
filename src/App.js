import React from "react";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TopArrow from "./components/TopArrow";
import SocialDropdown from "./components/SocialDropdown";

const App = () => {
  return (
    <div>
      <Navbar />
      <Portfolio />
      <Footer />
      <TopArrow />
      <SocialDropdown />
    </div>
  );
};

export default App;
