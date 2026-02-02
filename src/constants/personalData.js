// Personal Information
export const personalInfo = {
  name: "Lalith Koushik Vanam",
  title: "Software Engineer",
  subtitle: "Full Stack & AI Software Engineer",
  location: "Houston, TX",
  phone: "+1 (281) 202-4868",
  email: "lalithvanam04@gmail.com",
  linkedin: "https://www.linkedin.com/in/lalithvanam-dev/",
  github: "https://github.com/Lalith2k3",
  portfolio: "https://www.lalithkoushik.com/",
  profileImage: "/My_Picture.png",
  resumeUrl: "/Lalith_Koushik_Vanam_Resume.pdf",
  description: "Software Engineer with 4+ years of professional experience designing and building scalable, production-grade web and AI-enabled systems. Specialized in ASP.NET Core, RESTful APIs, React/TypeScript, and Retrieval-Augmented Generation (RAG) architectures. Proven experience delivering industrial analytics platforms, AI-powered data exploration tools, and reusable enterprise components with a strong focus on system design, maintainability, and real-world operational impact."
}

// Education
export const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of Houston",
    period: "May 2026",
    location: "Houston, TX"
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Keshav Memorial Institute of Technology",
    period: "2020 - 2024",
    location: "India"
  }
]

// Experience
export const experience = [
  {
    title: "Full Stack & AI Software Engineer",
    company: "MidstreamAI",
    location: "Houston, TX",
    period: "June 2024 - May 2026",
    description: [
      "Designed and owned a pipeline leak detection analytics platform using ASP.NET Core MVC and Plotly.js, enabling engineers and stakeholders to analyze operational trends through interactive dashboards.",
      "Architected reusable frontend and backend components adopted across multiple enterprise applications, reducing development effort and improving UI consistency.",
      "Built and integrated an AI-powered conversational analytics assistant using Ollama LLM, enabling natural-language queries over pipeline operations and structural metadata.",
      "Implemented server-side aggregation logic, optimized data access layers, and structured APIs for scalable analytics workloads.",
      "Collaborated with domain experts to translate operational requirements into production-ready software features."
    ]
  },
  {
    title: "Full Stack Developer",
    company: "LTIMindtree",
    location: "Hyderabad, India",
    period: "August 2022 - May 2024",
    description: [
      "Worked on industrial seep detection and leak analysis systems used in real-world oil and gas pipeline monitoring environments.",
      "Analyzed and enhanced seep plot and alarm analysis workflows, supporting trend-based visualizations using Excel macros and dataPARC systems.",
      "Gained exposure to the end-to-end lifecycle of industrial software, including configuration generation, real-time data ingestion, visualization, alarm validation, and production delivery.",
      "Developed a strong understanding of operational reliability, data accuracy, and system validation requirements in safety-critical applications."
    ]
  }
]

// Projects
export const projects = [
  {
    title: "Agentic-AI Analytics Platform",
    description: "Designed and developed a microservices-based AI analytics platform for industrial data exploration using FastAPI, PostgreSQL (TimescaleDB), and React/TypeScript. Implemented SQL-RAG and NetworkX-based Graph-RAG agents integrated with Ollama LLM to enable natural-language-to-SQL queries and graph analytics. Built real-time streaming APIs and automated Plotly.js visualizations, demonstrating a production-ready approach to AI-driven data analysis.",
    tech: ["FastAPI", "PostgreSQL", "TimescaleDB", "React", "TypeScript", "Ollama LLM", "SQL-RAG", "Graph-RAG", "NetworkX", "Plotly.js"],
    github: "#",
    demo: "#"
  },
  {
    title: "Pipeline Leak Detection Insights Application",
    description: "Developed a standalone ASP.NET Core MVC application providing operational insights for pipeline leak detection. Implemented interactive dashboards (tables and charts) using Plotly.js, repository-based data access, server-side aggregation controllers, and dynamic client-side analytics. Designed the application with scalability and maintainability in mind for real-world industrial usage.",
    tech: ["ASP.NET Core MVC", "Plotly.js", "Repository Pattern", "JavaScript", "SSMS"],
    github: "#",
    demo: "#"
  }
]

// Skills - Core Tech Stack from resume
export const skills = {
  technical: [
    "ASP.NET Core MVC",
    "Web API",
    "FastAPI",
    "RAG Pipelines",
    "React.js",
    "TypeScript",
    "PostgreSQL",
    "MSSQL",
    "CI/CD Pipelines",
    "Git",
  ],
  soft: ["Problem-Solving", "Time Management", "Communication Skills"]
}

// Statistics
export const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "10+", label: "Projects Completed" },
  { value: "2", label: "Companies Worked" }
]
