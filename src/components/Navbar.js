import React from 'react'
import './Navbar.css'
import Button from './Button'

function Navbar() {
  return (
    <nav>
      <img src="" alt="logo" />
      <div className='nav-group'>
        <ul className='nav-links'>
          <li>Blogs</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Integrations</li>
        </ul>
        <Button />
      </div>
    </nav>
  )
}

export default Navbar