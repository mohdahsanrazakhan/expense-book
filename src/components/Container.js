import React from 'react'
import Card from './Card'
import data from '../assets/features.json'
import './Container.css'

function Container() {
  return (
    <div className='container-grid'>
      {data.map(info => (
        <Card imgUrl={info.imgUrl} title={info.title} desc={info.describe} />
      ))}
    </div>
  )
}

export default Container