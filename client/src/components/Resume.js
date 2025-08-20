import React from 'react';

const Resume = ({ data }) => {
  const { experience, education } = data;

  return (
    <>
      <h2 className="section-title">Resume</h2>
      <p className="section-subtitle">My professional experience and academic qualifications.</p>
      
      <div className="timeline">
        {/* Map over the experience data */}
        {experience.map((item, index) => (
          <div className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`} key={`exp-${index}`}>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p className="sub-heading">{item.date} | {item.location}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}

        {/* Map over the education data */}
        {education.map((item, index) => (
          <div className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`} key={`edu-${index}`}>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p className="sub-heading">{item.date} | {item.location}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Resume;