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
              I'm a passionate Software Engineer with 4+ years of experience specializing in 
              midstream pipeline operations, AI/ML applications, and full-stack development. 
              Currently pursuing my Master's in Computer Science at the University of Houston.
            </p>
            <p>
              My expertise lies in building intelligent systems using .NET Core MVC and AI RAG-based 
              applications. I've developed pipeline leak detection systems, AI chatbots, and 
              microservices-based analytics platforms that solve real-world industrial challenges.
            </p>
            <p>
              With a strong foundation in both AI/ML and full-stack development, I bring innovative 
              solutions to complex problems. I'm passionate about leveraging cutting-edge technologies 
              like LLMs, RAG systems, and modern web frameworks to create impactful applications.
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
