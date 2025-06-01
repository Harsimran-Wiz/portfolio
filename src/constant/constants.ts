import htmlLogo from "../assets/tech_logo/html.png";
import cssLogo from "../assets/tech_logo/css.png";
import sassLogo from "../assets/tech_logo/sass.png";
import javascriptLogo from "../assets/tech_logo/javascript.png";
import reactjsLogo from "../assets/tech_logo/reactjs.png";
import reduxLogo from "../assets/tech_logo/redux.png";
import nextjsLogo from "../assets/tech_logo/nextjs.png";
import tailwindcssLogo from "../assets/tech_logo/tailwindcss.png";
import gsapLogo from "../assets/tech_logo/gsap.png";
import materialuiLogo from "../assets/tech_logo/materialui.png";
import bootstrapLogo from "../assets/tech_logo/bootstrap.png";
import springbootLogo from "../assets/tech_logo/springboot.png";
import nodejsLogo from "../assets/tech_logo/nodejs.png";
import expressjsLogo from "../assets/tech_logo/express.png";
import mysqlLogo from "../assets/tech_logo/mysql.png";
import firebaseLogo from "../assets/tech_logo/firebase.png";
import javaLogo from "../assets/tech_logo/java.png";
import pythonLogo from "../assets/tech_logo/python.png";
import typescriptLogo from "../assets/tech_logo/typescript.png";
import gitLogo from "../assets/tech_logo/git.png";
import githubLogo from "../assets/tech_logo/github.png";
import vscodeLogo from "../assets/tech_logo/vscode.png";
import postmanLogo from "../assets/tech_logo/postman.png";
import mcLogo from "../assets/tech_logo/mc.png";
import figmaLogo from "../assets/tech_logo/figma.png";
import postgreLogo from "../assets/tech_logo/postgre.png";
import mrsptuLogo from "../assets/company_logo/mrsptu_logo.png";

// Experience Section Logo's
import tcsLogo from "../assets/company_logo/tcs_logo.png";

export const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "GSAP", logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Springboot", logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experienceList = [
  {
    id: 0,
    img: tcsLogo,
    role: "Frontend Developer",
    company: "Tata Consultancy Services (TCS)",
    date: "October 2021 - Present",
    desc: [
      "Architected and delivered high-performance enterprise web applications, implementing advanced React ecosystem patterns that significantly enhanced user experience and system reliability while optimizing code maintainability across business-critical platforms.",
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "JAVA",
      "Git",
      "Tailwind CSS",
      "Redux",
      "Azure DevOps",
      "Python",
      "Figma",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: mrsptuLogo,
    school: "Maharaja Ranjit Singh Punjab Technical University",
    date: "Aug 2019 - Aug 2021",
    grade: "9.25 CGPA",
    desc: "I completed my Master’s degree (MCA) in Computer Applications from MRSPTU. During the program, I built a strong foundation in programming, software development, and core computer science concepts. My coursework included subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I also took part in technical workshops and events that enriched my practical skills. This academic journey played a key role in shaping my technical mindset and preparing me for real-world challenges in software development.",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    img: mrsptuLogo,
    school: "Maharaja Ranjit Singh Punjab Technical University",
    date: "July 2016 - July 2019",
    grade: "9.01 CGPA",
    desc: "I earned my Bachelor's degree (BCA) in Computer Applications from MRSPTU. This program introduced me to the fundamentals of computer science, programming, and software development. I studied key subjects such as Programming in C/C++, Data Structures, Database Management Systems, Computer Networks, and Web Technologies. Throughout the course, I worked on academic projects and participated in technical seminars, which helped strengthen my problem-solving and coding abilities. My BCA laid the essential groundwork for my career in software development.",
    degree: "Bachelor of Computer Applications - BCA",
  },
];
