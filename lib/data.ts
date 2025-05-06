import talkiePhoke from "/image/projectOne.png";
import mealonWheel from "/image/projectTwo.png";
import educlaas from "/image/educlass.png"
import westYangonTech from "/image/education2.png"
import dirAceLogo from "/image/DAT_Logo.png"
import lomTechLogo from "/image/LOMTECH-01.png"
import knowyourNeighbour from "/image/projectThree.png"
import carSale from "/image/projectFour.png"
import job from "/image/job.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educationData = [
  {
    title: "West Yangon Technological University",
    location: "Yangon, Myanmar",
    description:
      "I ended my journey as an IT student in my third year because I found a full-time job and managed to continue part-time studies at Lithan EduCLaaS.",
    imageUrl: westYangonTech,
    date: "May 2022 - May 2024",
  },
  {
    title: "Lithan EduCLaaS",
    location: "Singapore (Online)",
    description:
      "After one year of bootcamp, I quickly landed a job as a full-stack developer. I'm now studying part-time and working as a backend developer.",
    imageUrl: educlaas,
    date: "June 2023 - Present",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    company: "Dir-Ace Technology",
    location: "Yangon, Myanmar",
    description:
      "I worked as a full-stack for 3 months helping in user registration and token handling",
    imageUrl: dirAceLogo,
    date: "August 2024 - Nov 2024",
  },
  {
    title: "Full-Stack Developer",
    company: "Upwork",
    location: "Remote",
    description:
      "I also worked as a freelance full-stack developer for about 3 months. My stack includes TypeScript, Tailwind and MongoDB. I'm open to full-time opportunities.",
      imageUrl: job,
    date: "Dec 2024 - March 2025",
  },
  {
    title: "Backend Developer",
    company: "Lom-Tech",
    location: "Remote",
    description:
      "I'm now a Backend developer. My stack includes Java, Spring Boot and RestAPI. I'm open to full-time opportunities.",
    imageUrl: lomTechLogo,
    date: "April 2025 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Realtime chat-app application",
    description:
      "I developed this project using the MERN stack. Once logged in, users can chat with other registered users. The project leverages Socket.IO for real-time communication and MongoDB for data storage.",
    tags: ["React", "node.js", "ExpressJS", "MongoDB"],
    imageUrl: talkiePhoke,
    demoUrl: "https://fullstack-realtime-chatapp-mern.onrender.com",
    sourceUrl: "https://github.com/Kaung562/fullstack-realtime-chatapp-MERN",
  },
  {
    title: "Meals on Wheel",
    description:
      "This project involves a team effort with five members, aiming to develop a full-stack application. I've been actively engaged in numerous meetings, honing my collaboration skills along the way. Within the project scope, my primary responsibilities include front-end design, conducting risk analysis, and providing assistance with backend challenges as they arise.",
    tags: ["HTML", "CSS", "Java Script", "Java", "Spring Boot", "MySQL"],
    imageUrl: mealonWheel,
    sourceUrl: "https://github.com/Kaung562/Meal-On-Wheel-GroupProject",
  },
  {
    title: "Know Your Neighbourhood",
    description:
      "This project is an application that enables CRUD (Create, Read, Update, Delete) operations, incorporating registration, authentication, and authorization features along with Social Login API integration. Users are required to register and log in to add store information. Passwords are securely encrypted, and users also have the option to log in using their Facebook accounts.",
    tags: ["ReactJS", "Java","Spring Boot","RESTAPIs", "MySQL", "Social Login API"],
    imageUrl: knowyourNeighbour,
    sourceUrl: "https://github.com/kaungmyatkyaw02/word-analytics",
  },
  {
    title: "Car Sale Portal",
    description:
      "A CRUD app with registration, authentication, and authorization. Users register with encrypted passwords to post car info; admins can view, edit, and delete entries. Data is stored in a MySQL database.",
    tags: ["HTML", "CSS", "JavaScript", "Java","Spring Boot","Spring Security", "MySQL"],
    imageUrl: carSale,
    sourceUrl: "https://github.com/Kaung562/simple-CRUD-store-with-Security-Authentication-And-Authorization",
  },
] as const;




export const skillsData = {
  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Tailwind",
  ],
  backend: [
    "Node.js",
    "Express",
    "Java",
    "Spring Boot",
    "REST API",
    "Canvas API",
    "Python",
    "Docker",
  ],
  database: [
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "MySQL",
  ],
} as const;
