import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

export default function Blog(){
  const [posts, setPosts] = useState([])
  const [selected, setSelected] = useState(null)
  const [category, setCategory] = useState('all')

  useEffect(() => {
    // Dynamically import all post modules
    const modules = import.meta.glob('../posts/*.js')
    ;(async () => {
      const entries = await Promise.all(
        Object.entries(modules).map(async ([path, resolver]) => {
          const mod = await resolver()
          return mod.default
        })
      )
      // sort by date desc
      entries.sort((a,b) => (b.date > a.date ? 1 : -1))
      setPosts(entries)
    })()
  }, [])

  return (
    <section id="blog" className="card">
      <h2>Blog</h2>
      <p className="muted">Short notes and longer posts. Click to read full posts.</p>

      <div className="tabs">
        <button className={`tab ${category === 'all' ? 'active' : ''}`} onClick={() => setCategory('all')}>All</button>
        <button className={`tab ${category === 'travel' ? 'active' : ''}`} onClick={() => setCategory('travel')}>Travel</button>
        <button className={`tab ${category === 'thoughts' ? 'active' : ''}`} onClick={() => setCategory('thoughts')}>Sharing Thoughts</button>
      </div>

      <div className="projects-list">
        {posts.filter(p => category === 'all' || (p.category && p.category === category)).map((p, i) => (
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
