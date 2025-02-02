// eslint-disable-next-line no-unused-vars
import React from "react";
import "./ProjectShowCase.css";

const projects = [
  {
    title: "Weather App",
    description: "A weather forecasting app using OpenWeather API.",
    techStack: ["Html", "Css", "JavaScript","OpenWeatherAPI"],
    liveLink: "",
    githubLink: "https://github.com/Thamizh2006/Weatherapp.git",
  },
  
  {
    title: "Online-Examination-System",
    description: "A full-stack Online-Examination System platform for Examination with time Limits.",
    techStack: ["React", "Node.js", "MongoDB"],
    liveLink: "",
    githubLink: "https://github.com/Thamizh2006/Oniline-examination-system.git",
  },
  {
    title: "E-commerce Website",
    description: "A simple E-commerce Website.",
    techStack: ["Html", "Css", "Javascript"],
    liveLink: "",
    githubLink: "https://github.com/Thamizh2006/e-commerce.git",
  },
  {
    title: "Digital Clock",
    description: "Digital Clock using Javascript",
    techStack: ["Html", "Css", "JavaScript"],
    liveLink: "",
    githubLink: "https://github.com/Thamizh2006/Digital_Clock.git",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my projects and skills.",
    techStack: ["React","Html","Css", "JavaScript"],
    liveLink: "",
    githubLink: "https://github.com/Thamizh2006/portfolio.git",
  },
 
 
];

const ProjectShowcase = () => {
  return (
    <div className="project-container">
      <h2>Project Showcase</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tech-stack">
              <strong>Tech Stack:</strong> {project.techStack.join(", ")}
            </p>
            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
