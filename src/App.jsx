import React from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import Skill from "./components/Skill/Skill.jsx";
import Project from "./components/Project/Project.jsx";
import "./App.css";
import Contact from "./components/Contact/Contact.jsx";

const App = () => {
  return (
    <>
      <div>
        <NavBar />
        <HeroSection />
        <AboutMe />
        <Skill />
        <Project />
        <Contact />
      </div>
    </>
  );
};

export default App;
