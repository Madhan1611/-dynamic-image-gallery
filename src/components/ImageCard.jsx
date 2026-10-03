import React from 'react'

function ImageCard({ imageUrl, title, description }) {
  return (
    <article className="image-card">
      <div className="image-wrapper">
        <img src={imageUrl} alt={title} loading="lazy" />
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default ImageCard
