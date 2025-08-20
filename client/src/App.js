import React, { useEffect } from 'react';

// --- DATA ---
// Import all your data from the central file
import { headerData, aboutData, projectsData, resumeData } from './data/portfolioData';

// --- COMPONENTS ---
// Import your components
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About'; // Renamed for clarity
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume'; // A new combined component
import ContactForm from './components/ContactForm';


// --- STYLES ---
import './App.css';

function App() {
  // This useEffect for animations is perfect. We will keep it exactly as is.
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 }); // Added a threshold for better trigger timing

    const hiddenElements = document.querySelectorAll('.section-hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => hiddenElements.forEach((el) => observer.unobserve(el));
  }, []);


  return (
    <div className="App">
      <Navbar />
      
      <div id="home">
        {/* We now pass data via props */}
        <Header data={headerData} />
      </div>

      <main className="container">
        <section id="about" className="section-container section-hidden">
          {/* Renamed ProfessionalSummary to About */}
          <About data={aboutData} />
        </section>

        <section id="skills" className="section-container section-hidden">
          <Skills /> {/* Skills data is often static in the component */}
        </section>

        <section id="projects" className="section-container section-hidden">
          <Projects data={projectsData} />
        </section>

        <section id="resume" className="section-container section-hidden">
          {/* We've combined Experience and Education into a single Resume component */}
          <Resume data={resumeData} />
        </section>

        <section id="contact" className="section-container section-hidden">
          <ContactForm />
        </section>
      </main>
      
    
    </div>
  );
}

export default App;