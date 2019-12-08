import React from 'react'

const Model = ({ modelSrc, modelLink, description }) => {
  return (
    <article className="6u 12u$(xsmall) work-item">
      <div class="sketchfab-embed-wrapper">
        <iframe
          title="A 3D model"
          width="100%"
          height="400"
          src={modelSrc}
          frameborder="0"
          allow="autoplay; fullscreen; vr"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        ></iframe>

        <p
          style={{
            fontSize: 13,
            fontWeight: 'normal',
            margin: 5,
            color: '#4A4A4A',
          }}
        >
          <a
            href={modelLink}
            target="_blank"
            style={{ fontWeight: 'bold', color: '#1CAAD9' }}
          >
            {description}
          </a>{' '}
          by{' '}
          <a
            href="https://sketchfab.com/lucasbaze?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
            target="_blank"
            style={{ fontWeight: 'bold', color: '#1CAAD9' }}
          >
            lucasbaze{' '}
          </a>
          on{' '}
          <a
            href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup"
            target="_blank"
            style={{ fontWeight: 'bold', color: '#1CAAD9' }}
          >
            Sketchfab
          </a>
        </p>
      </div>
    </article>
  )
}

export default Model
