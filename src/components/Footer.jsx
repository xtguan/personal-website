import React from 'react'

export default function Footer(){
  return (
    <footer>
      <div className="social">
        <a href="https://github.com/yourusername">GitHub</a>
        <a href="#">LinkedIn</a>
        <a href="#">Instagram</a>
      </div>
      <div className="muted">© {new Date().getFullYear()} Your Name</div>
    </footer>
  )
}
