import React, { useState, useEffect } from 'react'
import albumsMap from '../data/photo-albums.json'

// Auto-load images placed in `src/photos` using Vite's glob import.
// To group photos into albums, add entries to `src/data/photo-albums.json`.
// Example: 'tampa-clearwater-beach-1.jpg': ['Tampa', 'Beach']

export default function Gallery(){
  const [images, setImages] = useState([]) // {src, name, albums}
  const [album, setAlbum] = useState('all')
  const [selected, setSelected] = useState(null)
  const [closing, setClosing] = useState(false)

  const handleClose = () => {
    setClosing(true)
    setTimeout(() => {
      setSelected(null)
      setClosing(false)
    }, 200)
  }

  useEffect(() => {
    const modules = import.meta.glob('../photos/*.{jpg,jpeg,png,svg}')
    ;(async () => {
      const entries = await Promise.all(
        Object.entries(modules).map(async ([path, resolver]) => {
          const m = await resolver()
          const parts = path.split('/')
          const name = parts[parts.length - 1]
          return { src: m.default, name, albums: albumsMap[name] || [] }
        })
      )
      // sort by filename for stability
      entries.sort((a,b) => a.name.localeCompare(b.name))
      setImages(entries)
    })()
  }, [])

  const allAlbums = Array.from(new Set(images.flatMap(i => i.albums))).sort()

  const filtered = images.filter(i => album === 'all' || (i.albums && i.albums.includes(album)))

  return (
    <section id="gallery" className="card">
      <h2>Photo Gallery</h2>
      <p className="muted">Browse photo albums. Click a tab to select an album, then click a photo to expand.</p>

      <div className="tabs">
        <button className={`tab ${album === 'all' ? 'active' : ''}`} onClick={() => setAlbum('all')}>All</button>
        {allAlbums.map(a => (
          <button key={a} className={`tab ${album === a ? 'active' : ''}`} onClick={() => setAlbum(a)}>{a}</button>
        ))}
      </div>

      <div className="gallery">
        {filtered.map((img, i) => (
          <div key={i} onClick={() => setSelected(img)} style={{cursor:'pointer'}}>
            <img src={img.src} alt={img.name} />
          </div>
        ))}
      </div>

      {selected && (
        <div className={`modal-overlay ${closing ? 'fade-out' : 'fade-in'}`} onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleClose} aria-label="Close photo">✕</button>
            <img src={selected.src} alt={selected.name} style={{maxWidth:'90vw', maxHeight:'80vh', borderRadius:8}} />
            <p className="muted" style={{marginTop:8}}>{selected.name}</p>
          </div>
        </div>
      )}
    </section>
  )
}
