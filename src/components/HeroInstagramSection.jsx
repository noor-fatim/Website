import React from 'react'
import './Heroinsta-style.css'
import HeroList from './HeroList'
import calendar from '../assets/calendar.png'

function HeroInstagramSection() {
  return (
    <div className='insta-hero-section'>
        <div className="insta-left-side">
        <div className='leftside-insta-img'>
            <img src={calendar} alt="Image above background" class="leftfront-image"/>
            </div>
        </div>

        {/* right side */}
        <div className="insta-right-side">
        <div className='insta-section-title'>
            <span>Instagram Downloads</span>
        </div>
        <div className="insta-section-label">
            <h2>Download Instagram Reels & Access Profile Stats</h2>
        </div>
        <div className="insta-section-desc">
            <p>Effortlessly download Instagram reels with just one click, making it easy to save your favorite content or repurpose it for your own use. Gain access to detailed profile statistics and insights that provide a comprehensive view of your accounts performance.</p>
        </div>
        <div className='insta-side-list'>
        <HeroList/>
        </div>
        </div>
      
    </div>
  )
}

export default HeroInstagramSection
