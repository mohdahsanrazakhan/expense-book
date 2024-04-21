import React from 'react'
import './ManageForm.css'
import GradientHeader from './GradientHeader'
import Button from './Button'

function ManageForm() {
  return (
    <div className='manage-form'>
      <GradientHeader title="Manage your travel and expenses the smart way!" />
      <div id='form'>
        <input type="text" name="name" id="name" placeholder='Name' />
        <input type="text" name="email" id="email" placeholder='Official email ID' />
        <Button />
      </div>
      <small>30 Days free trial • Upto 10 users</small>
    </div>
  )
}

export default ManageForm