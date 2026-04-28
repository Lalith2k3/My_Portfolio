import React from 'react'
import { personalInfo, education, stats } from '../constants/personalData'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Software Engineer with 4+ years of experience building production-grade web and
              agentic AI systems. Currently completing my Master's in Computer Science at the
              University of Houston.
            </p>
            <p>
              At MidstreamAI, I designed and own a multi-agent AI platform using LangGraph and
              LangChain — a Supervisor orchestrating Topology and Operations specialist agents with
              SQL-RAG over TimescaleDB and Graph-RAG over a NetworkX pipeline network. I built
              custom LangGraph workflows with structured error recovery, in-memory tool result
              caching, Tenacity retry policies, and deliberate model tiering (Claude Haiku for
              tool-selection, Sonnet for synthesis). Prior to this, I delivered a pipeline leak
              detection analytics platform in ASP.NET Core MVC with interactive Plotly.js dashboards
              adopted across multiple enterprise applications.
            </p>
            <p>
              Before MidstreamAI, I worked at LTIMindtree on industrial seep detection and leak
              analysis systems for real-world oil and gas pipelines — spanning configuration
              generation, real-time data ingestion, sensor-driven visualization, and production
              validation in safety-critical environments.
            </p>
            <div className="education-section">
              <h3>Education</h3>
              {education.map((edu, index) => (
                <div key={index} className="education-item">
                  <h4>{edu.degree}</h4>
                  <p className="institution">{edu.institution}</p>

                </div>
              ))}
            </div>
          </div>
          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
