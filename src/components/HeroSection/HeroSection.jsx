import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./HeroSection.css";

const HeroSection = () => {
    const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="home" className="heroSection">
      <div className="heroText">
        <h1>
          Hi, I'm <span>Vyshakh</span>
        </h1>
        <p>I'm
          <Typewriter
            words={[
              " a computer science student turning ideas into code.",
              " Currently mastering React & JavaScript.",
              " Exploring learning systems, innovation & problem-solving.",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </p>
        <button className="projectButton" onClick={(e) => handleScrollToSection(e, "projects")}>View Project</button>
      </div>
      <div className="heroImage">
        <img src={`${import.meta.env.BASE_URL}heroSection.png`} alt="Hero Section" />
      </div>
    </div>
  );
};

export default HeroSection;
