import React, { useState } from 'react'
import thumb1 from '../assets/photos/sample1.svg'
import thumb2 from '../assets/photos/sample2.svg'

const projects = [
  {
    title: 'FRTB — Market Risk Tools',
    thumbnail: thumb1,
    subtitle: 'Built scalable Java/Spring Boot services and Spark data pipelines for risk measurement.',
    tech: ['Java', 'Spring Boot', 'Spark', 'Hadoop', 'SQL', 'Unix'],
    details:
      'Designed and developed backend services and data pipelines to support FRTB market-risk measurement. Implemented Java/Spring Boot services, Spark processing for large datasets, and optimized SQL for complex queries. Managed Hadoop datasets and used Unix for operations and automation.'
  },
  {
    title: 'Fraud IT — Systems Integration',
    thumbnail: thumb2,
    subtitle: 'Led design and delivery of cross-platform integrations, coordinating engineering and operations.',
    tech: ['System design', 'APIs', 'Integration planning', 'Documentation', 'Cross-team coordination'],
    details:
      'Led end-to-end integration efforts for Fraud IT: created integration plans and schedules, coordinated engineering and operations teams, maintained documentation, and resolved cross-system issues. Ensured solutions met technical and business requirements and improved delivery predictability.'
  }
]

export default function Projects(){
  const [selected, setSelected] = useState(null)
  const [closing, setClosing] = useState(false)

  const handleClose = () => {
    // trigger fade-out then clear selected
    setClosing(true)
    setTimeout(() => {
      setSelected(null)
      setClosing(false)
    }, 200)
  }

  return (
    <section id="projects" className="card">
      <h2>Projects & Work</h2>
      <p className="muted">Selected projects and case studies. Click a project to expand and see details.</p>

      <div className="projects-list">
        {projects.map((p, i) => (
          <article key={i} className="project" onClick={() => setSelected(p)} style={{cursor: 'pointer'}}>
            {p.thumbnail && <img src={p.thumbnail} alt={`thumb-${i}`} className="thumb" />}
            <h3>{p.title}</h3>
            <p className="muted">{p.subtitle}</p>
          </article>
        ))}
      </div>

      {selected && (
        <div className={`project-details ${closing ? 'fade-out' : 'fade-in'}`} style={{marginTop:20}}>
          <button className="close-btn" onClick={handleClose} aria-label="Close project details">✕</button>
          <h3>{selected.title}</h3>
          <p className="muted">{selected.subtitle}</p>
          <p><strong>Tech:</strong> {selected.tech.join(', ')}</p>
          <p className="muted">{selected.details}</p>
        </div>
      )}
    </section>
  )
}
