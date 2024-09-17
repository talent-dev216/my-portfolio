import Img from '../utils/images'

const navLinks = [
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
    title: "Web Developer",
    icon: Img.web,
  },
  {
    title: "Frontend Developer",
    icon: Img.frontend,
  },
  {
    title: "Backend Developer",
    icon: Img.backend,
  },
  {
    title: "Full Stack Developer",
    icon: Img.fullstack,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: Img.html,
  },
  {
    name: "CSS 3",
    icon: Img.css,
  },
  {
    name: "JavaScript",
    icon: Img.javascript,
  },
  {
    name: "TypeScript",
    icon: Img.typescript,
  },
  {
    name: "SCSS",
    icon: Img.scss,
  },
  {
    name: "Tailwind CSS",
    icon: Img.tailwind,
  },
  {
    name: "Material UI",
    icon: Img.mui,
  },
  {
    name: "Ant Design",
    icon: Img.antdesign,
  },
  {
    name: "Bootstrap",
    icon: Img.bootstrap,
  },
  {
    name: "React",
    icon: Img.reactjs,
  },
  {
    name: "Angular",
    icon: Img.angular,
  },
  {
    name: "Vue",
    icon: Img.vue,
  },
  {
    name: "React Native",
    icon: Img.reactnative,
  },
  {
    name: "Next JS",
    icon: Img.nextjs,
  },
  {
    name: "Redux",
    icon: Img.redux,
  },
  {
    name: "JQuery",
    icon: Img.jquery,
  },
  {
    name: "Formik",
    icon: Img.formik,
  },
  {
    name: "Node JS",
    icon: Img.nodejs,
  },
  {
    name: "Express JS",
    icon: Img.expressjs,
  },
  {
    name: "ASP.NET",
    icon: Img.asp,
  },
  {
    name: "MongoDB",
    icon: Img.mongodb,
  },
  {
    name: "Mongoose",
    icon: Img.mongoose,
  },
  {
    name: "MySQL",
    icon: Img.mysql,
  },
  {
    name: "PostgreSQL",
    icon: Img.postgresql,
  },
  {
    name: "GraphQL",
    icon: Img.graphql,
  },
  {
    name: "RESTful APIs",
    icon: Img.restapi,
  },
  {
    name: "React Testing Library",
    icon: Img.reacttest,
  },
  {
    name: "Jest",
    icon: Img.jest,
  },
  {
    name: "Cypress",
    icon: Img.cypress,
  },
  {
    name: "GitHub",
    icon: Img.github,
  },
];

const tools = [
  {
    name: "VS Code",
    icon: Img.vscode,
  },
  {
    name: "ChatGPT",
    icon: Img.chatgpt,
  },
  {
    name: "Mongodb Compass",
    icon: Img.mongodbcompass,
  },
  {
    name: "Postman",
    icon: Img.postman,
  },
  {
    name: "AWS Lambda",
    icon: Img.lambda,
  },
  {
    name: "AWS EC2",
    icon: Img.ec2,
  },
  {
    name: "AWS S3",
    icon: Img.s3,
  },
  {
    name: "Docker",
    icon: Img.docker,
  },
  {
    name: "Kubernetes",
    icon: Img.kubernetes,
  },
  {
    name: "Jenkins",
    icon: Img.jenkins,
  },
  {
    name: "Git",
    icon: Img.git,
  },
  {
    name: "Jira",
    icon: Img.jira,
  },
];

