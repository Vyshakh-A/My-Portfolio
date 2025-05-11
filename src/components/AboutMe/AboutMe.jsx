import React from "react";
import "./AboutMe.css";
const AboutMe = () => {
  return (
    <>
      <div className="aboutMeSection" id="aboutMe">
        <div className="aboutMe">
          <div className="aboutMeImage">
            <img src={`${import.meta.env.BASE_URL}aboutme.png`} alt="Profile" />
          </div>
          <div className="aboutSection">
            <h2>About Me</h2>
            <p>
              I'm Vyshakh — a passionate Computer Science student who loves
              turning ideas into impactful digital experiences. My journey began
              with curiosity, and it’s now fueled by a mission to master modern
              web development with React, JavaScript, and system design
              principles.
            </p>
            <p>
              I enjoy solving problems that blend creativity and logic, and I’m
              fascinated by the intersection of learning systems, behavioral
              design, and innovation. Whether it’s building responsive UIs or
              diving deep into code architecture, I aim to craft elegant,
              user-focused solutions.
            </p>
            <p>
              When I’m not coding, you’ll find me exploring mental models,
              designing learning challenges for peers, or experimenting with
              tools that amplify productivity and learning.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
