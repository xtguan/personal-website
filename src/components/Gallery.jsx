import React from 'react'

const images = [
  '/photos/sample1.svg',
  '/photos/sample2.svg',
  '/photos/sample3.svg'
]

export default function Gallery(){
  return (
    <section id="gallery">
      <h2>Photo Gallery</h2>
      <p className="muted">A small selection of photos from travel and photography projects.</p>
      <div className="gallery">
        {images.map((src,i) => (
          <div key={i}><img src={src} alt={`photo-${i+1}`} /></div>
        ))}
      </div>
    </section>
  )
}
