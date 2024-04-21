import React from 'react'
import Button from './Button'
import './Hero.css'
import hotjar from '../assets/images/hotjar.png'
import GradientHeader from './GradientHeader'

function Hero() {
  return (
    <div className='hero'>
      <GradientHeader title="The World's Most Configurable" />
      <h1>Travel & Expense Management Software</h1>
      <p>Configure <a href="#">any</a> rule. Enable a world class mobile experience for your users. Get seamless reporting & integrations. Inbuild OCR expense scanning. Manage travel & non-travel expenses. Open APIs to connect with external systems.</p>
      <div id='form'>
        <input type="text" name="name" id="name" placeholder='Name' />
        <input type="text" name="email" id="email" placeholder='Official email ID' />
        <Button />
      </div>
      <small>30 Days free trial • Upto 10 users</small>
      <div className='enterprises'>
        <p>Used by over 50 enterprises</p>
        <div className='enterprises-logo'>
          <img src={hotjar} alt="enterpricses logo" />
          <img src={hotjar} alt="enterpricses logo" />
          <img src={hotjar} alt="enterpricses logo" />
          <img src={hotjar} alt="enterpricses logo" />
          <img src={hotjar} alt="enterpricses logo" />
          <img src={hotjar} alt="enterpricses logo" />
        </div>
      </div>
    </div>
  )
}

export default Hero