const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "Nearpod",
    icon: Img.nearpod,
    iconBg: "white",
    date: "October 2021 - Present",
    points: [
      "Led the full-stack development of an Interactive Learning Platform using React, Next.js, Node.js, PostgreSQL, and RESTful APIs, resulting in a 35% increase in student engagement.",
      "Developed a responsive and intuitive user interface with React, SASS, and Tailwind CSS, enhancing user experience and increasing user satisfaction.",
      "Designed and implemented GraphQL and RESTful APIs to streamline data fetching and improve performance, reducing server response times.",
      "Utilized Redux for efficient state management, ensuring seamless data flow and reducing application bugs.",
      "Utilized Docker to containerize the application, ensuring consistent environments across development, testing, and production stages.",
      "Deployed and managed the application on AWS and Kubernetes, ensuring scalability and reliability.",
      "Integrated Jira with CI/CD pipelines in Jenkins, allowing for streamlined issue tracking and improved visibility into deployment processes.",
      "Maintained high code quality by writing unit and integration tests with Jest and Cypress, achieving 95% test coverage and reducing production issues.",
      "Led the migration of the codebase to TypeScript, improving code maintainability.",
      "Implemented SEO best practices to improve the platform's search engine ranking, increase organic traffic.",
      "Led Agile/Scrum ceremonies, including sprint planning, daily stand-ups, and retrospectives, ensuring timely delivery of features and fostering a collaborative team environment.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Headspring",
    icon: Img.headspring,
    iconBg: "white",
    date: "April 2016 - October 2021",
    points: [
      "Led the development of a Smart Inventory Management System by utilizing a modern tech stack, including React, Node.js, Express.js, and MongoDB.",
      "Utilized MUI to create a consistent and user-friendly interface, ensuring a seamless user experience across all devices.",
      "Developed a mobile companion app using React Native, enabling users to manage inventory on-the-go.",
      "Implemented GraphQL to optimize data querying, reducing the need for multiple API calls and improving the system's performance.",
      "Leveraged TypeScript to ensure type safety and code quality across the application.",
      "Implemented comprehensive testing strategies using Jest and Cypress to ensure the reliability and stability of the application.",
      "Mentored junior developers, providing guidance on best practices, code reviews, and problem-solving techniques, which improved overall team performance and skill development.",
      "Managed deployment pipelines and continuous integration/continuous deployment (CI/CD) processes on AWS, ensuring smooth and automated deployments.",
      "Played a key role in Agile/Scrum ceremonies, contributing to sprint planning, daily stand-ups, and retrospectives.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Southwest Airlines",
    icon: Img.southwest,
    iconBg: "white",
    date: "April 2015 - April 2016",
    points: [
      "Integrated back-end services using ASP.NET and RESTful APIs, enabling seamless data exchange between the front-end and server, which improved application performance and reliability.",
      "Designed and managed MySQL databases to support dynamic web applications, ensuring efficient data storage and retrieval, which enhanced the overall user experience.",
      "Contributed to full-stack development by implementing front-end features with AngularJS and back-end functionalities with ASP.NET and MySQL, resulting in a cohesive and robust application architecture.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "Southwest Airlines",
    icon: Img.southwest,
    iconBg: "white",
    date: "June 2011 - April 2015",
    points: [
      "Led the development of responsive web applications using HTML, CSS, AngularJS, and Bootstrap, enhancing user experience across multiple devices and increasing mobile traffic.",
      "Optimized front-end performance by implementing best practices in HTML, CSS, and AngularJS, reducing page load times and improving overall site speed.",
      "Collaborated with designers, back-end developers, and product managers to create seamless user interfaces, ensuring consistent design and functionality across the platform.",
      "Implemented UI/UX enhancements using Bootstrap and AngularJS, resulting in a increase in user engagement and a reduction in bounce rates.",
      "Maintained high code quality by adhering to coding standards and conducting regular code reviews, which led to a 40% decrease in front-end bugs and improved maintainability.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Softway",
    icon: Img.softway,
    iconBg: "white",
    date: "June 2009 - May 2011",
    points: [
      "Built responsive websites using Angular, HTML, CSS, JavaScript, and Bootstrap, making them look good on all devices.",
      "Connected the front-end to back-end services using RESTful APIs, making the app work smoothly.",
      "Improved the look and feel of the user interface with Bootstrap and CSS, making it more user-friendly.",
      "Worked with designers and back-end developers to add new features and fix issues, ensuring everything worked well together.",
      "Followed best coding practices and tested thoroughly, reducing bugs and improving code quality.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Richard proved me wrong.",
    name: "Daniel Ekwevi",
    designation: "CEO",
    company: "Curbco",
    image: Img.daniel,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients success like Richard does.",
    name: "Justin",
    designation: "Client",
    company: "U.S",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Richard optimized our booking app, our traffic increased by 50%. We can't thank them enough!",
    name: "Tom Merritt",
    designation: "CFO",
    company: "Southwest Airlines",
    image: Img.tom,
  },
];

const projects = [
  {
    name: "Portfolio",
    description:
      "My portfolio features a collection of projects that reflect my commitment to delivering top-tier web solutions. I take pride in developing user-friendly and efficient applications.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image:
      Img.portfolio,
    alt: "Portfolio",
    source_code_link: "https://github.com/talent-dev216/my-portfolio",
    live_link: "https://richard-portfolio.web.app/",
  },
  {
    name: "E-Commerce Platform",
    description:
      "A web-based platform that allows users to search, and order products. admin can manage products, orders, reviews, and users. Providing a convenient and efficient solution for people.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
    ],
    image:
      Img.e_commerce,
    alt: "E-Commerce",
    source_code_link: "https://github.com/talet-dev216/e-commerce",
    live_link: "https://github.com/talet-dev216/e-commerce",
  },
  {
    name: "HR Management System",
    description:
      "An essential tool for businesses looking to enhance their HR operations. It automates tasks like payroll, attendance tracking, employee performance reviews, and recruitment.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "RestAPI",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image:
      Img.hrms,
    alt: "HR Management System",

    source_code_link: "https://github.com/talent-dev216/hr-management-system",
    live_link: "https://github.com/talent-dev216/hr-management-system",
  },
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  tools,
};
