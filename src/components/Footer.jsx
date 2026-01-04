import React from 'react'

export default function Footer(){
  return (
    <footer>
      <div className="social">
        <a href="https://github.com/xtguan">GitHub</a>
        <a href="#">LinkedIn</a>
        <a href="#">Instagram</a>
      </div>
      <div className="muted">© {new Date().getFullYear()} Xiaotang Guan</div>
    </footer>
  )
}
