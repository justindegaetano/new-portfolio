import {
    backend,
    web,
    totalprojects,
    yearsofexperience,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    nextjs,
    svelte,
    tailwind,
    nodejs,
    mongodb,
    git,
    threejs,
    careerfoundry,
    dalle,
    shirt,
    metaversus,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Projects Completed",
      icon: totalprojects,
    },
    {
      title: "Year of Experience",
      icon: yearsofexperience,
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
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "Svelte",
      icon: svelte,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
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
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Full-Stack Web Development Bootcamp",
      company_name: "Careerfoundry.com",
      icon: careerfoundry,
      iconBg: "#F4F4F4",
      date: "June 2022 - May 2023",
      points: [
        "Completed a comprehensive web development program, gaining hands-on experience and proficiency in HTML, CSS, JavaScript, and various frameworks.",
        "Acquired practical skills in building responsive, user-centric websites and web applications through real-world projects and mentorship.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "T-Shirt Designer",
      description:
        "Full-stack AI-powered 3D web application allowing users to upload their own graphic design or customize one from scratch using OpenAI's DALL-E.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "express",
          color: "orange-text-gradient",
        },
      ],
      image: shirt,
      source_code_link: "https://github.com/justindegaetano/shirt-designer/",
      hosted_app_link: "https://justin-shirt-designer.netlify.app/",
    },
    {
      name: "DALL-E Clone",
      description:
        "Full-Stack AI-powered web application allowing users to generate images using OpenAI's DALL-E, and share them with the community.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "orange-text-gradient",
        },
      ],
      image: dalle,
      source_code_link: "https://github.com/justindegaetano/dalle-clone/",
      hosted_app_link: "https://justin-dalle-clone.netlify.app/",
    },
    {
      name: "Metaversus",
      description:
        "Front-end SPA mini-project used to familiarize and enhance my personal understanding of NextJS 13 and Framer Motion.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "framermotion",
          color: "pink-text-gradient",
        },
      ],
      image: metaversus,
      source_code_link: "https://github.com/justindegaetano/metaversus/",
      hosted_app_link: "https://justin-metaversus.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, projects };