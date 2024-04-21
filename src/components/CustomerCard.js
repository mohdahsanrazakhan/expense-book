import React from 'react'
import './CustomerCard.css'

function CustomerCard({message, imgUrl, name, role}) {
  return (
    <div className='customer-card'>
      <p className='message'>{message}</p>
      <div className='customer-info'>
        <img src={imgUrl} alt="profile" />
        <div>
          <p>{name}</p>
          <small>{role}</small>
        </div>
      </div>
    </div>
  )
}

export default CustomerCard