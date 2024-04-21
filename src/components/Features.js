import React from 'react'
import GradientHeader from './GradientHeader'
import Container from './Container'
import './Features.css'

function Features() {
  return (
    <div className='feature-group'>
      <GradientHeader title="Features that suits your needs" />
      <Container />
    </div>
  )
}

export default Features