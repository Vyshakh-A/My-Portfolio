import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    if (!isCollapsed) {
      setIsCollapsed(true);
    }
  };

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary NavBar">
      <div className="container-fluid navBar">
        <div className="logoSection">
          <a href="#" className="navbar-brand">
            <h1>Portfolio</h1>
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNavAltMarkup"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse${isCollapsed ? "" : " show"}`}
          id="navbarNavAltMarkup"
        >
          <ul className="navbar-nav navList">
            <li>
              <a
                href="#"
                className="nav-link active"
                onClick={(e) => handleScrollToSection(e, "home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="nav-link"
                onClick={(e) => handleScrollToSection(e, "aboutMe")}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#"
                className="nav-link"
                onClick={(e) => handleScrollToSection(e, "skill")}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#"
                className="nav-link"
                onClick={(e) => handleScrollToSection(e, "projects")}
              >
                Project
              </a>
            </li>
          </ul>
          <button
            className="regButton btn btn-primary"
            onClick={(e) => handleScrollToSection(e, "contact")}
          >
            <a href="#">Contact Me</a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
