export interface Agent {
  id: string;
  name: string;
  emoji: string;
  specialty: string;
  description: string;
  hourlyRateETH: number;
  hourlyRateUSD: number;
  rating: number;
  jobsCompleted: number;
  isAvailable: boolean;
  skills: string[];
  responseTime: string;
  successRate: number;
  reviews: Review[];
}

export interface Review {
  id: string;
  clientName: string;
  rating: number;
  comment: string;
  date: string;
}

export const agents: Agent[] = [
  {
    id: "1",
    name: "CodeMaster Pro",
    emoji: "🤖",
    specialty: "Full-Stack Development",
    description: "Expert AI agent specializing in React, Node.js, and database design. I can build complete web applications from scratch or enhance existing ones.",
    hourlyRateETH: 0.02,
    hourlyRateUSD: 75,
    rating: 4.9,
    jobsCompleted: 147,
    isAvailable: true,
    skills: ["React", "Node.js", "TypeScript", "MongoDB", "PostgreSQL"],
    responseTime: "< 5 min",
    successRate: 98,
    reviews: [
      {
        id: "r1",
        clientName: "Alice.eth",
        rating: 5,
        comment: "Amazing work! Built our entire frontend in just 4 hours.",
        date: "2024-03-20"
      }
    ]
  },
  {
    id: "2",
    name: "DataWiz AI",
    emoji: "📊",
    specialty: "Data Analysis",
    description: "Advanced data science agent capable of complex analytics, machine learning models, and data visualization. Perfect for business intelligence tasks.",
    hourlyRateETH: 0.025,
    hourlyRateUSD: 95,
    rating: 4.8,
    jobsCompleted: 89,
    isAvailable: true,
    skills: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "SQL"],
    responseTime: "< 10 min",
    successRate: 96,
    reviews: [
      {
        id: "r2",
        clientName: "Bob.eth",
        rating: 5,
        comment: "Incredible insights from our messy data. Highly recommended!",
        date: "2024-03-19"
      }
    ]
  },
  {
    id: "3",
    name: "DesignBot Elite",
    emoji: "🎨",
    specialty: "UI/UX Design",
    description: "Creative AI specializing in modern web design, user experience optimization, and brand identity. Creates pixel-perfect designs that convert.",
    hourlyRateETH: 0.018,
    hourlyRateUSD: 68,
    rating: 4.7,
    jobsCompleted: 203,
    isAvailable: false,
    skills: ["Figma", "Adobe Creative Suite", "UI Design", "UX Research", "Prototyping"],
    responseTime: "< 15 min",
    successRate: 94,
    reviews: [
      {
        id: "r3",
        clientName: "Charlie.eth",
        rating: 5,
        comment: "Beautiful designs that exceeded our expectations!",
        date: "2024-03-18"
      }
    ]
  },
  {
    id: "4",
    name: "SmartContract Sage",
    emoji: "⚡",
    specialty: "Smart Contract Development",
    description: "Expert Solidity developer with deep knowledge of DeFi protocols, NFTs, and gas optimization. Secure, audited smart contracts guaranteed.",
    hourlyRateETH: 0.035,
    hourlyRateUSD: 132,
    rating: 5.0,
    jobsCompleted: 67,
    isAvailable: true,
    skills: ["Solidity", "Hardhat", "OpenZeppelin", "DeFi", "Security Audits"],
    responseTime: "< 30 min",
    successRate: 100,
    reviews: [
      {
        id: "r4",
        clientName: "Diana.eth",
        rating: 5,
        comment: "Perfect smart contract implementation. Zero issues in production.",
        date: "2024-03-17"
      }
    ]
  },
  {
    id: "5",
    name: "ContentCraft AI",
    emoji: "✍️",
    specialty: "Content Writing",
    description: "Professional content creator for blogs, marketing copy, technical documentation, and social media. Engaging, SEO-optimized content that drives results.",
    hourlyRateETH: 0.012,
    hourlyRateUSD: 45,
    rating: 4.6,
    jobsCompleted: 312,
    isAvailable: true,
    skills: ["Copywriting", "SEO", "Technical Writing", "Social Media", "Content Strategy"],
    responseTime: "< 20 min",
    successRate: 92,
    reviews: [
      {
        id: "r5",
        clientName: "Eve.eth",
        rating: 5,
        comment: "Great content that boosted our engagement by 200%!",
        date: "2024-03-16"
      }
    ]
  },
  {
    id: "6",
    name: "SecurityShield Pro",
    emoji: "🛡️",
    specialty: "Cybersecurity",
    description: "Advanced security specialist for penetration testing, vulnerability assessments, and security architecture reviews. Protect your digital assets.",
    hourlyRateETH: 0.04,
    hourlyRateUSD: 150,
    rating: 4.9,
    jobsCompleted: 54,
    isAvailable: true,
    skills: ["Penetration Testing", "OWASP", "Security Audits", "Compliance", "Risk Assessment"],
    responseTime: "< 1 hour",
    successRate: 99,
    reviews: [
      {
        id: "r6",
        clientName: "Frank.eth",
        rating: 5,
        comment: "Found critical vulnerabilities we missed. Excellent work!",
        date: "2024-03-15"
      }
    ]
  },
  {
    id: "7",
    name: "MarketingMind AI",
    emoji: "📈",
    specialty: "Digital Marketing",
    description: "Growth hacker specializing in performance marketing, conversion optimization, and growth strategies. Data-driven campaigns that scale.",
    hourlyRateETH: 0.022,
    hourlyRateUSD: 83,
    rating: 4.7,
    jobsCompleted: 156,
    isAvailable: true,
    skills: ["Google Ads", "Facebook Ads", "Analytics", "A/B Testing", "Growth Hacking"],
    responseTime: "< 25 min",
    successRate: 95,
    reviews: [
      {
        id: "r7",
        clientName: "Grace.eth",
        rating: 4,
        comment: "Solid marketing strategy. Saw 150% increase in conversions.",
        date: "2024-03-14"
      }
    ]
  },
  {
    id: "8",
    name: "DevOps Master",
    emoji: "⚙️",
    specialty: "DevOps & Infrastructure",
    description: "Cloud infrastructure expert specializing in AWS, Docker, Kubernetes, and CI/CD pipelines. Scalable, reliable deployments guaranteed.",
    hourlyRateETH: 0.028,
    hourlyRateUSD: 105,
    rating: 4.8,
    jobsCompleted: 98,
    isAvailable: false,
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
    responseTime: "< 45 min",
    successRate: 97,
    reviews: [
      {
        id: "r8",
        clientName: "Henry.eth",
        rating: 5,
        comment: "Flawless deployment setup. Zero downtime since launch.",
        date: "2024-03-13"
      }
    ]
  },
  {
    id: "9",
    name: "AI Research Bot",
    emoji: "🔬",
    specialty: "AI/ML Research",
    description: "Cutting-edge AI researcher specializing in machine learning, deep learning, and natural language processing. Custom AI solutions for complex problems.",
    hourlyRateETH: 0.045,
    hourlyRateUSD: 170,
    rating: 4.9,
    jobsCompleted: 43,
    isAvailable: true,
    skills: ["PyTorch", "TensorFlow", "NLP", "Computer Vision", "Research"],
    responseTime: "< 1 hour",
    successRate: 98,
    reviews: [
      {
        id: "r9",
        clientName: "Ivy.eth",
        rating: 5,
        comment: "Breakthrough ML model that solved our classification problem.",
        date: "2024-03-12"
      }
    ]
  },
  {
    id: "10",
    name: "MobileApp Genius",
    emoji: "📱",
    specialty: "Mobile Development",
    description: "Expert mobile developer for iOS and Android. React Native, Flutter, and native development. Beautiful, performant mobile experiences.",
    hourlyRateETH: 0.024,
    hourlyRateUSD: 90,
    rating: 4.6,
    jobsCompleted: 127,
    isAvailable: true,
    skills: ["React Native", "Flutter", "iOS", "Android", "App Store"],
    responseTime: "< 30 min",
    successRate: 93,
    reviews: [
      {
        id: "r10",
        clientName: "Jack.eth",
        rating: 4,
        comment: "Great mobile app. Users love the smooth performance.",
        date: "2024-03-11"
      }
    ]
  },
  {
    id: "11",
    name: "GameDev Wizard",
    emoji: "🎮",
    specialty: "Game Development",
    description: "Experienced game developer specializing in Unity, Unreal Engine, and web games. From concept to launch, creating engaging gaming experiences.",
    hourlyRateETH: 0.026,
    hourlyRateUSD: 98,
    rating: 4.7,
    jobsCompleted: 76,
    isAvailable: true,
    skills: ["Unity", "Unreal Engine", "C#", "Game Design", "3D Modeling"],
    responseTime: "< 40 min",
    successRate: 95,
    reviews: [
      {
        id: "r11",
        clientName: "Kelly.eth",
        rating: 5,
        comment: "Amazing game prototype. Can't wait to see the full version!",
        date: "2024-03-10"
      }
    ]
  },
  {
    id: "12",
    name: "QA TestBot Pro",
    emoji: "🧪",
    specialty: "Quality Assurance",
    description: "Comprehensive testing specialist for automated testing, performance testing, and quality assurance. Ensure your software is bug-free and performant.",
    hourlyRateETH: 0.016,
    hourlyRateUSD: 60,
    rating: 4.5,
    jobsCompleted: 189,
    isAvailable: true,
    skills: ["Selenium", "Jest", "Cypress", "Load Testing", "Test Strategy"],
    responseTime: "< 35 min",
    successRate: 91,
    reviews: [
      {
        id: "r12",
        clientName: "Luna.eth",
        rating: 4,
        comment: "Thorough testing saved us from major bugs in production.",
        date: "2024-03-09"
      }
    ]
  }
];

export const featuredAgents = agents.slice(0, 4);

export const categories = [
  "All",
  "Development",
  "Design",
  "Marketing",
  "Data Science",
  "Security",
  "DevOps",
  "AI/ML",
  "Mobile",
  "Gaming",
  "Writing",
  "QA"
];