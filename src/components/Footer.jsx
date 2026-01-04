import React from 'react'

export default function Footer(){
  return (
    <footer>
      <div className="social">
        <a href="https://github.com/xtguan">GitHub</a>
        <a href="https://www.linkedin.com/in/eva-xiaotang-guan/">LinkedIn</a>
        <a href="https://www.instagram.com/xtguan.arts">Instagram</a>
      </div>
      <div className="muted">© {new Date().getFullYear()} Xiaotang Guan</div>
    </footer>
  )
}
