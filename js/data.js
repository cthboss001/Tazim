// Portfolio Data - Customize this file to personalize your portfolio
const portfolioData = {
  personal: {
    name: "Tazim Hossen",
    title: "Undergraduate Student, Department of Computer Science and Engineering, Daffodil International University",
    tagline: ["Software Engineer", "Full-Stack Developer", "Problem Solver", "Next.js Enthusiast", "Backend Developer", "Progressive Web App Developer", "Database Architect", "Tech Innovator", "UI/UX Enthusiast"],
    bio: "I'm Tazim Hossen, a CSE student currently doing my BSc. I spend my time actively working on problem solving to improve my skills. Recently, I have also developed a strong passion for full-stack web development, where I architect and build production-ready, scalable web applications (like IntCart) using modern technologies such as Next.js, TypeScript, and Prisma.",
    objective: "Seeking a challenging Junior Software Engineer position where I can apply my technical skills and creativity to develop innovative solutions while contributing to team success and professional growth.",
    email: "contact@tazim.dev",
    phone: "+880 1744782478",
    location: "Dhaka, Bangladesh",
    profileImage: "assets/images/unnamed.png",
    resumeLink: "assets/Tazim_Hossen_Resume.html",
    social: {
      github: "https://github.com/cthboss001",
      linkedin: "https://www.linkedin.com/in/tazim-hossen-857661216/",
      facebook: "https://facebook.com/tazim.hossen.001",
      twitter: "https://x.com/tazim_hossen",
      telegram: "https://t.me/tazimhossen001",
      codeforces: "https://codeforces.com/profile/unbowed_t"
    }
  },

  education: [
    {
      degree: "Bachelor of Science in Computer Science & Engineering",
      institution: "Daffodil International University",
      location: "Dhaka, Bangladesh",
      duration: "2023 - 2027",
      logo: "🎓",
      achievements: [
        "1st Runners-up at Project Showcase ( Data Structure )"
      ]
    },
  ],

  skills: {
    programming: [
      { name: "C", icon: "fa-solid fa-code", level: "Comfortable" },
      { name: "C++", icon: "fa-solid fa-code", level: "Comfortable" },
      { name: "Python", icon: "fa-brands fa-python", level: "Learning" },
      { name: "JavaScript", icon: "fa-brands fa-js", level: "Comfortable" },
      { name: "TypeScript", icon: "fa-solid fa-code", level: "Comfortable" }
    ],
    frontend: [
      { name: "HTML5", icon: "fa-brands fa-html5", level: "Comfortable" },
      { name: "CSS3", icon: "fa-brands fa-css3-alt", level: "Comfortable" },
      { name: "React", icon: "fa-brands fa-react", level: "Comfortable" },
      { name: "Next.js", icon: "fa-brands fa-react", level: "Comfortable" },
      { name: "Tailwind CSS", icon: "fa-brands fa-css3-alt", level: "Comfortable" },
      { name: "PWA", icon: "fa-solid fa-mobile-screen", level: "Intermediate" },
      { name: "Bootstrap", icon: "fa-brands fa-bootstrap", level: "Intermediate" }
    ],
    backend: [
      { name: "Node.js", icon: "fa-brands fa-node-js", level: "Intermediate" },
      { name: "Express.js", icon: "fa-solid fa-server", level: "Learning" },
      { name: "Prisma ORM", icon: "fa-solid fa-database", level: "Comfortable" },
      { name: "NextAuth.js", icon: "fa-solid fa-shield-halved", level: "Intermediate" }
    ],
    database: [
      { name: "PostgreSQL", icon: "fa-solid fa-database", level: "Comfortable" },
      { name: "MySQL", icon: "fa-solid fa-database", level: "Intermediate" },
      { name: "MongoDB", icon: "fa-solid fa-leaf", level: "Learning" }
    ],
    tools: [
      { name: "Git", icon: "fa-brands fa-git-alt", level: "Comfortable" },
      { name: "GitHub", icon: "fa-brands fa-github", level: "Comfortable" },
      { name: "VS Code", icon: "fa-solid fa-code", level: "Comfortable" },
      { name: "Linux", icon: "fa-brands fa-linux", level: "Intermediate" },
      { name: "Postman", icon: "fa-solid fa-paper-plane", level: "Intermediate" },
      { name: "Vercel", icon: "fa-solid fa-rocket", level: "Comfortable" },
      { name: "Cloudinary", icon: "fa-solid fa-cloud-arrow-up", level: "Intermediate" },
      { name: "Resend", icon: "fa-solid fa-envelope-open-text", level: "Intermediate" }
    ],
    soft: [
      { name: "Communication", icon: "fa-solid fa-comments" },
      { name: "Teamwork", icon: "fa-solid fa-users" },
      { name: "Problem Solving", icon: "fa-solid fa-brain" },
      { name: "Time Management", icon: "fa-solid fa-clock" },
      { name: "Adaptability", icon: "fa-solid fa-sync" }
    ]
  },

  projects: [
    {
      title: "IntCart",
      description: "Production-grade e-commerce platform featuring authentication, role-based administration, product management, order processing, reviews & ratings, invoice generation, PWA support, and real-time operational features.",
      image: "assets/images/intcart1.png",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "NextAuth", "Cloudinary", "Resend", "PWA", "RBAC", "Vercel"],
      github: "#",
      docLink: "intcart.html",
      live: "https://www.intcart.shop",
      category: ["fullstack"],
      isFlagship: true
    },
    {
      title: "MovieVault 🎬",
      description: "A high-performance personal movie database and analytics dashboard. Features multi-source data ingestion from Letterboxd & IMDb, smart deduplication, search optimization (Fuse.js), and automated analytics via a stunning glassmorphism UI.",
      image: "assets/images/movievault.png",
      technologies: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Fuse.js", "TMDB API", "Vercel"],
      github: "https://github.com/cthboss001/MovieVault",
      live: "https://movies.tazim.dev",
      category: ["fullstack"]
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website with dark mode, smooth animations, and customizable content structure.",
      image: "assets/images/project4.jpg",
      technologies: ["HTML5", "CSS3", "JavaScript", "Font Awesome"],
      github: "https://github.com/cthboss001/Tazim",
      live: "https://tazim.dev",
      category: ["frontend"]
    },
    {
      title: "AgroMotion",
      description: "Agriculture-focused project developed around data structure concepts. Designed to help farmers manage activities and modernize agricultural workflow. Achieved 1st Runner-up at Project Showcase.",
      image: "assets/images/project1.jpg",
      technologies: ["C++", "Data Structures"],
      github: "#",
      live: "#",
      category: ["fullstack"]
    }
  ],

  experience: [
    {
      role: "IntCart - Production E-commerce Platform",
      company: "Personal Flagship Project",
      duration: "2026",
      location: "Dhaka, Bangladesh",
      type: "Full-Stack Development",
      responsibilities: [
        "Architected and developed a production-ready e-commerce platform using Next.js and Prisma",
        "Implemented secure authentication, Role-Based Access Control (RBAC), and operational features",
        "Built as a Progressive Web App (PWA) with a scalable PostgreSQL database architecture"
      ],
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"]
    },
    {
      role: "Project Showcase — AgroMotion",
      company: "Daffodil International University",
      duration: "2024",
      location: "Dhaka, Bangladesh",
      type: "Participation",
      responsibilities: [
        "Developed AgroMotion — an agriculture-focused project built around data structure concepts",
        "Aimed to help farmers manage activities and modernize agricultural workflow",
        "Achieved 1st Runner-up in Project Showcase"
      ],
      technologies: ["C++", "Data Structures"]
    },
    {
      role: "Competitive Programming",
      company: "Codeforces / Online Judges",
      duration: "2023 - Present",
      location: "Online",
      type: "Competitive Programming",
      responsibilities: [
        "Active on Codeforces with 247 problems solved across 16 contests",
        "Participated as Finalist in TAKE OFF — Fall 2023",
        "Participated as Finalist in UNLOCK THE ALGORITHM — Fall 2024"
      ],
      technologies: ["C++", "Algorithms", "Problem Solving"]
    },
    {
      role: "MovieVault — Full-Stack Development",
      company: "Personal Project",
      duration: "2025",
      location: "Online",
      type: "Personal Project",
      responsibilities: [
        "Engineered a custom-built movie database and analytics dashboard with Next.js 15 (App Router) and TypeScript",
        "Built custom scraper providers that bypass bot-detection to sync data from Letterboxd and IMDb into a unified PostgreSQL database",
        "Implemented a robust data normalization pipeline with smart deduplication for multi-source imports",
        "Designed a dual-role authentication system with cookie-based security for admin routes while keeping the vault public",
        "Created a stunning glassmorphism UI with backdrop blurs, animated cyan glows, and a dedicated stats engine"
      ],
      technologies: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Vercel"]
    },
    {
      role: "Portfolio Development",
      company: "Personal Project",
      duration: "2024 - Present",
      location: "Online",
      type: "Personal Project",
      responsibilities: [
        "Designed and developed a personal portfolio website from scratch",
        "Deployed on GitHub Pages with custom domain tazim.dev",
        "Built with vanilla HTML, CSS, and JavaScript"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "GitHub Pages"]
    }
  ],

  certifications: [
    {
      name: "Project Showcase",
      issuer: "Daffodil International University",
      date: "2024",
      icon: "fa-solid fa-trophy",
      credentialUrl: "#",
      description: "AgroMotion earned 1st Runner-up for an agriculture-focused project built around data structure concepts"
    },
    {
      name: "Competitive Programming",
      issuer: "Codeforces",
      date: "Active",
      icon: "fa-solid fa-code",
      credentialUrl: "https://codeforces.com/profile/unbowed_t",
      description: "Current Rating: 758 · Max Rating: 913 · Solved: 247 · Contests: 16"
    },
    {
      name: "Programming Contests",
      issuer: "University Contests",
      date: "2023 — 2024",
      icon: "fa-solid fa-medal",
      credentialUrl: "#",
      description: "Finalist in TAKE OFF (Fall 2023) and UNLOCK THE ALGORITHM (Fall 2024)",
      links: [
        { label: "TAKE OFF — Fall 2023 Standings", url: "https://toph.co/c/take-off-fall-23-final/standings" },
        { label: "UNLOCK THE ALGORITHM — Fall 2024 Standings", url: "https://toph.co/c/diu-unlock-the-algorithm-fall-24-final/standings" }
      ]
    },
    {
      name: "Public Presence",
      issuer: "Online Platforms",
      date: "",
      icon: "fa-solid fa-globe",
      credentialUrl: "#",
      description: "Selected public profiles and competitive programming presence.",
      links: [
        { label: "YouTube", url: "https://www.youtube.com/@tazimhossen" },
        { label: "Facebook", url: "https://fb.tazim.dev" },
        { label: "ICPC Profile", url: "https://icpc.global/ICPCID/8SKJOAW5IRMQ" }
      ]
    }
  ],

  // Photos are auto-loaded from photo/manifest.json
  // Run update-photos.bat before pushing to update the list
  photos: [],

  // Add your YouTube video IDs here (the part after ?v= in the YouTube URL)
  videos: [
    {
      title: "OOP Project Promo || HuntsMen X BORBAAD | SHAKIB KHAN",
      youtubeId: "gOAfvj5mvtU",
      description: ""
    },
    {
      title: "PROMO VIDEO OF AGRO MOTION BY SHAHEE ALPHAS",
      youtubeId: "R9hftE0bpwo",
      description: ""
    },
    {
      title: "ENG 101 Course Work 1st Semester | Video Resume | Tazim Hossen | Daffodil International University",
      youtubeId: "oaeImOiPldw",
      description: ""
    }
  ]
};
