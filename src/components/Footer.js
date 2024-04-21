import React from 'react'
import './Footer.css'
import GradientHeader from './GradientHeader'

function Footer() {
  return (
    <footer>
      <div className='footer-top'>
        <img src="" alt="logo" />
        <div className='footer-info'>
          <div>
            <img src="" alt="logo" />
            <p>Address</p>
          </div>
          <div>
            <img src="" alt="logo" />
            <p>+91 1234567890</p>
          </div>
          <div className='social-media'>
            <p>Social Media</p>
            <img src="" alt="linkedin" />
            <img src="" alt="youtube" />
            <img src="" alt="instagram" />
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <ul className='footer-links'>
          <li>Blogs</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Integrations</li>
        </ul>
        <p>Copyright &copy; • ExpenseBook</p>
      </div>
    </footer>
  )
}

export default Footer