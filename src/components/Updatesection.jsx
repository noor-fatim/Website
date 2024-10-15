import React from 'react'
import './Update-style.css'
import UpdateCard from './UpdateCard'

function Updatesection() {
  return (
    <div className='update-section'>
        <div className="update-section-title">
            <h1>Latest Updates</h1>
        </div>
        <div className="update-section-link">
            <a href="#">Click to view all updates</a>
        </div>

        {/* cards */}
        <div className='card'>
            <UpdateCard/>
            <UpdateCard/>
            <UpdateCard/>
        </div>
      
    </div>
  )
}

export default Updatesection
