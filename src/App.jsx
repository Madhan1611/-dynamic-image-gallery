import React from 'react'
import Gallery from './components/Gallery'
import { galleryImages } from './data/images'

function App() {
  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <p className="eyebrow">React Project</p>
          <h1>Dynamic Image Gallery</h1>
          <p className="hero-text">
            A reusable, responsive gallery powered by React components, props, and the map() method.
          </p>
          <div className="gallery-count" aria-label={`${galleryImages.length} images in gallery`}>
            {galleryImages.length} Images
          </div>
        </div>
      </header>

      <main className="container">
        <Gallery images={galleryImages} />
      </main>

      <footer className="footer">
        <p>Built with React • Reusable components • Responsive design</p>
      </footer>
    </>
  )
}

export default App
