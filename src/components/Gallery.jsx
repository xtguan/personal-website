import React from 'react'

// Auto-load images placed in `src/assets/photos` using Vite's glob import.
// To add photos, put them into `src/assets/photos/` (jpg/png/svg) and they
// will automatically appear in the gallery.
const modules = import.meta.globEager('../assets/photos/*.{jpg,jpeg,png,svg}')
const images = Object.values(modules).map(m => m.default)

export default function Gallery(){
  return (
    <section id="gallery" className="card">
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
