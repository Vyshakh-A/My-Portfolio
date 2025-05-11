import React from "react";
import "./NavBar.css";
const NavBar = () => {
  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="NavBar">
      <div className="navBar">
        <div className="logoSection">
          <a href="#">
            <h1>Portfolio</h1>
          </a>
        </div>
        <div className="navSection">
          <ul className="navList">
            <li>
              <a href="#" onClick={(e) => handleScrollToSection(e, "home")}>Home</a>
            </li>
            <li>
              <a href="#" onClick={(e) => handleScrollToSection(e, "aboutMe")}>About Me</a>
            </li>
            <li>
              <a href="#" onClick={(e) => handleScrollToSection(e, "skill")}>Skills</a>
            </li>
            <li>
              <a href="#" onClick={(e) => handleScrollToSection(e, "projects")}>Project</a>
            </li>
          </ul>
        </div>
        <button className="regButton" onClick={(e) => handleScrollToSection(e, "contact")}>
          <a href="#" >Contact Me</a>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
