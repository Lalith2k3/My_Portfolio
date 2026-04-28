import React from 'react'
import { skills } from '../constants/personalData'
import './Skills.css'

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.categories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.name}</h3>
              <div className="skills-tags">
                {category.items.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
