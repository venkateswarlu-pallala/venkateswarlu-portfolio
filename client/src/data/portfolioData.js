// --- ASSETS ---
// Import your project images and resume PDF
import portfolioImg from '../assets/images/ecommerce.png';
import restaurantImg from '../assets/images/restaurant.png';
import resumePdf from '../assets/files/PALLALA VENKATESWARLU_FRONTEND_DEVELOPER_RESUME.pdf';

/// --- HEADER DATA ---
export const headerData = {
  name: "Pallala Venkateswarlu",
  title: "Flutter Developer | Frontend Developer",
  description:
    "Passionate Flutter and Frontend Developer with experience building responsive mobile and web applications using Flutter, Dart, React.js, JavaScript, HTML, and CSS. Skilled in converting Figma designs into functional applications, developing reusable components, integrating REST APIs, and creating seamless user experiences across platforms. Currently working as a Frontend Developer Intern at 4SS Software.",
  image: '',
  resumePdf: resumePdf,
};

// --- ABOUT DATA ---
export const aboutData = {
  title: "About Me",
  description:
    "I am a passionate Flutter Developer and Frontend Developer with hands-on experience building responsive and scalable mobile and web applications. My expertise includes Flutter, Dart, React.js, JavaScript, REST API integration, state management, and responsive UI development. Currently, I am working as a Frontend Developer Intern at 4SS Software, where I transform Figma designs into Flutter applications, develop reusable widgets, and optimize application performance. I enjoy solving real-world problems through technology and continuously improving my development skills.",
};

// --- SKILLS DATA ---
export const skillsData = {
  frontend: [
    { name: 'Flutter', iconClass: 'bi-phone-fill', color: '#02569B' },
    { name: 'Dart', iconClass: 'bi-code-slash', color: '#0175C2' },
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
    { name: 'Firebase', iconClass: 'bi-fire', color: '#FFCA28' },
    { name: 'Mongoose', iconClass: 'bi-journal-code', color: '#880000' },
  ],

  tools: [
    { name: 'Git', iconClass: 'bi-git', color: '#F05032' },
    { name: 'GitHub', iconClass: 'bi-github', color: '#df5792ff' },
    { name: 'Postman', iconClass: 'bi-send-fill', color: '#FF6C37' },
    { name: 'Android Studio', iconClass: 'bi-android2', color: '#3DDC84' },
    { name: 'VS Code', iconClass: 'bi-code-square', color: '#007ACC' },
    { name: 'Figma', iconClass: 'bi-pencil-square', color: '#F24E1E' },
    { name: 'Netlify', iconClass: 'bi-gem', color: '#00C7B7' },
  ],
};

// --- PROJECTS DATA ---
export const projectsData = [
  {
    title: "Office Space Booking App",
    image: portfolioImg,
    description:
      "Cross-platform Flutter application for booking office workspaces. Features Firebase Authentication, real-time booking management, reusable widgets, and responsive mobile UI.",
    tags: ["Flutter", "Dart", "Firebase", "REST API"],
    liveLink: "#",
    codeLink: "#",
  },

  {
    title: "Full-Stack E-Commerce Website",
    image: portfolioImg,
    description:
      "A complete MERN stack e-commerce application featuring authentication, product management, shopping cart, and order processing.",
    tags: ["React", "Node.js", "MongoDB", "Context API"],
    liveLink: "#",
    codeLink: "#",
  },

  {
    title: "Restaurant Menu Ordering App",
    image: restaurantImg,
    description:
      "A responsive React application that allows users to browse menus, filter items, and place orders through REST API integration.",
    tags: ["React", "Node.js", "MongoDB", "REST API"],
    liveLink: "#",
    codeLink: "#",
  },
];

// --- EXPERIENCE DATA ---
export const resumeData = {
  experience: [
    {
      title: "Frontend Developer Intern – 4SS Software",
      date: "Nov 2025 – Present",
      location: "Hyderabad, India",
      description:
        "Converted Figma designs into Flutter applications, developed reusable widgets, integrated REST APIs, improved responsiveness, and collaborated with designers and developers to deliver scalable mobile applications."
    },

    {
      title: "Treatment Coordinator – V Care Hair & Skin Clinic",
      date: "Feb 2024 – Oct 2024",
      location: "Nellore, India",
      description:
        "Managed scheduling, improved workflow efficiency, handled customer interactions, and developed strong communication and problem-solving skills."
    }
  ],

  education: [
    {
      title: "Bachelor of Science (Physics)",
      date: "Graduated: June 2022",
      location: "Krishna Chaithanya Degree College",
      description: "GPA: 8.67/10"
    },

    {
      title: "Board of Intermediate Education (MPC)",
      date: "Completed: April 2019",
      location: "PRR Junior College",
      description: "CGPA: 8.5/10"
    }
  ]
};