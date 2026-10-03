import React from 'react'
import ImageCard from './ImageCard'

function Gallery({ images }) {
  return (
    <section className="gallery" aria-label="Image gallery">
      {images.map((image) => (
        <ImageCard
          key={image.id}
          imageUrl={image.imageUrl}
          title={image.title}
          description={image.description}
        />
      ))}
    </section>
  )
}

export default Gallery
