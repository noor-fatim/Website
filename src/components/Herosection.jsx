import React from 'react'
import './Herosection-style.css'
import HeroList from './HeroList'
import calendar from '../assets/calendar.png'


function Herosection() {
  return (
    <div className='hero-section'>
        <div className="left-side">
        <div className='hero-section-title'>
            <span>Video Download</span>
        </div>
        <div className="hero-section-label">
            <h2>One-Click Bulk Video Download & Backup!</h2>
        </div>
        <div className="hero-section-desc">
            <p>Never lose your precious videos again! With our bulk download feature, you can easily download all videos from any profile in just one click. Enjoy automatic backups for fast, secure, and hassle-free content management, ensuring your videos are always safe and accessible.</p>
        </div>
        <div className='hero-side-list'>
        <HeroList/>
        </div>
        
        </div>

        {/* right side */}
        <div className="right-side">
            <div className='right-side-img'>
            <img src={calendar} alt="Image above background" class="rightfront-image"/>
            </div>
        </div>
      
    </div>
  )
}

export default Herosection
