// --- ASSETS ---
// Import your project images and resume PDF
import ecommerceImg from '../assets/images/ecommerce.png';
import restaurantImg from '../assets/images/restaurant.png';
import resumePdf from '../assets/files/PALLALA_VENKATESWARLU_Resume.pdf';

// --- HEADER DATA ---
export const headerData = {
  name: "Pallala Venkateswarlu",
  title: "MERN Stack Developer",
  description: "A passionate developer crafting modern, responsive, and scalable web applications from Nellore, India. I turn complex problems into elegant, user-friendly solutions.",
  image: '', // Assuming your profile pic is in public/images
  resumePdf: resumePdf,
};

// --- SOCIAL LINKS ---
export const socialLinks = {
  linkedin: "https://linkedin.com/in/pallala-venkateswarlu-690b75286",
  github: "https://github.com/venkateswarlu-pallala",
  whatsapp: "https://wa.me/918919583531",
  email: "mailto:venki44456@gmail.com"
};

// --- ABOUT DATA ---
export const aboutData = {
  title: "About Me",
  description: "Aspiring MERN Stack Developer with hands-on experience in building full-stack web applications. Proficient in developing responsive front-end interfaces with React and creating robust, scalable back-end services with Node.js, Express.js, and MongoDB. Seeking to leverage a strong foundation in JavaScript and a passion for problem-solving to contribute to a collaborative development team and build high-quality software solutions.",
};

// --- SKILLS DATA ---
export const skillsData = {
  frontend: [
    { name: 'React', iconClass: 'bi-react', color: '#61DAFB' },
    { name: 'JavaScript', iconClass: 'bi-filetype-js', color: '#F7DF1E' },
    { name: 'HTML5', iconClass: 'bi-filetype-html', color: '#E34F26' },
    { name: 'CSS3', iconClass: 'bi-filetype-css', color: '#1572B6' },
    { name: 'Redux', iconClass: 'bi-diagram-3-fill', color: '#764ABC' },
    { name: 'Bootstrap', iconClass: 'bi-bootstrap-fill', color: '#7952B3' },
  ],
  backend: [
    { name: 'Node.js', iconClass: 'bi-node-plus-fill', color: '#339933' },
    { name: 'Express.js', iconClass: 'bi-braces-asterisk', color: '#198c1bff' },
  ],
  database: [
    { name: 'MongoDB', iconClass: 'bi-database-fill-gear', color: '#47A248' },
    { name: 'Mongoose', iconClass: 'bi-journal-code', color: '#880000' },
  ],
  tools: [
    { name: 'Git', iconClass: 'bi-git', color: '#F05032' },
    { name: 'GitHub', iconClass: 'bi-github', color: '#df5792ff' },
  
    { name: 'Netlify', iconClass: 'bi-gem', color: '#00C7B7' },
  ],
};
// --- PROJECTS DATA ---
export const projectsData = [
  {
    title: "Full-Stack E-commerce Website",
    image: ecommerceImg,
    description: "A feature-rich e-commerce platform with product browsing, a shopping cart, and secure user authentication using JWT.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
    liveLink: "#",
    codeLink: "#"
  },
  {
    title: "Restaurant Menu Ordering App",
    image: restaurantImg,
    description: "A dynamic SPA allowing users to browse a menu, filter items, and place orders, backed by a robust RESTful API.",
    tags: ["React", "Node.js", "MongoDB", "Context API"],
    liveLink: "#",
    codeLink: "#"
  },
  // Add more projects as needed
];

// --- EXPERIENCE & EDUCATION DATA (for the timeline) ---
export const resumeData = {
  experience: [
    {
      title: "V Care Hair & Skin Clinic - Treatment Coordinator",
      date: "Feb 2024 – Present",
      location: "Nellore, India",
      description: "Coordinated client appointments and managed treatment schedules, enhancing clinic efficiency and patient satisfaction."
    }
  ],
  education: [
    {
      title: "Bachelor of Science in Physics",
      date: "Graduated: Jan 2022",
      location: "Krishna Chaithanya Degree College",
      description: "GPA: 8.67/10"
    },
    {
      title: "Board of Intermediate Education (MPC)",
      date: "Completed: Jan 2019",
      location: "PRR Junior College",
      description: "CGPA: 8.5/10"
    }
  ]
};