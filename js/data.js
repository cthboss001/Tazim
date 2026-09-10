// Portfolio Data - Customize this file to personalize your portfolio
const portfolioData = {
  personal: {
    name: "Tazim Hossen",
    title: "Computer Science Undergraduate, Daffodil International University",
    tagline: ["Problem Solver", "Full-Stack Development"],
    heroDescription: "I build full-stack, backend, and real-time systems.",
    bio: "I'm Tazim Hossen, a computer science undergraduate at Daffodil International University. I build full-stack and real-time systems: a private messaging platform with web and native Android clients that my friends and I use every day, an e-commerce platform running my own business, and a Windows desktop application with 15 releases shipped.",
    objective: "Most of what I know I learned by building things and then having to keep them working — ordering messages correctly when a client reconnects, getting WebRTC calls to connect on mobile carrier networks, and keeping a checkout from overselling under concurrent orders.",
    email: "contact@tazim.dev",
    phone: "",
    location: "Dhaka, Bangladesh",
    profileImage: "assets/images/unnamed.png",
    resumeLink: "assets/Tazim_Hossen_Resume.html",
    social: {
      github: "https://github.com/cthboss001",
      linkedin: "https://www.linkedin.com/in/tazimhossen/",
      facebook: "https://fb.tazim.dev",
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

  // Only technologies actually used in the projects below. No self-rated levels:
  // "Comfortable" and "Learning" are unverifiable and invite doubt about the rest.
  skills: {
    programming: [
      { name: "TypeScript", icon: "fa-solid fa-code" },
      { name: "JavaScript", icon: "fa-brands fa-js" },
      { name: "Kotlin", icon: "fa-solid fa-code" },
      { name: "C++", icon: "fa-solid fa-code" },
      { name: "C", icon: "fa-solid fa-code" },
      { name: "Python", icon: "fa-brands fa-python" }
    ],
    frontend: [
      { name: "Next.js", icon: "fa-brands fa-react" },
      { name: "React", icon: "fa-brands fa-react" },
      { name: "Tailwind CSS", icon: "fa-brands fa-css3-alt" },
      { name: "Zustand", icon: "fa-solid fa-layer-group" },
      { name: "PWA", icon: "fa-solid fa-mobile-screen" }
    ],
    mobile: [
      { name: "Jetpack Compose", icon: "fa-brands fa-android" },
      { name: "Hilt", icon: "fa-solid fa-diagram-project" },
      { name: "Coroutines & Flow", icon: "fa-solid fa-arrows-spin" },
      { name: "Retrofit", icon: "fa-solid fa-plug" },
      { name: "FCM", icon: "fa-solid fa-fire" }
    ],
    backend: [
      { name: "NestJS", icon: "fa-solid fa-server" },
      { name: "Node.js", icon: "fa-brands fa-node-js" },
      { name: "Socket.IO", icon: "fa-solid fa-plug" },
      { name: "WebRTC", icon: "fa-solid fa-video" },
      { name: "Prisma", icon: "fa-solid fa-database" },
      { name: "JWT", icon: "fa-solid fa-key" },
      { name: "Electron", icon: "fa-solid fa-desktop" }
    ],
    database: [
      { name: "PostgreSQL", icon: "fa-solid fa-database" },
      { name: "SQLite", icon: "fa-solid fa-database" },
      { name: "MySQL", icon: "fa-solid fa-database" },
      { name: "Supabase", icon: "fa-solid fa-bolt" }
    ],
    tools: [
      { name: "Vercel", icon: "fa-solid fa-rocket" },
      { name: "Fly.io", icon: "fa-solid fa-plane" },
      { name: "Cloudflare R2", icon: "fa-solid fa-cloud" },
      { name: "ffmpeg", icon: "fa-solid fa-film" },
      { name: "electron-builder", icon: "fa-solid fa-box-open" },
      { name: "Git", icon: "fa-brands fa-git-alt" },
      { name: "Linux", icon: "fa-brands fa-linux" }
    ]
  },

  projects: [
    {
      title: "Thunder ⚡",
      description: "A private, invite-only real-time messaging platform built end-to-end — NestJS REST + Socket.IO API, a Next.js web client, and a native Kotlin/Jetpack Compose Android app sharing the same backend contract. Includes WebRTC 1-on-1 calls with Cloudflare TURN, SFU-powered group calls, FCM push, Neon Postgres, and Cloudflare R2 storage. Features DMs, group chats, voice notes (ffmpeg-transcoded for iOS), read receipts, reactions, and self-destructing messages — all at zero hosting cost.",
      image: "assets/images/thunder-ss1.png",
      technologies: ["NestJS", "Socket.IO", "Next.js", "TypeScript", "Kotlin", "Jetpack Compose", "WebRTC", "FCM", "PostgreSQL", "Prisma", "Cloudflare R2", "Fly.io"],
      docLink: "thunder.html",
      live: "https://www.thunderchat.tech/",
      category: ["fullstack", "mobile"],
      isFlagship: true
    },
    {
      title: "IntCart",
      description: "E-commerce platform featuring authentication, role-based administration, product management, order processing, reviews & ratings, invoice generation, PWA support, and real-time operational features.",
      image: "assets/images/intcart1.png",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "NextAuth", "Cloudinary", "Resend", "PWA", "RBAC", "Vercel"],
      docLink: "intcart.html",
      live: "https://www.intcart.shop",
      category: ["fullstack"],
      isFlagship: false
    },
    {
      title: "RetinaRest",
      description: "Windows desktop application implementing the 20-20-20 eye health rule. Features a finite state machine timer engine with crash recovery, full-screen break overlay, eye health dashboard with weekly analytics, Google OAuth + guest mode, and seamless auto-updating with live progress UI. 15 releases shipped on GitHub.",
      image: "assets/images/retinarest-timer.png",
      technologies: ["Electron", "React", "TypeScript", "SQLite", "Prisma", "Supabase", "Zustand", "Recharts", "electron-builder"],
      docLink: "retinarest.html",
      category: ["desktop", "fullstack"],
      isFlagship: false,
      downloadLabel: "Product Page"
    },
    {
      title: "MovieVault 🎬",
      description: "A high-performance personal movie database and analytics dashboard. Features multi-source data ingestion from Letterboxd & IMDb, smart deduplication, search optimization (Fuse.js), and automated analytics via a stunning glassmorphism UI.",
      image: "assets/images/movievault.png",
      technologies: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Fuse.js", "TMDB API", "Vercel"],
      github: "https://github.com/cthboss001/MovieVault",
      live: "https://movies.tazim.dev",
      category: ["fullstack"]
    }
  ],


  // Activities only — Thunder, IntCart, RetinaRest and MovieVault each have a
  // project card above, so repeating them here was the same content twice.
  experience: [
    {
      role: "Competitive Programming",
      company: "Codeforces / Online Judges",
      duration: "2023 - Present",
      location: "Online",
      type: "Competitive Programming",
      responsibilities: [
        "247 problems solved across 16 rated contests on Codeforces",
        "Finalist, TAKE OFF (Fall 2023)",
        "Finalist, UNLOCK THE ALGORITHM (Fall 2024)"
      ],
      technologies: ["C++", "Algorithms", "Data Structures"]
    },
    {
      role: "Project Showcase - AgroMotion",
      company: "Daffodil International University",
      duration: "2024",
      location: "Dhaka, Bangladesh",
      type: "Participation",
      responsibilities: [
        "Built AgroMotion, an agriculture-focused project centred on data structure concepts",
        "1st Runner-up in the departmental Project Showcase"
      ],
      technologies: ["C++", "Data Structures"]
    }
  ],

  certifications: [
    {
      name: "Project Showcase",
      issuer: "Daffodil International University",
      date: "2024",
      icon: "fa-solid fa-trophy",
      credentialUrl: "#",
      description: "1st Runner-up for AgroMotion, an agriculture project built around data structure concepts"
    },
    {
      name: "Competitive Programming",
      issuer: "Codeforces",
      date: "Active",
      icon: "fa-solid fa-code",
      credentialUrl: "https://codeforces.com/profile/unbowed_t",
      description: "247 problems solved across 16 rated contests"
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


};
