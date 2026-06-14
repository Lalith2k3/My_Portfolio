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
  resumeUrl: "/LalithKoushikVanam.pdf",
  description: "Full Stack & AI Software Engineer building production-grade web platforms and agentic AI systems for the oil & gas pipeline and healthcare domains. Skilled in multi-agent AI orchestration over relational and graph data, full-stack development with ASP.NET Core and React, and secure, well-architected backend design. Currently extending hands-on expertise into SCADA systems, industrial communications, and ICS cybersecurity."
}

// Education
export const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of Houston",
    period: "Aug 2024 - May 2026",
    location: "Houston, TX"
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Keshav Memorial Institute of Technology",
    period: "2020 - 2024",
    location: "Hyderabad, India"
  }
]

// Experience
export const experience = [
  {
    title: "Full Stack & AI Software Engineer",
    company: "MidstreamAI",
    location: "Houston, TX",
    period: "Dec 2024 - June 2026",
    description: [
      "Designed and owned a production-grade multi-agent AI analytics platform that lets operators query pipeline infrastructure in natural language, with a supervisor agent routing to specialized topology and operations agents, intelligent request planning, structured error recovery, result caching, and tiered model selection for reliability and cost efficiency.",
      "Designed and delivered a secure, enterprise pipeline leak-detection analytics platform (ASP.NET Core MVC, Plotly.js) featuring interactive dashboards, server-side aggregation, policy-based RBAC, hybrid EF Core / Dapper data access, and centralized logging with reusable components adopted across multiple applications.",
      "Collaborated with domain experts to translate operational requirements into production software, following structured change-management practices."
    ]
  },
  {
    title: "Graduate Teaching Assistant",
    company: "University of Houston-Clear Lake",
    location: "Houston, TX",
    period: "Aug 2025 - May 2026",
    description: [
      "Supported five graduate/undergraduate courses: Computer Security & Cryptography, Computer Game Programming, Concurrent Programming & Software Modelling, Network Protocols, and Design of Database Systems.",
      "Clarified course concepts and guided students through programming assignments and projects during office hours and lab sessions.",
      "Graded programming assignments, lab reports, and course projects against consistent evaluation standards; proctored quizzes and exams and upheld academic integrity."
    ]
  },
  {
    title: "Full Stack Developer",
    company: "LTIMindtree",
    location: "Hyderabad, India",
    period: "Feb 2024 - Jun 2024",
    description: [
      "Gained exposure to industrial seep detection and leak analysis systems in oil and gas pipeline monitoring environments, developing conceptual familiarity with SCADA-adjacent operational workflows.",
      "Learned about alarm analysis workflows and trend-based visualizations using dataPARC (pipeline SCADA historian) for operational data monitoring in pipeline environments.",
      "Gained foundational understanding of operational reliability, data accuracy, and system validation requirements in safety-critical pipeline applications."
    ]
  }
]

