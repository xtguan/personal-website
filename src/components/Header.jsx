import React from 'react'

export default function Header(){
  return (
    <header>
      <div className="brand">Your Name</div>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#blog">Blog</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}
