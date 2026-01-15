import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import project1 from "./assets/projects/photo1.jpg";
//import project2 from "./assets/projects/l.jpg";
//import project3 from "./assets/projects/j.jpg";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web application. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Vue.js, as well as back-end technologies like Node.js, PHP and Python.`;

export const ABOUT_TEXT = `
I am a Software Engineer with a strong background in web development and database systems.
I specialize in designing and building scalable, secure, and high-performance applications.
Through academic and personal projects, I have gained hands-on experience across the full development lifecycle, from system design to deployment.
Detail-oriented and self-driven, I thrive in fast-paced environments where continuous learning, problem-solving, and delivering real business value are key.
`;

export const EXPERIENCE = [
  {
    year: "2025 | Final Year Project",
    role: "Predictive Data Processing Pipeline for Inventory Management",
    description: `Web application designed to predict future inventory levels based on historical data using machine learning algorithms.`,
    technologies: ["Python", "React", "TailwindCSS", "Linear Regression", "LightGBM", "XGBoost"],
    images: [
      require("./assets/projects/predistock2.PNG"),
      require("./assets/projects/predistock1.PNG"),
      require("./assets/projects/predistock5.PNG"),
      require("./assets/projects/predistock3.PNG"),
      require("./assets/projects/predistock4.PNG"),
      require("./assets/projects/predistock6.PNG"),
    ],
  },
  {
    year: "2025 | Academic Projects",
    role: "Bank Transfer Monitoring",
    description: `Web application for monitoring bank transactions.`,
    technologies: ["PHP", "Laravel", "MySQL"],
    images: [
      require("./assets/projects/photo1.jpg"),
      require("./assets/projects/photo2.jpg"),
      require("./assets/projects/photo3.jpg"),
    ],
  },
  {
    year: "",
    role: "Crowdfunding Platform",
    description: `Web application for crowdfunding.`,
    technologies: ["Java", "Hibernate", "PostgreSQL"],
    images: [
      require("./assets/projects/photo1.jpg"),
      require("./assets/projects/photo2.jpg"),
      require("./assets/projects/photo3.jpg"),
    ],
  },
  {
    year: "",
    role: "Salary Management",
    description: `Mobile application for salary management.`,
    technologies: ["React Native", "Node.js", "PostgreSQL"],
  },
  {
    year: "Personal Projects",
    role: "Pharmacy Management",
    description: `Web application for pharmacy management.`,
    technologies: ["PHP", "Laravel", "MySQL"],
  },
  {
    year: "",
    role: "Messaging Interface",
    description: `Design of a messaging interface.`,
    technologies: ["HTML", "JavaScript", "TailwindCSS"],
  },
  {
    year: "",
    role: "Student Enrollment Management",
    description: `Web application for managing student enrollment.`,
    technologies: ["Node.js", "React", "PostgreSQL"],
  },
];

export const PROJECTS = [
  {
    title: "E-commerce Website",
    image: project1,
    description: "Design of an e-commerce website",
    technologies: ["HTML", "TailwindCSS"],
  }
  
];

export const CONTACT = {
    address: "78 DC Bis Anjanahary IIS Antananarivo Madagascar",
    phone: "+261 34 81 403 70  | +261 32 21 922 36",
    email: "clauselleratovoarisoa@gmail.com",
    in: "linkedin.com/in/clauselle-ratovoarisoa",
};


reportWebVitals();
