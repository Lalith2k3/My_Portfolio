import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '../constants/personalData'
import './Projects.css'

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>          
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
