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
  description: string;
  technologies: string[];
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
    profileImage: "/images/profile.jpg", // Add your profile image to public/images/profile.jpg
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
      items: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "REST APIs"],
    },
    {
      category: "Databases",
      items: ["MongoDB", "MySQL"],
    },
    {
      category: "Tools & Technologies",
      items: ["Git", "AWS", "CI/CD", "Jest", "Webpack"],
    },
  ],
  projects: [
    {
      name: "Prosera Agentic AI",
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
      link: "https://cfg.prosera.io/",
      //github: "https://github.com/prosera/prosera-agentic-ai",
    },
    {
      name: "Kesari Select",
      description:
        "Travel platform with responsive UI and dynamic features for hotel booking and travel management.",
      technologies: ["React", "JavaScript", "SQL", "Material UI", "Laravel"],
      link: "https://www.kesariselect.com/",
      //github: "https://github.com/username/hrm-management-system",
    },
    {
      name: "E-Commerce Platform",
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
      link: "https://example.com",
      //github: "https://github.com/username/ecommerce",
    },
    {
      name: "HRM Management System",
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
      //link: "https://example.com",
      //github: "https://github.com/username/hrm-management-system",
    },
    {
      name: "Optimize",
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
      //link: "https://example.com",
      //github: "https://github.com/username/hrm-management-system",
    },
    {
      name: "Plates",
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
      //link: "https://example.com",
      //github: "https://github.com/username/hrm-management-system",
    },
    {
      name: "Namable",
      description:
        "Domain buying and selling platform with responsive UI and dynamic features like to buy and sell domains.",
      technologies: ["React", "JavaScript", "BootStrap 4", "HTML5", "CSS"],
      //link: "https://example.com",
      //github: "https://github.com/username/hrm-management-system",
    },
    {
      name: "CideKick",
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
