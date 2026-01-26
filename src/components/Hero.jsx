import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { personalInfo } from '../constants/personalData'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>
            <h2 className="hero-subtitle">{personalInfo.subtitle}</h2>
            <p className="hero-description">
              {personalInfo.description}
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
              <a href="#projects" className="btn btn-secondary">View Work</a>
            </div>
            <div className="social-links">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href={`mailto:${personalInfo.email}`} aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <img src={personalInfo.profileImage} alt={personalInfo.name} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
