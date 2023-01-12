import React from 'react'
import './Doctor.css'

const Doctor = () => {
  return (
    <div className='section-four'>

<div className="flex-contain">
  <div className="item-left">
    <p style={{color:'orange'}}>Are you a five star doctor<span style={{color:'#006'}}>?</span></p>
    <p style={{fontSize:'20px',color:'#006'}}>signUp to reach millions of patient</p>
    <ul style={{fontSize:'15px',color:'#006' }}  className='ul'>
        <li>Get more appointments through online bookings</li>
        <li>Create and view patient records from anywhere</li>
        <li style={{marginLeft:'-110px'}}>Manage your schedule efficiently</li>
    </ul>
  </div>
  <div className="item-right"></div>
</div>

    </div>
  )
}

export default Doctor