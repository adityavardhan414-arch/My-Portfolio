/**
 * portfolioData.js
 * ------------------------------------------------------------
 * SINGLE SOURCE OF TRUTH FOR THE ENTIRE PORTFOLIO
 * ------------------------------------------------------------
 * Edit the values below to personalize the site.
 * Every component reads from this file — you do NOT need to
 * touch any component code to update your content.
 * ------------------------------------------------------------
 */

const portfolioData = {
  // ---------------------------------------------------------
  // PERSONAL DETAILS
  // ---------------------------------------------------------
  personal: {
    name: "Aditya Dunna",
    role: "",
    shortDescription: "Enthusiastic B.Tech graduate with experience in IT support, Salesforce, Python, React, HTML, CSS, JavaScript, SQL, and REST APIs. Strong analytical and problem-solving skills with a passion for software development, teamwork, and continuous learning.",
    email: "adityavardhan414@gmail.com",
    phone: "6300760749",
    location: "Visakhapatnam",
    profileImage: "https://drive.google.com/file/d/1Gmi8jBEhQTqParDtmzjUWd_uszNZVXOt/view?usp=sharing",
    resumeLink: "{{RESUME_LINK}}",
  },

  // ---------------------------------------------------------
  // SOCIAL LINKS
  // ---------------------------------------------------------
  socials: {
    linkedin: "https://www.linkedin.com/in/aditya-vardhan-a872642a2/",
    github: "https://github.com/adityavardhan414-arch",
  },

  // ---------------------------------------------------------
  // ABOUT SECTION
  // ---------------------------------------------------------
  about: {
    description: "I am a B.Tech graduate with experience in IT support, Salesforce administration, REST API integration, and full-stack web development. I have worked as an Assistant System Engineer at TCS, where I gained hands-on experience in system administration, technical support, and Salesforce projects. I am a quick learner with strong problem-solving skills, passionate about building efficient solutions and continuously improving my technical expertise. I am seeking opportunities where I can contribute, learn, and grow as a software professional.",
  },

  // ---------------------------------------------------------
  // SKILLS
  // ---------------------------------------------------------
  skills: {
    frontend: [
      { name: "HTML5", icon: "bi-filetype-html" },
      { name: "CSS3", icon: "bi-filetype-css" },
      { name: "JavaScript", icon: "bi-filetype-js" },
      { name: "React.js", icon: "bi-code-slash" },
      { name: "Bootstrap", icon: "bi-bootstrap" },
      { name: "Tailwind CSS", icon: "bi-palette" },
    ],
    languages: [
      { name: "JavaScript", icon: "bi-filetype-js" },
      { name: "Python", icon: "bi-filetype-py" }
    ],
    tools: [
      { name: "GitHub", icon: "bi-git" },
      { name: "VS Code", icon: "bi-window-stack" },
      { name: "Postman", icon: "bi-send" },
    ],
    backend: [
      { name: "REST APIs", icon: "bi-cloud-arrow-up" }
    ],
  },

  // ---------------------------------------------------------
  // PROJECTS
  // Add or remove objects from this array to manage projects.
  // ---------------------------------------------------------
  projects: [
    {
      id: 1,
      name: "Habit-Tracker",
      image: "https://www.archerandolive.com/cdn/shop/articles/20220116_090608-01.jpg?v=1655316322",
      description: "Tracks Daily ",
      technologies: ["React", "Tailwind", "JavaScript"],
      githubLink: "https://github.com/adityavardhan414-arch/Habit-Tracker",
      liveLink: "https://habit-tracker-iqfc.onrender.com/",
    },
    {
      id: 2,
      name: "Salesforce Integration by REST API Method",
      image: "https://www.zs.com/about/partnerships/media_16104506a116f8c99871029831f23e3cf572a1964.jpg?width=1920&format=jpg&optimize=medium",
      description: "Developed integration between two salesforce environments using REST API",
      technologies: ["salesforce", "Json", "API", "Postman"],
      githubLink: "{{PROJECT_2_GITHUB_LINK}}",
      liveLink: "{{PROJECT_2_LIVE_LINK}}",
    },
    {
      id: 3,
      name: "My portfolio",
      image: "https://i.pinimg.com/474x/38/ea/7d/38ea7d56cfe79b879b3541cead18cbd4.jpg",
      description: "Developed a responsive personal portfolio website using React.js",
      technologies: ["JavaScript", "React"],
      githubLink: "{{PROJECT_3_GITHUB_LINK}}",
      liveLink: "{{PROJECT_3_LIVE_LINK}}",
    },
  ],

  // ---------------------------------------------------------
  // EDUCATION
  // Add or remove objects from this array to manage entries.
  // ---------------------------------------------------------
  education: [
    {
      id: 1,
      college: "Miracle Educational Society Group Of Institutions",
      degree: "Btech",
      cgpa: "7.22",
      duration: "4years",
    },
  ],

  // ---------------------------------------------------------
  // CERTIFICATIONS
  // Add or remove objects from this array to manage entries.
  // ---------------------------------------------------------
  certifications: [
    {
      id: 1,
      name: "AWS Certified Cloud Practitioner CLF-C02 ",
      platform: "Udemy",
      date: "2025",
    },
    {
      id: 2,
      name: "Salesforce Admin and Developer",
      platform: "TCS",
      date: "2022",
    },
    {
      id: 3,
      name: "JIRA",
      platform: "Udemy",
      date: "2023",
    },
  ],
};

export default portfolioData;
