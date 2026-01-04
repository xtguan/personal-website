import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

// Import all post modules from src/posts
const modules = import.meta.globEager('../posts/*.js')
const posts = Object.values(modules).map(m => m.default).sort((a,b) => (b.date > a.date ? 1 : -1))

export default function Blog(){
  const [selected, setSelected] = useState(null)

  return (
    <section id="blog" className="card">
      <h2>Blog</h2>
      <p className="muted">Short notes and longer posts. Click to read full posts.</p>

      <div className="projects-list">
        {posts.map((p, i) => (
          <article key={i} className="project" onClick={() => setSelected(p)} style={{cursor:'pointer'}}>
            <h3>{p.title}</h3>
            {p.thumbnail && <img src={p.thumbnail} alt={`thumb-${i}`} style={{width:'100%',height:120,objectFit:'cover',borderRadius:8}} />}
            <p className="muted">{p.date}</p>
          </article>
        ))}
      </div>

      {selected && (
        <div className="card" style={{marginTop:20}}>
          <button onClick={() => setSelected(null)}>Close</button>
          <h3>{selected.title}</h3>
          <ReactMarkdown>{selected.content}</ReactMarkdown>
        </div>
      )}
    </section>
  )
}
