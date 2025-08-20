import React, { useState } from 'react';
import ThemeToggler from './ThemeToggler'; // <-- Import the new component

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  // Function to close the mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsActive(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#home">VP.</a>
      </div>

      {/* Main navigation links */}
      <div className={`navbar-links ${isActive ? 'active' : ''}`}>
        <ul>
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
          {/* V-- Updated link from #experience to #resume --V */}
          <li><a href="#resume" onClick={handleLinkClick}>Resume</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>
      </div>

      {/* Right-side actions: Theme Toggler and Mobile Menu Toggle */}
      <div className="navbar-actions">
        <ThemeToggler />
        <div className="navbar-toggle" onClick={() => setIsActive(!isActive)}>
          <i className={isActive ? 'bi bi-x-lg' : 'bi bi-list'}></i> {/* Use a thicker 'x' icon */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;