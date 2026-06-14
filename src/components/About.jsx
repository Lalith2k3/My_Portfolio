import React from 'react'
import { personalInfo, education, stats } from '../constants/personalData'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title reveal">About Me</h2>
        <div className="about-content">
          <div className="about-text reveal">
            <p>
              I'm a Full Stack & AI Software Engineer building production-grade web platforms and
              agentic AI systems for the oil &amp; gas pipeline and healthcare domains. I recently graduated with a master's degree in Computer Science at the University of Houston.
            </p>
            <p>
              At MidstreamAI, I designed and own a multi-agent AI analytics platform that lets
              operators query pipeline infrastructure in natural language — a supervisor agent
              routing to specialized topology and operations agents, with intelligent request
              planning, structured error recovery, result caching, and tiered model selection.
              I also delivered a secure pipeline leak-detection analytics platform in ASP.NET Core
              MVC with interactive Plotly.js dashboards, policy-based RBAC, and reusable components
              adopted across multiple enterprise applications.
            </p>
            <p>
              I bring hands-on exposure to industrial pipeline monitoring from my work at
              LTIMindtree, and I'm actively extending my expertise into SCADA systems, industrial
              communications, and ICS cybersecurity — building a working Ignition SCADA platform and
              studying OT/IT architecture, Modbus &amp; OPC-UA, and standards like ANSI/ISA-62443,
              API 1164/1165, and NIST SP 800-82.
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
              <div
                key={index}
                className="stat-card reveal"
                style={{ transitionDelay: `${index * 0.12}s` }}
              >
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
