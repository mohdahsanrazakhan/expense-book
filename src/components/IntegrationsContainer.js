import React from 'react'
import Card from './Card'
import './IntegrationsContainer.css'

function IntegrationsContainer() {
  return (
    <div className='container-grid'>
        <div className='gradient-card'>
          <Card imgUrl={"icon"} title={"Lorem ipsum dolor"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod."} />
        </div>
        <div className='gradient-card'>
          <Card imgUrl={"icon"} title={"Lorem ipsum dolor"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod."} />
        </div>
        <div className='gradient-card'>
          <Card imgUrl={"icon"} title={"Lorem ipsum dolor"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod."} />
        </div>
    </div>
  )
}

export default IntegrationsContainer