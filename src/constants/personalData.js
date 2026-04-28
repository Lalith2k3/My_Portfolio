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
  description: "Software Engineer with 4+ years of experience building production-grade web and agentic AI systems. Specialized in multi-agent orchestration with LangGraph and LangChain, full-stack development with ASP.NET Core and React, and RAG architectures over relational and graph databases. Track record of shipping maintainable, well-architected systems in industrial and AI-driven environments."
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
      "Designed and owned a production-grade multi-agent AI system using LangGraph and LangChain — Supervisor → Specialist Agents (Topology, Operations) → Summarizer — enabling natural-language queries over industrial infrastructure with full audit logging via a shared Pydantic V2 AgentState as the single source of truth.",
      "Built a Supervisor agent with a classification stage (6 routing strategies: topology, operations, topology_first, operations_first, parallel, summarizer) followed by a pre-execution planning stage that decomposes queries into dependency-aware agent tasks entirely upfront — no mid-flight replanning required.",
      "Engineered an ambiguity detection flow where genuinely unclear queries return a structured clarification question with selectable options rendered as UI buttons; specialist agents are bypassed until the operator confirms intent.",
      "Replaced create_react_agent with a hand-wired 3-node graph (call_llm → execute_tool → handle_response) to gain full control over response normalization, structured error recovery distinguishing terminal vs. recoverable failures, and iteration capping to bound cost.",
      "Implemented in-memory tool result caching to eliminate redundant HTTP round-trips; Tenacity exponential backoff retry (2s–30s, 3 attempts) for transient LLM errors; deliberate model tiering — Claude Haiku for tool-selection tasks and Sonnet for final response synthesis.",
      "Designed and delivered a pipeline leak detection analytics platform (ASP.NET Core MVC, Plotly.js) with interactive dashboards and server-side aggregation; built reusable frontend and backend components adopted across multiple enterprise applications."
    ]
  },
  {
    title: "Full Stack Developer",
    company: "LTIMindtree",
    location: "Hyderabad, India",
    period: "August 2022 - May 2024",
    description: [
      "Developed and maintained industrial seep detection and leak analysis systems for real-world oil and gas pipeline monitoring, working across the full software lifecycle from configuration generation to production delivery.",
      "Redesigned seep plot and alarm analysis workflows, integrating trend-based visualizations via Excel macros and dataPARC systems to improve operational insight for field engineers.",
      "Collaborated with domain experts to validate alarm logic, ensure data accuracy, and meet reliability standards for safety-critical infrastructure software used in live operational environments.",
      "Gained end-to-end exposure to enterprise industrial software: real-time data ingestion, sensor-driven visualization, configuration management, and production validation in high-stakes environments."
    ]
  }
]

// Projects
export const projects = [
  {
    title: "Agentic-AI Analytics Platform",
    description: "Built a manual 3-node LangGraph mini-workflow with a dedicated handle_response node between tool execution and the next LLM call, enabling response normalization, recoverable error hints (device not found → fuzzy search → retry with canonical ID), and hard stops on terminal errors. Integrated session-level conversation memory into the Supervisor and Summarizer for coherent multi-turn dialogue. Implemented an Operations Agent querying TimescaleDB via MCP-based tool discovery and a Topology Agent performing graph traversal over a NetworkX-modelled pipeline network.",
    tech: ["FastAPI", "LangGraph", "LangChain", "Claude", "PostgreSQL", "TimescaleDB", "NetworkX", "React", "TypeScript"],
    github: "#",
    demo: "#"
  },
  {
    title: "Pipeline Leak Detection Insights Application",
    description: "Built a production-ready analytics application for pipeline leak detection: interactive Plotly.js dashboards, repository-pattern data access, server-side aggregation controllers, and dynamic client-side filtering — designed for scalability and long-term maintainability in an industrial environment.",
    tech: ["ASP.NET Core MVC", "Plotly.js", "PostgreSQL", "Repository Pattern", "JavaScript"],
    github: "#",
    demo: "#"
  }
]

// Skills - categorized as per resume
export const skills = {
  categories: [
    {
      name: "Backend & APIs",
      items: ["ASP.NET Core MVC", "Web API", "FastAPI", "RESTful Services"]
    },
    {
      name: "AI & LLM Systems",
      items: ["LangGraph", "LangChain", "Multi-Agent Orchestration", "Claude (Haiku/Sonnet)", "RAG Pipelines", "SQL-RAG", "Graph-RAG (NetworkX)", "Ollama", "Conversation Memory"]
    },
    {
      name: "Agent Patterns",
      items: ["Supervisor-Worker Orchestration", "Pre-Execution Planning", "Human-in-the-Loop", "Tool Result Caching", "Tenacity Retry Policies", "Model Tiering"]
    },
    {
      name: "Frontend",
      items: ["React.js", "TypeScript", "Plotly.js", "JavaScript", "HTML/CSS"]
    },
    {
      name: "Databases",
      items: ["PostgreSQL", "TimescaleDB", "MSSQL", "Heidi SQL"]
    },
    {
      name: "Architecture",
      items: ["Clean Architecture", "Repository Pattern", "Microservices", "API-first Design"]
    },
    {
      name: "DevOps & Tooling",
      items: ["CI/CD Pipelines", "Git", "Cloudflare", "asyncpg", "httpx"]
    }
  ]
}

// Statistics
export const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "10+", label: "Projects Completed" },
  { value: "2", label: "Companies Worked" }
]
