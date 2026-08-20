export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  profileImage?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface About {
  summary: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
  persentage?: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  name: string;
  domain?: string;
  duration?: string;
  description: string;
  technologies: string[];
  keyResponsibilities?: string[];
  link?: string;
  github?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  about: About;
  education: EducationItem[];
  experience: ExperienceItem[];
  skills: Skill[];
  projects: Project[];
  certifications?: Certification[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Hirenkumar Gevariya",
    title: "Software Developer / Full Stack Engineer",
    email: "hiren6165@gmail.com",
    phone: "+91 (973) 877-0470",
    location: "Ahmedabad, India",
    profileImage: "/images/profile.png",
    linkedin: "https://in.linkedin.com/in/hirenkumar-gevariya-5680a88a",
    github: "https://github.com/hiren-gevariya",
    website: "https://hirenkumar-gevariya.vercel.app/",
  },
  about: {
    summary:
      "I am a software developer with a passion for creating innovative solutions. Skilled in full-stack development, with expertise in modern web technologies. Committed to writing clean, maintainable code and delivering high-quality software products.",
  },
  education: [
    {
      degree: "Master of Computer Application",
      institution: "Bangalore University",
      location: "Bangalore, India",
      period: "2010 - 2013",
      description:
        "Relevant coursework: Data Structures, Algorithms, Database Systems, Software Engineering, Operating Systems, Computer Networks, Computer Architecture, Computer Graphics, Computer Security, Machine Learning, Software Project Development, Software Project Management, Software Project Planning, Software Project Implementation, Software Project Monitoring, Software Project Evaluation, Software Project Closure, Software Project Documentation, Software Project Training, Software Project Consulting",
      persentage: "76%",
    },
    {
      degree: "Bachelor of Computer Application",
      institution: "SaurashtraUniversity",
      location: "Rajkot, India",
      period: "2007 - 2010",
      description:
        "Relevant coursework: Data Structures, Algorithms, Database Systems, Software Engineering, Operating Systems, Computer Networks, Computer Architecture, Computer Graphics, Computer Security, Machine Learning, Software Project Development, Software Project Management, Software Project Planning, Software Project Implementation, Software Project Monitoring, Software Project Evaluation, Software Project Closure, Software Project Documentation, Software Project Training, Software Project Consulting",
      persentage: "74%",
    },
    {
      degree: "HSC",
      institution: "Gujarat Higher Secondary School",
      location: "Surat, India",
      period: "2006 - 2007",
      persentage: "56.14%",
    },
  ],
  experience: [
    {
      title: "Sr. Software Engineer",
      company: "Shine Infosoft Tech",
      location: "Ahmedabad, India",
      period: "2023 - Present",
      description: [
        "Led development of ReactJS, NodeJS, MongoDB, ExpressJS, TypeScript, Jest, Webpack",
        "Mentored junior developers and conducted code reviews",
        "Improved application performance through optimization",
        "Collaborated with cross-functional teams to deliver features on time",
        "Team handling of projects and clients with responsibilities of project management, team management, client management, and project development.",
      ],
      technologies: [
        "React",
        "Node.js",
        "NextJs",
        "SQL",
        "ExpressJS",
        "TypeScript",
        "MongoDB",
        "Jest",
        "Webpack",
        "Git",
        "CI/CD",
      ],
    },
    {
      title: "Jr. Software Engineer",
      company: "JarvisBitz Tech",
      location: "Ahmedabad, India",
      period: "2019 - 2023",
      description: [
        "Led development of ReactJS, NodeJS, MongoDB, ExpressJS, TypeScript, Jest, Webpack",
        "Mentored junior developers and conducted code reviews",
        "Improved application performance through optimization",
        "Collaborated with cross-functional teams to deliver features on time",
        "Team handling of projects and clients with responsibilities of project management, team management, client management, and project development.",
      ],
      technologies: [
        "React",
        "Node.js",
        "ExpressJS",
        "SQL",
        "MongoDB",
        "Git",
        "CI/CD",
      ],
    },
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["JavaScript", "TypeScript"],
    },
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Material UI",
        "Bootstrap",
        "Redux",
        "Redux ToolKit",
        "Shad/cn",
        "Framer Motion",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "REST APIs"],
    },
    {
      category: "Databases",
      items: ["MongoDB", "MySQL", "Postgres"],
    },
    {
      category: "Tools & Technologies",
      items: ["Github", "Gitlab", "AWS", "CI/CD", "Jest", "Webpack", "JIRA"],
    },
  ],
  projects: [
    {
      name: "Form Mapping Tool",
      domain: "Insurance Claims Form Mapping Tool",
      duration: "4 months",
      description:
        "Developed an insurance claims form mapping application to streamline the mapping and management of claim form fields and related data workflows.",
      technologies: [
        "ReactJS",
        "TypeScript",
        "GitHub Spec Kit",
        "Playwright (Integration Testing)",
      ],
      keyResponsibilities: [
        "Designed and developed the application from scratch, contributing across the frontend.",
        "Built reusable and responsive UI components using the Harmony Story library.",
        "Integrated REST APIs for application workflows and data management.",
        "Followed spec-driven development practices using GitHub Spec Kit to structure requirements, planning, and implementation.",
        "Developed logical, optimized, maintainable, and scalable code following industry standards and best practices.",
        "Implemented Playwright-based E2E automation to improve quality and regression coverage.",
        "Worked in an Agile/Scrum environment, participating in sprints, reviews, and collaborative development.",
        "Ensured timely delivery of high-quality features through continuous testing and code reviews.",
      ],
    },
    {
      name: "Prosera Agentic AI",
      domain: "Agentic AI Platform",
      description:
        "Prosera Agentic AI is a platform that allows you to create and manage your own AI agents.",
      technologies: [
        "NextJs",
        "Node.js",
        "SQL",
        "ExpressJS",
        "TypeScript",
        "Jest",
        "Webpack",
      ],
      keyResponsibilities: [
        "Developed features for creating and managing AI agents.",
        "Built responsive user interfaces using Next.js, React, and TypeScript.",
        "Integrated REST APIs for agent workflows and data management.",
        "Implemented application logic using Node.js, ExpressJS, and SQL.",
        "Wrote automated tests with Jest and maintained a reliable build process with Webpack.",
      ],
      link: "https://cfg.prosera.io/",
      //github: "https://github.com/prosera/prosera-agentic-ai",
    },
    {
      name: "Kesari Select",
      domain: "Travel and Hotel Booking Platform",
      description:
        "Travel platform with responsive UI and dynamic features for hotel booking and travel management.",
      technologies: ["React", "JavaScript", "SQL", "Material UI", "Laravel"],
      keyResponsibilities: [
        "Developed responsive travel and hotel booking interfaces using React and Material UI.",
        "Implemented dynamic features for hotel search, booking, and travel management workflows.",
        "Integrated backend services and SQL data flows through Laravel APIs.",
        "Improved usability and consistency across customer-facing booking experiences.",
      ],
      link: "https://www.kesariselect.com/",
      //github: "https://github.com/username/hrm-management-system",
    },
    {
      name: "Kesari Inbound",
      domain: "Inbound Travel Platform",
      description:
        "Discover the magic of India - Explore vibrant cultures, breathtaking landscape, and unique experience tailored just for you.",
      technologies: ["React", "JavaScript", "SQL", "Material UI", "Laravel"],
      keyResponsibilities: [
        "Developed responsive interfaces for exploring destinations, cultures, and travel experiences in India.",
        "Built reusable React components with Material UI for consistent page layouts.",
        "Integrated SQL-backed Laravel services for dynamic travel content and workflows.",
        "Collaborated on responsive and accessible user experiences across screen sizes.",
      ],
      link: "https://inbound.kesariselect.com/",
      //github: "https://github.com/username/hrm-management-system",
    },
    {
      name: "E-Commerce Platform",
      domain: "E-Commerce Platform",
      description:
        "E-Commerce Platform is a platform that allows you to create and manage your own e-commerce store.",
      technologies: [
        "React.js",
        "JavaScript",
        "SQL",
        "Elasticsearch",
        "Redux ToolKit",
        "HTML5",
        "CSS3",
      ],
      keyResponsibilities: [
        "Developed storefront and management features for creating and operating e-commerce stores.",
        "Built responsive React interfaces with reusable HTML and CSS components.",
        "Implemented product and store workflows using Redux Toolkit for state management.",
        "Integrated SQL and Elasticsearch services to support structured data and search experiences.",
      ],
      link: "https://example.com",
      //github: "https://github.com/username/ecommerce",
    },
    {
      name: "HRM Management System",
      domain: "Human Resources Management",
      description:
        "HRM Management System is a platform that allows you to create and manage your own HRM system.",
      technologies: [
        "React",
        "JavaScript",
        "SQL",
        "MongoDB",
        "ExpressJS",
        "Material UI",
      ],
      keyResponsibilities: [
        "Developed modules for managing human resources workflows and employee data.",
        "Built responsive interfaces using React and Material UI.",
        "Implemented backend services with ExpressJS and MongoDB.",
        "Integrated SQL-based data workflows and maintained reusable application components.",
      ],
      //link: "https://example.com",
      //github: "https://github.com/username/hrm-management-system",
    },
    {
      name: "Optimize",
      domain: "Hospital and Surgery Management",
      description:
        "Hospital and surgery management system with responsive UI and dynamic features like to manage patients, doctors, appointments, and more.",
      technologies: [
        "React",
        "JavaScript",
        "MySQL",
        "IndexDB",
        "NodeJs",
        "ExpressJS",
        "Redux",
        "HTML5",
        "CSS3",
      ],
      keyResponsibilities: [
        "Developed modules for managing patients, doctors, appointments, and surgery workflows.",
        "Built responsive React interfaces with reusable HTML and CSS components.",
        "Integrated MySQL and IndexedDB data flows for application operations and local persistence.",
        "Implemented state management using Redux and backend services with Node.js and ExpressJS.",
      ],
      //link: "https://example.com",
      //github: "https://github.com/username/hrm-management-system",
    },
    {
      name: "Plates",
      domain: "Merchant and Grocery Management",
      description:
        "Merchant and grocery management system with responsive UI and dynamic features like to manage merchants, products, orders, and more.",
      technologies: [
        "React",
        "JavaScript",
        "MySQL",
        "ExpressJS",
        "NodeJs",
        "HTML5",
        "CSS3",
      ],
      keyResponsibilities: [
        "Developed management workflows for merchants, products, grocery orders, and related operations.",
        "Built responsive React interfaces using reusable HTML and CSS components.",
        "Implemented backend APIs with Node.js and ExpressJS.",
        "Integrated MySQL data flows to support merchant, inventory, and order management.",
      ],
      //link: "https://example.com",
      //github: "https://github.com/username/hrm-management-system",
    },
    {
      name: "Namable",
      domain: "Domain Marketplace",
      description:
        "Domain buying and selling platform with responsive UI and dynamic features like to buy and sell domains.",
      technologies: ["React", "JavaScript", "BootStrap 4", "HTML5", "CSS"],
      keyResponsibilities: [
        "Developed responsive interfaces for buying and selling domain names.",
        "Implemented dynamic domain marketplace features using React and JavaScript.",
        "Built reusable layouts and components with Bootstrap 4, HTML5, and CSS.",
        "Improved the browsing and transaction experience across supported screen sizes.",
      ],
      //link: "https://example.com",
      //github: "https://github.com/username/hrm-management-system",
    },
    {
      name: "CideKick",
      domain: "Manpower and Event Management",
      description:
        "Admin panel for manpower and event management with responsive UI and dynamic features like to manage manpower, events, bookings, and more.",
      technologies: [
        "React",
        "JavaScript",
        "BootStrap 4",
        "HTML5",
        "CSS",
        "Redux",
        "NodeJs",
        "ExpressJS",
        "MySql",
      ],
      keyResponsibilities: [
        "Developed admin workflows for managing manpower, events, bookings, and related operations.",
        "Built responsive React interfaces using Bootstrap, HTML5, and CSS.",
        "Implemented application state management with Redux.",
        "Integrated Node.js, ExpressJS, and MySQL services for operational data management.",
      ],
      //link: "https://example.com",
      //github: "https://github.com/username/hrm-management-system",
    },
  ],
  certifications: [
    // Add your certifications here
    // Example:
    // {
    //   name: "AWS Certified Solutions Architect",
    //   issuer: "Amazon Web Services",
    //   date: "2023",
    //   credentialId: "ABC123",
    //   credentialUrl: "https://example.com/verify/ABC123",
    // },
  ],
};
