// Portfolio Data - Customize this file to personalize your portfolio
const portfolioData = {
  personal: {
    name: "Tazim Hossen",
    title: "Undergraduate Student, Department of Computer Science and Engineering, Daffodil International University",
    tagline: ["Software Engineer", "Problem Solver"],
    bio: "I'm Tazim Hossen, a CSE student currently doing my BSc. I spend my time actively working on problem solving to improve my skills.",
    objective: "Seeking a challenging Junior Software Engineer position where I can apply my technical skills and creativity to develop innovative solutions while contributing to team success and professional growth.",
    email: "tazimhossen001@gmail.com",
    phone: "+880 1744782478",
    location: "Dhaka, Bangladesh",
    dob: "January 1, 2000",
    profileImage: "https://lh3.googleusercontent.com/sitesv/AAzXCkeDUftb_KZYZOBcZ1JDmDHXHy9OVkuq7rdMsPQNaXn0JJcc80pLihzFSfTTevyoMdHdXc4Ymq8O4ZpA5tUXYu1riEOw95BbeF1DGBEW1-8gHbrSoG7FiNLAXUGP3_fimkHVRPr8haE1c2cXKIg6DvPdfZwQJAVfakT1exo8Xg6g8KRrW0ZkNoyKXs8MdNIAzo0ZXpCdBpredUpk6yBxrCM8fN-DuWWg52u8uxo=w1280",
    resumeLink: "#",
    social: {
      github: "https://github.com/cthboss001",
      linkedin: "https://www.linkedin.com/in/tazim-hossen-857661216/",
      facebook: "https://facebook.com/tazim.hossen.001",
      twitter: "https://x.com/tazim_hossen"
    }
  },

  education: [
    {
      degree: "Bachelor of Science in Computer Science & Engineering",
      institution: "Daffodil International University",
      location: "Dhaka, Bangladesh",
      duration: "2023 - 2027",
      cgpa: "3.00 out of 4.00",
      logo: "🎓",
      achievements: [
        "Published research paper on Machine Learning",
        "1st Runners-up at Project Showcase ( Data Structure )"
      ]
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Savar Model College",
      location: "Dhaka, Bangladesh",
      duration: "2019 - 2021",
      group: "Science",
      gpa: "4.92 out of 5.00",
      board: "Dhaka Board",
      logo: "📚",
      achievements: []
    }
  ],

  skills: {
    programming: [
      { name: "C", icon: "fa-solid fa-code", level: 60 },
      { name: "C++", icon: "fa-solid fa-code", level: 70 },
      { name: "Java", icon: "fa-brands fa-java", level: 40 },
      { name: "Python", icon: "fa-brands fa-python", level: 45 },
      { name: "JavaScript", icon: "fa-brands fa-js", level: 60 },
      { name: "TypeScript", icon: "fa-solid fa-code", level: 65 }
    ],
    frontend: [
      { name: "HTML5", icon: "fa-brands fa-html5", level: 95 },
      { name: "CSS3", icon: "fa-brands fa-css3-alt", level: 90 },
      { name: "Bootstrap", icon: "fa-brands fa-bootstrap", level: 85 },
      { name: "Tailwind CSS", icon: "fa-solid fa-wind", level: 80 },
      { name: "React", icon: "fa-brands fa-react", level: 85 },
      { name: "Next.js", icon: "fa-solid fa-forward", level: 75 }
    ],
    backend: [
      { name: "Node.js", icon: "fa-brands fa-node-js", level: 85 },
      { name: "Express.js", icon: "fa-solid fa-server", level: 80 },
      { name: "Django", icon: "fa-solid fa-server", level: 70 },
      { name: "Spring Boot", icon: "fa-brands fa-java", level: 65 }
    ],
    database: [
      { name: "MySQL", icon: "fa-solid fa-database", level: 80 },
      { name: "PostgreSQL", icon: "fa-solid fa-database", level: 75 },
      { name: "MongoDB", icon: "fa-solid fa-leaf", level: 85 }
    ],
    tools: [
      { name: "Git", icon: "fa-brands fa-git-alt", level: 90 },
      { name: "GitHub", icon: "fa-brands fa-github", level: 90 },
      { name: "VS Code", icon: "fa-solid fa-code", level: 95 },
      { name: "Postman", icon: "fa-solid fa-paper-plane", level: 85 },
      { name: "Docker", icon: "fa-brands fa-docker", level: 70 },
      { name: "Linux", icon: "fa-brands fa-linux", level: 80 }
    ],
    soft: [
      { name: "Communication", icon: "fa-solid fa-comments", level: 85 },
      { name: "Teamwork", icon: "fa-solid fa-users", level: 90 },
      { name: "Problem Solving", icon: "fa-solid fa-brain", level: 88 },
      { name: "Time Management", icon: "fa-solid fa-clock", level: 85 },
      { name: "Adaptability", icon: "fa-solid fa-sync", level: 90 }
    ]
  },

  projects: [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration.",
      image: "assets/images/project1.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Stripe"],
      github: "https://github.com/cthboss001/ecommerce",
      live: "#",
      category: ["frontend", "backend", "fullstack"]
    },
    {
      title: "Chat Application",
      description: "Real-time chat application inspired by Discord with channels, direct messaging, file sharing, and user presence indicators.",
      image: "assets/images/project2.jpg",
      technologies: ["React", "Socket.io", "Node.js", "PostgreSQL", "Redis"],
      github: "https://github.com/cthboss001/chat-app",
      live: "#",
      category: ["frontend", "backend", "fullstack"]
    },
    {
      title: "Task Management System",
      description: "Collaborative task management tool with drag-and-drop interface, team collaboration features, and project tracking.",
      image: "assets/images/project3.jpg",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
      github: "https://github.com/cthboss001/task-manager",
      live: "#",
      category: ["frontend", "fullstack"]
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website with dark mode, smooth animations, and customizable content structure.",
      image: "assets/images/project4.jpg",
      technologies: ["HTML5", "CSS3", "JavaScript", "Font Awesome"],
      github: "https://github.com/cthboss001/Tazim",
      live: "https://cthboss001.github.io/Tazim/",
      category: ["frontend"]
    }
  ],

  experience: [
    {
      role: "Software Engineering Intern",
      company: "Tech Company XYZ",
      duration: "Jun 2023 - Aug 2023",
      location: "Dhaka, Bangladesh",
      type: "Internship",
      responsibilities: [
        "Developed and maintained web applications using React and Node.js",
        "Collaborated with senior developers on feature implementation",
        "Participated in code reviews and agile ceremonies",
        "Fixed bugs and improved application performance"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Git"]
    },
    {
      role: "Freelance Web Developer",
      company: "Self-Employed",
      duration: "Jan 2023 - Present",
      location: "Remote",
      type: "Freelance",
      responsibilities: [
        "Built custom websites for small businesses and startups",
        "Implemented responsive designs and optimized for performance",
        "Managed client communications and project timelines",
        "Provided ongoing maintenance and support"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "WordPress"]
    },
    {
      role: "Student Web Developer",
      company: "University IT Department",
      duration: "Sep 2021 - May 2022",
      location: "Dhaka, Bangladesh",
      type: "Part-time",
      responsibilities: [
        "Maintained university department websites",
        "Created landing pages for university events",
        "Assisted in database management tasks",
        "Provided technical support to faculty"
      ],
      technologies: ["PHP", "MySQL", "Bootstrap", "jQuery"]
    }
  ],

  certifications: [
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2023",
      credentialUrl: "https://freecodecamp.org/certification",
      icon: "fa-solid fa-certificate"
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2023",
      credentialUrl: "https://freecodecamp.org/certification",
      icon: "fa-solid fa-certificate"
    },
    {
      name: "Complete Web Development Course",
      issuer: "Udemy",
      date: "2022",
      credentialUrl: "https://udemy.com/certificate",
      icon: "fa-solid fa-award"
    },
    {
      name: "Git & GitHub Essentials",
      issuer: "Coursera",
      date: "2022",
      credentialUrl: "https://coursera.org/verify",
      icon: "fa-solid fa-certificate"
    }
  ],

  achievements: [
    {
      title: "Codeforces Rating",
      description: "Pupil rank with 1200+ rating",
      icon: "fa-solid fa-trophy",
      color: "cyan"
    },
    {
      title: "LeetCode Problems",
      description: "Solved 200+ algorithmic problems",
      icon: "fa-solid fa-code",
      color: "green"
    },
    {
      title: "Hackathon Winner",
      description: "1st place in University Hackathon 2023",
      icon: "fa-solid fa-medal",
      color: "cyan"
    },
    {
      title: "Dean's List",
      description: "Academic excellence for 3 semesters",
      icon: "fa-solid fa-star",
      color: "green"
    },
    {
      title: "Open Source",
      description: "10+ contributions to open source projects",
      icon: "fa-brands fa-github",
      color: "cyan"
    },
    {
      title: "University Programming Contest",
      description: "Top 10 finish in inter-university contest",
      icon: "fa-solid fa-trophy",
      color: "green"
    }
  ]
};
