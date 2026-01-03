import React from 'react'

const posts = [
  {title: 'My First Blog Post', href: '/blog/post-1.md'},
  {title: 'A Travel Story', href: '/blog/post-2.md'}
]

export default function Blog(){
  return (
    <section id="blog" className="card">
      <h2>Blog</h2>
      <p className="muted">Short notes and longer posts. Click to read full posts.</p>
      <ul>
        {posts.map((p, i) => (
          <li key={i}><a href={p.href}>{p.title}</a></li>
        ))}
      </ul>
    </section>
  )
}
