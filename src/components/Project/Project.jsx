import React from "react";
import "./project.css";

const projects = [
  {
    title: "eCommerce Hero Section",
    description:
      "A fully responsive and interactive hero section built with HTML and CSS. Showcases clean layout, typography, and user-first design principles. Ideal for landing pages.",
    techStack: ["HTML", "CSS", "Responsive Design"],
    link: "https://minimart.ccbp.tech/", 
  },
  // You can add more projects here later
];

const ProjectSection = () => {
  return (
    <div className="projectSection" id="projects">
      <h2>Projects</h2>
      <div className="projectContainer">
        {projects.map((project, index) => (
          <div className="projectCard" key={index}>
            <h3>{project.title}</h3>
            <p className="projectDesc">{project.description}</p>
            <ul className="techStack">
              {project.techStack.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="projectLink"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
