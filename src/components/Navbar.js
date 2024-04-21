import React, { useState } from 'react'
import './Navbar.css'
import Button from './Button'
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <img src="" alt="logo" />
      <div className='menu' onClick={toggleMenu}>
        <FiMenu />
      </div>
      <div className={`nav-group ${showMenu ? 'show' : ''}`}>
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