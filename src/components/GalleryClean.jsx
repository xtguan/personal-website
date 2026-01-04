import React, { useState, useEffect } from 'react'

// Auto-load images placed in `src/photos` using Vite's glob import.
// To add photos, put them into `src/photos/` (jpg/png/svg) and they
// will automatically appear in the gallery.

export default function Gallery(){
  const [images, setImages] = useState([])

  useEffect(() => {
    const modules = import.meta.glob('../photos/*.{jpg,jpeg,png,svg}')
    ;(async () => {
      const entries = await Promise.all(
        Object.values(modules).map(async (resolver) => {
          const m = await resolver()
          return m.default
        })
      )
      setImages(entries)
    })()
  }, [])

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
