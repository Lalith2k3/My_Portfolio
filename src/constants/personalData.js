// Personal Information
export const personalInfo = {
  name: "Lalith Koushik Vanam",
  title: "Software Engineer",
  subtitle: "AI/ML & Full Stack Developer",
  location: "Houston, TX",
  phone: "+1 (281) 202-4868",
  email: "lalithvanam04@gmail.com",
  linkedin: "https://www.linkedin.com/in/lalithvanam-dev/",
  github: "https://github.com/Lalith2k3",
  portfolio: "https://lalithkoushik.netlify.app/",
  profileImage: "/My_Picture.png",
  resumeUrl: "/Lalith_Koushik_Vanam_Resume.pdf",
  description: "Software Engineer with 4+ years of expeprrience in midstream pipeline operations, with hands-on expertise in .NET Core MVC and AI RAG-based applications. Seeking full-time AI/ML roles."
}

// Education
export const education = [
  {
    degree: "Master's in Computer Science",
    institution: "University of Houston",
    period: "Expected May 2026",
    location: "Houston, TX"
  },
  {
    degree: "Bachelor's in Computer Science",
    institution: "Keshav Memorial Institute of Technology",
    period: "2020 - 2024",
    location: "India"
  }
]

// Experience
export const experience = [
  {
    title: "Full Stack and AI Software Engineer",
    company: "MidstreamAI",
    location: "Houston, TX",
    period: "June 2024 - May 2026",
    description: [
      "Developed a pipeline leak detection data visualization application using ASP.NET Core MVC and Plotly API, enabling stakeholders to analyze operational insights through interactive dashboards.",
      "Designed and implemented reusable UI components, improving development efficiency and ensuring consistency across multiple enterprise applications.",
      "Implemented an AI chatbot using Ollama LLM within a standalone application, enabling stakeholders to query pipeline operations and structural data."
    ]
  },
  {
    title: "Full Stack Developer",
    company: "LTIMindtree",
    location: "Hyderabad, India",
    period: "August 2022 - May 2024",
    description: [
      "Gained hands-on exposure to seep detection and leak analysis systems used in real-world oil and gas pipeline monitoring applications.",
      "Analyzed the design and workflow of Seep Plot applications, including alarm analysis and trend-based visualizations using Excel macros and dataPARC.",
      "Studied the end-to-end lifecycle of industrial software applications, including configuration generation, real-time data plotting, shut-in evaluations, alarm validation, and delivery in a production environment."
    ]
  }
]

// Projects
export const projects = [
  {
    title: "Agentic-AI Analytics Platform",
    description: "Designed and built a microservices-based RAG platform for industrial data analysis using FastAPI, PostgreSQL (TimescaleDB), and React/TypeScript. Implemented SQL-RAG and NetworkX-RAG agents with Ollama LLM integration for natural-language-to-SQL queries and graph analytics, with real-time streaming APIs and automated Plotly.js visualizations.",
    tech: ["FastAPI", "PostgreSQL", "TimescaleDB", "React", "TypeScript", "Ollama LLM", "NetworkX", "Plotly.js"],
    github: "#",
    demo: "#"
  },
  {
    title: "Pipeline Leak Detection Insights Application",
    description: "Developed a standalone ASP.NET Core MVC application for pipeline leak detection insights using interactive dashboards (tables and graphs) via the Plotly API. Implemented the repository pattern for data access, server-side controllers for aggregation logic, and client-side JavaScript for dynamic interactive analytics.",
    tech: ["ASP.NET Core MVC", "Plotly API", "JavaScript", "Repository Pattern", "SSMS"],
    github: "#",
    demo: "#"
  }
]

// Skills - Exactly as mentioned in resume
export const skills = {
  technical: [
    "ASP .NET CORE MVC",
    "RAG Systems",
    "Pattern Recognition",
    "React.js",
    ".NET Core Web API",
    "FastAPI",
    "CI/CD Pipeline"
  ],
  soft: [
    "Problem-Solving",
    "Time Management",
    "Communication Skills"
  ]
}

// Statistics
export const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "9+", label: "Projects Completed" },
  { value: "2", label: "Companies Worked" }
]
