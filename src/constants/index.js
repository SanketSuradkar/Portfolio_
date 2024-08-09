import { useHref } from "react-router-dom";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  // python,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  // github,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work_Edu",
  },
  {
    id: "contact",
    title: "Contact",
  },
  
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Software Developer",
    icon: backend,
  }, 
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [ 
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  // {
  //   name: "Github",
  //   icon: github,
  // },
];

const experiences = [
  {
    title: "Sharda Dnyanpeeth (convent), Buldana ",
    company_name: "SSC",
    icon: starbucks,
    iconBg: "#383E56",
    date: " 2018 - Dec 2019",
    points: [
      "Completed SSC under the Maharashtra State Board at Sharda Dnyanpeeth (Convent), Buldana.",
      "Achieved a solid academic foundation in core subjects, including mathematics and science.",
      "Engaged in various extracurricular activities, enhancing teamwork and leadership skills",
      "Participated in school events and competitions, contributing to a well-rounded educational experience.",
    ],
  },
  {
    title: "Sant Dnyneshwar college, Chikhli",
    company_name: "HSC",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: " 2020 - Feb 2021",
    points: [
      "Completed HSC (73.50%) in General Science at Sant Dnyaneshwar College, Chikhli.",
      "Gained in-depth knowledge in subjects such as Physics, Chemistry, and Mathematics.",
      "Developed analytical and problem-solving skills through rigorous coursework and practical experiments.",
      "Actively involved in academic and extracurricular activities, fostering a comprehensive learning experience.",
    ],
  },
  {
    title: "K J College of Engineering & Management Research, Pune",
    company_name: "Bachelor of Engineering in Computer Science",
    icon: shopify,
    iconBg: "#383E56",
    date: "Dec 2021 - Present",
    points: [
      "Pursuing a Bachelor of Engineering in Computer Science at KJ College of Engineering & Management Research, Pune.",
      "Gaining advanced knowledge in programming, software development, and computer systems.",
      "Engaged in practical projects and hands-on experiences, enhancing problem-solving and technical skills.",
      "Actively participating in college events and technical activities, contributing to a well-rounded engineering education.",
    ],
  },
  {
    title: "Web Developmrnt Intern",
    company_name: "OctaNet Services Pvt Ltd ",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Dec 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Movies_recommendation",
    description:
      "A Django-based web app that provides personalized movie suggestions based on users' preferences, ratings, and viewing history. Perfect for discovering your next favorite film!.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/SanketSuradkar/ML_project_Movies_recommendation",
    // live_link: "https://dall-e-ai-img-gen.vercel.app/",
  },
  {
    name: "Face Detection",
    description:
      "A powerful Python-based tool that performs real-time face detection using advanced algorithms, accurately identifying and tracking human faces in both images and video streams.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "CV2",
        color: "green-text-gradient",
      },
      {
        name: "Tkaiter",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/SanketSuradkar/AI-Projects/blob/main/Face_Detection/",
    // live_link: "https://dall-e-ai-img-gen.vercel.app/",
  },
  {
    name: "Website",
    description:
      "A powerful HTML, CSS, and JavaScript-based static website that delivers fast, responsive, and visually appealing content, providing users with an engaging and seamless browsing experience.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/SanketSuradkar/Sanket_SS-/",
    live_link: "https://sanketss.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
