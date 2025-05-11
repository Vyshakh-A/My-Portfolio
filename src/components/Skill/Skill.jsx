import React, { useState } from "react";
import "./Skill.css";

const skills = [
  {
    category: "Frontend Tools",
    items: [
      { name: "HTML", level: "Intermediate", note: "Confident with HTML semantics and layout structure." },
      { name: "CSS", level: "Intermediate", note: "Good at styling, Flexbox, Grid, and responsive design." },
      { name: "JavaScript (ES6)", level: "Basic", note: "Understanding core concepts; working on deeper JS patterns." },
      { name: "React", level: "Learning", note: "Just started React. Comfortable with JSX and useState/useEffect basics." },
    ],
  },
  {
    category: "Programming & Logic",
    items: [
      { name: "DOM Manipulation", level: "Basic", note: "Can dynamically manipulate elements using JS." },
      { name: "DSA (Arrays, Strings)", level: "Beginner", note: "Learning problem solving with basic data structures." },
    ],
  },
  {
    category: "Tools & Workflow",
    items: [
      { name: "Git & GitHub", level: "Beginner", note: "Learning commits, branches, and collaboration basics." },
      { name: "VS Code", level: "Proficient", note: "Well-versed with extensions, shortcuts, and workspace setup." },
      { name: "Figma", level: "Proficient", note: "Frequently use Figma for UI mockups and component layouts." },
    ],
  },
  {
    category: "Currently Learning",
    items: [
      { name: "React Ecosystem", level: "Active", note: "Exploring router, hooks, and component patterns." },
      { name: "Component Design", level: "In Progress", note: "Trying to design reusable and scalable UI components." },
      { name: "JS Fundamentals", level: "Reviewing", note: "Revisiting scoping, hoisting, and closure." },
    ],
  },
];

const SkillsSection = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (key) => {
    setExpandedCards((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="skillsSection" id="skill">
      <h2>Skills</h2>
      <div className="skillsContainer">
        {skills.map((group, index) => (
          <div key={index} className="skillGroup">
            <h3>{group.category}</h3>
            <div className="skillCards">
              {group.items.map((skill, i) => {
                const key = `${index}-${i}`;
                return (
                  <div
                    key={key}
                    className="skillCard"
                    onClick={() => toggleCard(key)}
                  >
                    <div className="skillCardTop">
                      <span className="skillName">{skill.name}</span>
                      <span className="skillLevel">{skill.level}</span>
                    </div>
                    {expandedCards[key] && (
                      <p className="skillNote">{skill.note}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
