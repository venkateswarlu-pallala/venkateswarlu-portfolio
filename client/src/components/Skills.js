import React from 'react';
import { skillsData } from '../data/portfolioData'; // Import the new data object

// A reusable component for a single skill card
const SkillCard = ({ skill }) => (
  <div 
    className="skill-card" 
    // This is the key: we pass the brand color as a CSS custom property
    style={{ '--skill-color': skill.color }}
  >
    <i className={`bi ${skill.iconClass}`}></i>
    <h4>{skill.name}</h4>
  </div>
);

const Skills = () => {
  return (
    <>
      <h2 className="section-title">Technical Proficiency</h2>
      <p className="section-subtitle">My toolbox for building and deploying web applications.</p>
      
      {/* Map over the categories in the skillsData object */}
      {Object.entries(skillsData).map(([category, skills]) => (
        <div className="skills-category" key={category}>
          <h3 className="skills-category-title">{category}</h3>
          <div className="skills-grid">
            {/* Map over the skills within each category */}
            {skills.map(skill => (
              <SkillCard skill={skill} key={skill.name} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;