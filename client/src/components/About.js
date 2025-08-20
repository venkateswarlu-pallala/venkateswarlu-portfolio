import React from 'react';

const About = ({ data }) => {
  const { title, description } = data;

  return (
    // We remove the <section> tag as it's now handled in App.js
    <div className="card about-card">
      <h2 className="section-title">{title}</h2>
      <p>
        {description}
      </p>
    </div>
  );
}

export default About;