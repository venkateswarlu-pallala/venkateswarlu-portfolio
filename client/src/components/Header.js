import React from 'react';
import profilePic from '../assets/images/profile.jpg'; 

const Header = ({ data }) => {
  // Destructure the data object for cleaner access
  const { name, title, description, resumePdf } = data;
  // Assumes image is in public/images

  return (
    <header className="header">
      <img src={profilePic} alt={name} className="profile-picture" />
      <h1>{name}</h1>
      <p className="tagline">{title}</p>
      <p className="header-description">{description}</p>
      
      {/* We will create a separate SocialLinks component for better organization */}
      {/* For now, you can keep your existing social links div */}
      <div className="social-links">
        <a href="https://linkedin.com/in/pallala-venkateswarlu-690b75286" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="https://github.com/venkateswarlu-pallala" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://wa.me/918919583531" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <i className="bi bi-whatsapp"></i>
        </a>
        <a href="mailto:venki44456@gmail.com" aria-label="Email">
          <i className="bi bi-envelope-fill"></i>
        </a>
      </div>

      <a href={resumePdf} download="PALLALA_VENKATESWARLU_Resume.pdf" className="btn-download">
        <i className="bi bi-download"></i> Download Resume
      </a>
    </header>
  );
}

export default Header;