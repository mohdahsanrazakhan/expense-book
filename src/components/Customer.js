import React from 'react'
import './Customer.css'
import GradientHeader from './GradientHeader'
import CustomerCard from './CustomerCard'

function Customer() {
  return (
    <div className='customer'>
      <GradientHeader title="Our customers love us" />
      <div className='customer-flex'>
        <CustomerCard message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod." imgUrl="photo" name="Rohit Mehra" role="CFO, XYZ" />
        <CustomerCard message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod." imgUrl="photo" name="Rohit Mehra" role="CFO, XYZ" />
        <CustomerCard message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod." imgUrl="photo" name="Rohit Mehra" role="CFO, XYZ" />
      </div>
    </div>
  )
}

export default Customer