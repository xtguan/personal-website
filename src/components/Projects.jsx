import React from 'react'

const sample = [
  {title: 'Project A', desc: 'A short description of project A, skills used.'},
  {title: 'Project B', desc: 'A short description of project B, link to repo or live demo.'}
]

export default function Projects(){
  return (
    <section id="projects">
      <h2>Projects & Work</h2>
      <div className="projects-list">
        {sample.map((p, i) => (
          <article key={i} className="project">
            <h3>{p.title}</h3>
            <p className="muted">{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
