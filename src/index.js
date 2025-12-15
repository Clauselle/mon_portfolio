import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import project1 from "./assets/projects/b.jpg";
//import project2 from "./assets/projects/l.jpg";
//import project3 from "./assets/projects/j.jpg";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web application. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL.`;

export const ABOUT_TEXT = `I am a Master's student in Computer Science, specializing in Software Engineering and Databases. Passionate about building high-performance, secure web applications, I have led and contributed to numerous academic and personal projects. Known for my rigor, creativity, and ability to work independently, I thrive in dynamic environments where I can continuously learn and make a meaningful impact.`;

export const EXPERIENCE = [
  {
    year: "2025 | Academic Projects",
    role: "Bank Transfer Monitoring",
    description: `Web application for monitoring bank transactions.`,
    technologies: ["PHP", "Laravel", "MySQL"],
  },
  {
    year: "",
    role: "Crowdfunding Platform",
    description: `Web application for crowdfunding.`,
    technologies: ["Java", "Hibernate", "PostgreSQL"],
  },
  {
    year: "",
    role: "Salary Management",
    description: `Mobile application for salary management.`,
    technologies: ["React Native", "Node.js", "PostgreSQL"],
  },
  {
    year: "2025 | Personal Projects",
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
    address: "Lot IIS 78 DC Bis Anjanahary IIS Antananarivo",
    phone: "+261 34 81 403 70  | +261 32 21 922 36",
    email: "clauselleratovoarisoa@gmail.com",
    in: "linkedin.com/in/clauselle-ratovoarisoa",
};


reportWebVitals();
