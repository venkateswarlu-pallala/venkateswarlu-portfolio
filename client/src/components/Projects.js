import React from 'react';
// Make sure your image paths are correct in the assets folder
import portfolioImg from '../assets/images/portfolio.png';
import restaurantImg from '../assets/images/restaurant.png';


const projectsData = [
  {
    title: "Portfolio",
image: portfolioImg,
description: "A personal portfolio website showcasing projects, skills, and experience with a clean and responsive design.",
tags: ["React", "Bootstrap", "JavaScript", "HTML", "CSS"],
liveLink: "venkateswarlupallala-portfolio.netlify.app",


  },
  {
    title: "Full-Stack Restaurant Menu App",
    image: restaurantImg,
    description: "Developed a dynamic SPA for users to browse a menu, filter items, and place orders, with a server-side application to manage data.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Hooks"],
    liveLink: "https://restaurant-venkateswarlu-pallalas-projects.vercel.app", 
    
  }
];

const Projects = () => {
  return (
    <section className="card">
      <h2>PROJECTS</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>
              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-btn">
                  <i className="bi bi-eye-fill"></i> Live Demo
                </a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-btn">
                  <i className="bi bi-github"></i> Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;