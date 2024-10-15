import React from 'react'
import './Image-style.css'
import dashboard from '../assets/Dashboard-img.png';

function Image() {
  return (
    <div className='image-container'>
      <img src={dashboard} alt="Dashboard" />
    </div>
  )
}

export default Image
