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
    car,
    moneymaven,
    ptpetsupply,
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
    // Color: #09A7CC; 400 pt Poppins font
    {
      title: "Projects Completed",
      icon: totalprojects,
    },
    // Color: #09A7CC; 350 pt Poppins font
    {
      title: "Years of Experience",
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
      name: "PT Pet Supply",
      description:
        "Static site developed with Astro for the small business PT Pet Supply. A modern, fast, and accessible pet supply store website built with Astro and React, featuring a smooth user experience, interactive UI components, and optimized performance.",
      tags: [
        {
          name: "astro",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "typescript",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "orange-text-gradient",
        },
      ],
      image: ptpetsupply,
      source_code_link: "https://github.com/yolandaptpet/pt-pet-supply",
      hosted_app_link: "https://ptpet.net",
    },
    {
      name: "MoneyMaven",
      description:
        "Full-stack financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manages their finances.",
      tags: [
        {
          name: "next.js14",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "appwrite",
          color: "pink-text-gradient",
        },
        {
          name: "plaid",
          color: "orange-text-gradient",
        },
      ],
      image: moneymaven,
      source_code_link: "https://github.com/justindegaetano/banking-manager",
      hosted_app_link: "https://money-maven.vercel.app/",
    },
    {
      name: "Car Showcase",
      description:
        "Built with Next.js for server-side rendering, the Car Showcase app displays various car types with detailed information in a sleek design, featuring advanced filtering and pagination for a convenient user experience.",
      tags: [
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "rapid-api",
          color: "orange-text-gradient",
        },
      ],
      image: car,
      source_code_link: "https://github.com/justindegaetano/next13-car-showcase",
      hosted_app_link: "https://justin-car-showcase.vercel.app/",
    },
    {
      name: "T-Shirt Designer",
      description:
        "Full-stack AI-powered 3D web application allowing users to create a T-shirt by uploading their own graphic designs or customizing one with scratch by using OpenAI's DALL-E image generation.",
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
        "Full-Stack AI-powered web application allowing users to generate incredible images using OpenAI's DALL-E, contribute them in a post to a community showcase, and search for other contributions.",
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
        "Front-end SPA mini-project (a static site offering only visual user interactions) used to familiarize myself and enhance my personal understanding of NextJS 13 and Framer Motion. ",
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