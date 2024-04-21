import React from 'react'
import './Card.css'

function Card({imgUrl, title, desc}) {
  return (
    <div className='feature-cards'>
      <div className='cards-header'>
        <img src={imgUrl} alt={title} />
        <h3>{title}</h3>
      </div>
      <p>{desc}</p>
    </div>
  )
}

export default Card