import React from 'react'
import './Superpower-style.css'
import superpower from '../assets/superpowers.png'

function Superpower() {
  return (
    <div className='superpower-section'>
      <div className='superpower-title'>
        <h1>More Superpowers</h1>
      </div>
      <div className="superpower-desc">
        <p>In addition to downloading, Dashboard Social Download offers a vast range of tools that enhance your social media experience, all in just a few clicks.</p>
      </div>


      <div className='superpower-media-img'>
        <img src={superpower} alt="Image above background" className="superpower-image"/>

        </div>

    </div>
  )
}

export default Superpower
