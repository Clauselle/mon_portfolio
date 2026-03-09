import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import project1 from "./assets/projects/photo1.jpg";

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
      require("./assets/projects/audit1.JPG"),
      require("./assets/projects/audit2.JPG"),
      require("./assets/projects/audit3.JPG"),
      require("./assets/projects/audit4.JPG"),
      require("./assets/projects/audit5.JPG"),
    ],
  },
  {
    year: "",
    role: "Promotional Pricing Management",
    description: "Web application for managing promotional prices in supermarkets.",
    technologies: ["React", "Python", "PostgreSQL"],
    images: [
      require("./assets/projects/promo1.JPG"),
      require("./assets/projects/promo2.JPG"),
      require("./assets/projects/promo3.JPG"),
      require("./assets/projects/promo4.JPG"),
      require("./assets/projects/promo5.JPG"),
    ],
  },
  {
    year: "Personal Projects",
    role: "Pharmacy Management",
    description: "Web application for pharmacy management.",
    technologies: ["PHP", "Laravel", "MySQL"],
    images: [
      require("./assets/projects/pharma1.JPG"),
      require("./assets/projects/pharma2.JPG"),
      require("./assets/projects/pharma3.JPG"),
    ],
  },
  {
    year: "",
    role: "WebAlbum - Memoria",
    description: "Web application for organizing and preserving digital memories.",
    technologies: ["React", "TailwindCSS"],
    images: [
      require("./assets/projects/memoria.JPG"),
      require("./assets/projects/memoria2.JPG"),
      require("./assets/projects/memoria3.JPG"),
      require("./assets/projects/memoria4.JPG"),
    ],
  },
  {
    year: "",
    role: "Messaging Interface",
    description: "Design of a messaging interface.",
    technologies: ["HTML", "JavaScript", "TailwindCSS"],
    images: [
      require("./assets/projects/message1.JPG"),
      require("./assets/projects/message2.JPG"),
    ],
  },
  {
    year: "",
    role: "Student Enrollment Management",
    description: `Web application for managing student enrollment.`,
    technologies: ["Node.js", "React", "PostgreSQL"],
    images: [
      require("./assets/projects/ins1.JPG"),
      require("./assets/projects/ins2.JPG"),
    ],
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