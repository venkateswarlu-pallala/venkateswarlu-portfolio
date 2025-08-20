import React from 'react';
// Make sure your image paths are correct in the assets folder
import ecommerceImg from '../assets/images/ecommerce.png';
import restaurantImg from '../assets/images/restaurant.png';

// Add liveLink and codeLink to your project data
const projectsData = [
  {
    title: "Full-Stack E-commerce Website",
    image: ecommerceImg,
    description: "Engineered a full-stack e-commerce platform featuring product browsing, shopping cart functionality, and secure user authentication using JWT.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    liveLink: "#", // <-- Replace with your actual live demo link
    codeLink: "#"  // <-- Replace with your actual GitHub repo link
  },
  {
    title: "Full-Stack Restaurant Menu App",
    image: restaurantImg,
    description: "Developed a dynamic SPA for users to browse a menu, filter items, and place orders, with a server-side application to manage data.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Hooks"],
    liveLink: "#", // <-- Replace with your actual live demo link
    codeLink: "#"  // <-- Replace with your actual GitHub repo link
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