
// Logo images
import logogradient from "./assets/logo2.png";
import logo from "./assets/logo2.png";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import figma from "./assets/techstack/figma.png";
import canva from "./assets/techstack/canva.png";
import wordpress from "./assets/techstack/wordpress.png";
import elementor from "./assets/techstack/elementor.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpeg";
import projectImage3 from "./assets/projects/project3.png";
import projectImage4 from "./assets/projects/project4.png";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.png";
import projectImage7 from "./assets/projects/project7.avif";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Nahal Binte Imran",
  tagline: "I build things for web",
  img: profile,
  about: `I’m a passionate Frontend Web Developer & Graphic Designer with nearly 2 years of hands-on experience creating responsive, user-friendly websites and visually compelling digital designs. I specialize in "HTML, CSS, JavaScript", and modern libraries like "React", with backend exposure in "Django" and CMS development using "WordPress".

I hold a "Bachelor’s degree in Software Engineering", and have also completed internships in C++ development, giving me a well-rounded foundation in software principles and coding practices.

Beyond coding, I bring a creative edge through my work as a "Graphic Designer", with professional experience designing in "Canva" for branding, social media, and marketing materials. I also design web interfaces in "Figma", ensuring seamless collaboration between design and development.

From building custom websites to crafting complete design systems, I thrive in roles where I can blend creativity with technical skill. I'm eager to contribute to forward-thinking teams where I can grow further as a full-stack developer and digital designer.
`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/nahal-malik-795029266/",
  github: "https://github.com/nahalmalik",
  linktree: "https://linktr.ee/Nahal_Malik?fbclid=PAZXh0bgNhZW0CMTEAAaf7IbCIDbHNIDPaq9uuhCA61xgFCNeyIjdwb_sI_EhMrURjOZxRbzFo1p3NAQ_aem_sJ8wmd_sFgffo18lF8PlFw",
  instagram: "https://www.instagram.com/napiii_16/",
  facebook: "https://www.facebook.com/profile.php?id=100071507889110",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `Deviqo Software Options Pvt Ltd`,
    Location: "Peshawar, Pakistan",
    Type: "Full Time",
    Duration: "2023 - Present",
  },
  {
    Position: "Wordpress Developer",
    Company: `Deviqo Software Options Pvt Ltd`,
    Location: "Peshawar, Pakistan",
    Type: "Full Time",
    Duration: "2023 - Present",
  },
  {
    Position: "Web Developer Intern",
    Company: `YoungDev Pakistan`,
    Location: "Remote",
    Type: "Internship",
    Duration: "2023 - 2024",
  },
  {
    Position: "FrontEnd Web Developer Intern",
    Company: `SUIT Incubation Center (Sarhad University of Science & Information Technology Peshawar)`,
    Location: "Peshawar, Pakistan",
    Type: "Internship",
    Duration: "2022 - 2024",
  },
  {
    Position: "Regional Vice President (KPK)",
    Company: `Artificial Intelligence community of Pakistan`,
    Location: "Khyber Pakhtunkhwa, Pakistan",
    Type: "Community Role",
    Duration: "2023 - 2025",
  },
   {
    Position: "Google Developers Student Club Lead",
    Company: `Google For Developers`,
    Location: "Sarhad University of Science & Information Technology Peshawar",
    Type: "Community Role",
    Duration: "2023 - 2024",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor in Software Engineering",
    Company: "Sarhad University of Science & Information Technology Peshawar",
    Location: "Peshawar, Pakistan",
    Type: "Full Time",
    Duration: "Nov 2021 - Aug 2025",
  },
  {
    Position: "Pre Medical",
    Company: `Concordia College Peshawar`,
    Location: "Peshawar, Pakistan",
    Type: "Full Time",
    Duration: "Sept 2019 - July 2021",
  },
  {
    Position: "Matriculation in Science",
    Company: `Allied School Gulberg Campus Peshawar`,
    Location: "Peshawar, Pakistan",
    Type: "Full Time",
    Duration: "April 2018",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  tailwind: tailwind,
  bootstrap: bootstrap,
  wordpress: wordpress,
  vscode: vscode,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  elementor: elementor,
  canva: canva,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Water & Sanitation Services Peshawar",
    image: projectImage1,
    description: `Developed a web dashboard for Water and Sanitation Services Peshawar, enabling users to register and track complaints, view and pay bills, and download duplicate bills. Includes real-time complaint tracking, secure payments, and an admin panel for efficient service management.`,
    techstack: "HTML/CSS, JavaScript, PHP",
    previewLink: "...",
    githubLink: "https://github.com/nahalmalik/wssc-project",
  },
  {
    title: "TimTim Accessories",
    image: projectImage2,
    description: `Developed a stylish and fully functional eCommerce website for TheTimTim, a women’s fashion brand. The platform supports product browsing, secure checkout, order tracking, and promotional blogging — all optimized for mobile and built with WordPress, WooCommerce, and Elementor for easy content management and scalability.`,
    techstack: "Wordpress, WooCommerce",
    previewLink: "https://thetimtim.com/",
  },
  {
    title: "Projectly (Task Management System)",
    image: projectImage3,
    description: `Developed a task management platform with separate dashboards for Managers, Heads of Departments, and Committee Members. Users can assign, update, delete, and track tasks, communicate in real time, and monitor project progress — all with secure role-based access.`,
    techstack: "React, Django, Tailwind CSS",
    previewLink: "https://google.com",
    githubLink: "https://github.com/nahalmalik/Projectly",
  },
  {
    title: "Zb Consultant",
    image: projectImage4,
    description: `Designed and developed a professional business website for ZB Consultant, an immigration and visa services firm. The site features service detail pages, contact forms, lead capture, and a clean, responsive layout — built using WordPress and Elementor for easy content updates and strong visual presentation.`,
    techstack: "Wordpress, Elementor",
    previewLink: "https://www.zbconsultant.co/",
    githubLink: "https://github.com",
  },
  {
    title: "Laleen Beauty Saloon",
    image: projectImage5,
    description: `Developed a responsive and elegant website for Laleen Beauty Salon to showcase services, client galleries, and salon details. Integrated online appointment booking, WooCommerce for product sales, and custom styling for a modern, luxurious user experience — all built using WordPress and Elementor for easy management.`,
    techstack: "Wordpress, Elementor, WooCommerce",
    previewLink: "https://www.laleenbeautysalon.com/",
    githubLink: "https://github.com",
  },
  {
    title: "Mentor craft ",
    image: projectImage6,
    description: `Built a full-stack e-learning platform as a final year project, combining React and Django for the web and Flutter with Firebase for the mobile app. MentorCraft enables students to browse courses, enroll, track progress, and communicate with instructors. Features include user authentication, video lessons, quizzes, and real-time progress tracking — delivering a seamless learning experience across web and mobile.`,
    techstack: "React, Django, Flutter, Firebase",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
    {
    title: "Graphic Design – Food & Pharma Products",
    image: projectImage7,
    description: `Designed branding and marketing materials for food and medicine products, including social media posts, packaging mockups, and promotional graphics — all created using Canva with a focus on visual clarity and brand alignment.`,
    techstack: "Canva",
    previewLink: "https://postimg.cc/gallery/ZvVzgZR",
    githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "nahalimran2001@gmail.com",
  phone: "+92 331 5822734",
};