// Projects
export const projects = [
  {
    title: "Agentic-AI Analytics Platform",
    description: "Built a microservices-based multi-agent AI platform enabling natural-language queries over pipeline infrastructure: a supervisor agent routes requests to specialized topology and operations agents and synthesizes their results into clear answers with full audit logging. Engineered an intelligent request-routing layer that classifies each query, plans the work upfront as dependency-aware tasks, and asks clarifying follow-up questions when intent is ambiguous. Tuned the workflow for reliability and cost with structured error recovery, result caching, automatic retry with backoff, and tiered model selection. The topology agent reasons over a graph model of the pipeline network while the operations agent queries time-series sensor data, both feeding a shared state object with session-level conversation memory, real-time streaming APIs, and automated Plotly.js visualizations.",
    tech: ["FastAPI", "Multi-Agent Orchestration", "PostgreSQL", "NetworkX", "React", "TypeScript"],
    github: "#",
    demo: "#"
  },
  {
    title: "Pipeline Leak Detection Insights Application",
    description: "Developed a production-ready analytics application for pipeline leak detection with interactive Plotly.js dashboards, repository-pattern data access, server-side aggregation controllers, and dynamic client-side filtering. Implemented hybrid data access using EF Core for mapped domain entities and Dapper for high-performance raw SQL, and enforced policy-based, database-driven authorization with a custom requirement/handler for fine-grained screen-level RBAC. Centralized structured logging with Serilog plus global exception handling, and hardened deployment via middleware and hosting tweaks — designed for scalability and maintainability in an industrial environment.",
    tech: ["ASP.NET Core MVC", "Plotly.js", "MSSQL", "EF Core", "Dapper", "Serilog"],
    github: "#",
    demo: "#"
  },
  {
    title: "NasaFitness: Employee Wellness & Telehealth Platform",
    description: "Built a HIPAA-aware employee wellness platform with three role-based portals (employee, employer, clinician) spanning health screening, fitness assessment, AI-generated wellness plans, and telehealth. Designed a multi-role JWT auth system with BCrypt hashing and claims-based authorization, and a clinical intake pipeline with PAR-Q screening, fitness exam capture, and physician medical-clearance routing using NASA-standard clinical calculations. Integrated Azure OpenAI (gpt-4o) to generate Personal Wellness Plans, Microsoft Graph API for Teams transcript discovery, Acuity Scheduling for telehealth booking, and a RingCentral fax gateway with SMTP fallback for clinically-formatted PAR-Q PDFs.",
    tech: ["ASP.NET Core Web API", "React", "SQL Server", "Azure OpenAI", "GraphQL"],
    github: "#",
    demo: "#"
  },
  {
    title: "SCADA Training (Self-Directed, Ongoing)",
    description: "Building a working pipeline-tank-farm SCADA application in Ignition: configured device simulators and a structured tag hierarchy, designed a Perspective HMI with live-bound indicators, gauges, control buttons, and historical trend charts, and am now implementing alarm configuration and management. Studying field-instrument-to-historian control system architecture (PLCs/RTUs to SCADA server), the Purdue Model and OT/IT separation, control-center redundancy, Modbus and OPC-UA protocols, PI Historian time-series storage, API 1165 alarm display design, and ICS cybersecurity frameworks (ANSI/ISA-62443, API 1164, NIST SP 800-82).",
    tech: ["Ignition SCADA", "Perspective HMI", "Modbus", "OPC-UA", "PI Historian", "ICS Security"],
    github: "#",
    demo: "#"
  }
]

// Skills - categorized as per resume
export const skills = {
  categories: [
    {
      name: "Backend & APIs",
      items: ["ASP.NET Core MVC", "Web API", "FastAPI", "GraphQL", "RESTful Services"]
    },
    {
      name: "AI & LLM Systems",
      items: ["Multi-Agent AI Systems", "LLM Orchestration", "RAG Pipelines", "Azure OpenAI", "NetworkX", "Conversational AI", "Model Tiering"]
    },
    {
      name: "Frontend & Viz",
      items: ["React.js", "Vite", "TypeScript", "Plotly.js", "JavaScript", "HTML/CSS"]
    },
    {
      name: "Databases",
      items: ["PostgreSQL", "SQL Server", "MySQL", "MSSQL", "HeidiSQL"]
    },
    {
      name: "Architecture",
      items: ["Clean Architecture", "Repository Pattern", "Microservices", "API-first Design"]
    },
    {
      name: "Industrial / SCADA",
      items: ["Ignition SCADA", "SCADA Architecture", "RTU/PLC Communications", "Modbus & OPC-UA", "HMI Design", "Alarm Management", "PI Historian", "dataPARC", "Flowcal"]
    },
    {
      name: "Standards",
      items: ["ANSI/ISA-62443", "API 1164", "API 1165", "NIST SP 800-82", "PHMSA"]
    },
    {
      name: "DevOps & Tooling",
      items: ["CI/CD Pipelines", "Git", "Docker", "Cloudflare"]
    }
  ]
}

// Statistics
export const stats = [
  { value: "4+", label: "Projects Shipped" },
  { value: "3", label: "Domains: AI, Pipeline, Health" },
  { value: "2026", label: "M.S. CS, Univ. of Houston" }
]
