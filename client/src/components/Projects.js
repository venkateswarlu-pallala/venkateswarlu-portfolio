import React from 'react';
// Make sure your image paths are correct in the assets folder
import portfolioImg from '../assets/images/portfolio.png';
import restaurantImg from '../assets/images/restaurant.png';
import ecommerceImg from  '../assets/images/ecommerce.png';

const projectsData = [
  {
    title: "Portfolio",
image: portfolioImg,
description: "A personal portfolio website showcasing projects, skills, and experience with a clean and responsive design.",
tags: ["React", "Bootstrap", "JavaScript", "HTML", "CSS"],
liveLink: "https://venkateswarlupallala-portfolio.netlify.app",
codeLink: "https://github.com/venkateswarlu-pallala/venkateswarlu-portfolio", 

  },
  {
    title: "Full-Stack Restaurant Menu App",
    image: restaurantImg,
    description: "Developed a dynamic SPA for users to browse a menu, filter items, and place orders, with a server-side application to manage data.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Hooks"],
    liveLink: "https://restaurant-venkateswarlu-pallalas-projects.vercel.app", 
    codeLink: "https://github.com/venkateswarlu-pallala/Restaurant", 
  },
   {
    title: "E-commerce Platform",
    image: ecommerceImg,
    description: "A full-featured e-commerce website with product listings, a shopping cart, user authentication, and a checkout process using Stripe.",
    tags: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe API"],
    liveLink: "https://v-shop-website.netlify.app/", // Add your live demo link
    codeLink: "https://github.com/venkateswarlu-pallala/e-commerce-web-app", // Add your GitHub repo link
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