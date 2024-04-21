import React from 'react'
import GradientHeader from './GradientHeader'
import './Integrations.css'
import IntegrationsContainer from './IntegrationsContainer'

function Integrations() {
  return (
    <div className='integrations'>
      <GradientHeader title="Integrations" />
      <IntegrationsContainer />
    </div>
  )
}

export default Integrations