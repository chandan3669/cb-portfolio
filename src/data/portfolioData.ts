export interface ProjectItem {
  id: string
  title: string
  repositoryName: string
  description: string
  category: 'Cyber-Security' | 'AI & ML' | 'Web Development' | 'Systems & Hardware'
  languages: string[]
  githubUrl: string
  stars?: number
  forks?: number
  isFeatured?: boolean
  metrics?: { label: string; value: string }[]
}

export interface SkillCategory {
  title: string
  items: string[]
  iconName?: string
}

export const isSafeUrl = (url: string): boolean => {
  if (!url) return false
  const lower = url.trim().toLowerCase()
  if (lower.startsWith('javascript:') || lower.startsWith('data:') || lower.startsWith('vbscript:')) {
    return false
  }
  return lower.startsWith('http://') || lower.startsWith('https://') || lower.startsWith('mailto:') || lower.startsWith('/') || lower.startsWith('#')
}

export const PROFILE_DATA = {
  name: "Chandan Kumar Barman",
  handle: "chandan3669",
  email: "cb8583646@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/chandan-barman-cybersecurity/",
  githubUrl: "https://github.com/chandan3669",
  resumeUrl: "/ckb.Resume.pdf",
  resumeFileName: "ckb.Resume.pdf",
  location: "Bhubaneswar, India",
  role: "Cybersecurity & Machine Learning Engineer",
  title: "Cyber-Security // AI & ML // Web Development",
  headline: "Cybersecurity Researcher, AI/ML Specialist & Web Developer",
  bio: "Cybersecurity researcher and software engineer passionate about building resilient security architectures, intelligent AI/ML systems, and high-performance web applications. Driven by a deep curiosity for how complex systems work and how to defend them.",
  stats: [
    { label: "VERIFIED REPOSITORIES", value: "11" },
    { label: "PRIMARY PRACTICE AREAS", value: "3" },
    { label: "STATUS", value: "OPERATIONAL" },
  ],
  categories: [
    {
      title: "CYBER-SECURITY",
      items: ["Cybersecurity Fundamentals", "Nmap", "Wireshark", "Tcpdump", "Burp Suite", "Shodan", "XSS", "John the Ripper", "PsTools (Forensics)", "Network Traffic Analysis"],
    },
    {
      title: "AI & MACHINE LEARNING",
      items: ["OpenCV & Computer Vision", "ANPR", "PyTorch & Deep Learning", "Geospatial CLIP Models", "LLM Backends", "FastAPI Inferencing"],
    },
    {
      title: "WEB DEVELOPMENT",
      items: ["JavaScript (ES6+)", "TypeScript", "HTML5 & CSS3", "React & Next.js", "WebGL / Three.js", "RESTful APIs"],
    },
    {
      title: "SYSTEMS & HARDWARE",
      items: ["Python", "C/C++", "Linux Systems", "BGP Protocol", "ESP32 Firmware"],
    },
  ]
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "real-time-waf-rust",
    title: "real-time-waf-rust",
    repositoryName: "real-time-waf-rust",
    description: "High-performance real-time Web Application Firewall (WAF) engine engineered for low-latency HTTP threat inspection and malicious payload filtering.",
    category: "Cyber-Security",
    languages: ["C/C++", "Systems Security", "WAF"],
    githubUrl: "https://github.com/chandan3669/real-time-waf-rust",
    isFeatured: true,
    metrics: [
      { label: "INSPECTION", value: "REAL-TIME" },
      { label: "DEFENSE", value: "WAF ENGINE" }
    ]
  },
  {
    id: "anpr-system",
    title: "anpr-system",
    repositoryName: "anpr-system",
    description: "Automatic Number Plate Recognition system utilizing computer vision techniques and deep learning models for vehicle plate detection and OCR character recognition.",
    category: "AI & ML",
    languages: ["Python", "OpenCV", "Computer Vision"],
    githubUrl: "https://github.com/chandan3669/anpr-system",
    isFeatured: true,
    metrics: [
      { label: "MODEL", value: "OPENCV OCR" },
      { label: "DOMAIN", value: "COMPUTER VISION" }
    ]
  },
  {
    id: "bgp-realtime-simulation",
    title: "bgp-realtime-simulation",
    repositoryName: "bgp-realtime-simulation",
    description: "Real-time BGP routing protocol simulator designed to model Autonomous System (AS) path propagation, route advertisement, and network topology shifts.",
    category: "Systems & Hardware",
    languages: ["Python", "BGP", "Networking"],
    githubUrl: "https://github.com/chandan3669/bgp-realtime-simulation",
    isFeatured: true,
    metrics: [
      { label: "PROTOCOL", value: "BGP / AS" },
      { label: "SIMULATION", value: "REAL-TIME" }
    ]
  },
  {
    id: "support-ai-backend",
    title: "support-ai-backend",
    repositoryName: "support-ai-backend",
    description: "Backend architecture powering an AI automated support service, integrating REST APIs with language model inferencing pipelines and FastAPI.",
    category: "AI & ML",
    languages: ["Python", "FastAPI", "AI Models"],
    githubUrl: "https://github.com/chandan3669/support-ai-backend",
    isFeatured: true,
    metrics: [
      { label: "FRAMEWORK", value: "FASTAPI" },
      { label: "SERVICE", value: "AI SUPPORT" }
    ]
  },
  {
    id: "SmartEnvironment-iot",
    title: "SmartEnvironment-iot",
    repositoryName: "SmartEnvironment-iot",
    description: "IoT environmental monitoring node system utilizing sensors to record air quality, humidity, and temperature telemetry data.",
    category: "Systems & Hardware",
    languages: ["C/C++", "IoT", "Microcontrollers"],
    githubUrl: "https://github.com/chandan3669/SmartEnvironment-iot",
    isFeatured: false,
    metrics: [
      { label: "HARDWARE", value: "EMBEDDED" },
      { label: "SENSORS", value: "TELEMETRY" }
    ]
  },
  {
    id: "medBlock",
    title: "medBlock",
    repositoryName: "medBlock",
    description: "Decentralized medical records access control system built on blockchain smart contracts, providing cryptographic patient data integrity.",
    category: "Web Development",
    languages: ["Solidity", "JavaScript", "Web3"],
    githubUrl: "https://github.com/chandan3669/medBlock",
    isFeatured: false,
    metrics: [
      { label: "CHAIN", value: "SMART CONTRACTS" },
      { label: "SECURITY", value: "ETH LABS" }
    ]
  },
  {
    id: "Medical_Website",
    title: "Medical_Website",
    repositoryName: "Medical_Website",
    description: "Healthcare platform web interface providing patient scheduling, clinic information layout, and responsive service catalogs.",
    category: "Web Development",
    languages: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/chandan3669/Medical_Website",
    isFeatured: false,
    metrics: [
      { label: "TYPE", value: "WEB APPLICATION" },
      { label: "UI/UX", value: "RESPONSIVE" }
    ]
  },
  {
    id: "3d-Animation-web",
    title: "3d-Animation-web",
    repositoryName: "3d-Animation-web",
    description: "Interactive 3D web presentation environment using Three.js and WebGL for rendering animated geometry in browser viewports.",
    category: "Web Development",
    languages: ["JavaScript", "WebGL", "Three.js"],
    githubUrl: "https://github.com/chandan3669/3d-Animation-web",
    isFeatured: false,
    metrics: [
      { label: "GRAPHICS", value: "WEBGL 3D" },
      { label: "LIBRARY", value: "THREE.JS" }
    ]
  },
  {
    id: "font-end",
    title: "font-end",
    repositoryName: "font-end",
    description: "Frontend layout boilerplate and component UI library containing modern CSS utilities and responsive component patterns.",
    category: "Web Development",
    languages: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/chandan3669/font-end",
    isFeatured: false,
    metrics: [
      { label: "STACK", value: "FRONTEND UI" },
      { label: "DESIGNS", value: "RESPONSIVE" }
    ]
  },
  {
    id: "chandan3669.github.io",
    title: "chandan3669.github.io",
    repositoryName: "chandan3669.github.io",
    description: "Personal developer website source codebase, serving security research overview and project documentation.",
    category: "Web Development",
    languages: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/chandan3669/chandan3669.github.io",
    isFeatured: false,
    metrics: [
      { label: "DEPLOYED", value: "GITHUB PAGES" },
      { label: "TYPE", value: "STATIC PORTFOLIO" }
    ]
  },
  {
    id: "Sorry-not-Sorry",
    title: "Sorry-not-Sorry",
    repositoryName: "Sorry-not-Sorry",
    description: "Web interaction script codebase demonstrating dynamic DOM manipulations, event handlers, and web interface logic.",
    category: "Web Development",
    languages: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/chandan3669/Sorry-not-Sorry",
    isFeatured: false,
    metrics: [
      { label: "LOGIC", value: "DOM SCRIPTS" },
      { label: "INTERFACE", value: "INTERACTIVE" }
    ]
  }
]
