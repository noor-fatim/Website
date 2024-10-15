import React from 'react'
import './Socialmedia-style.css'
import composerimg from '../assets/composer_threads.png'

function Socialmedia() {
  return (
    <div className='social-media-section'>
        <div className='social-media-title'>
            <h1>Compare TikTok Accounts Instantly</h1>
        </div>
        <div className='social-media-desc'>
            <p>Easily compare two TikTok profiles side by side with our reliable comparison tool. Analyze follower counts, engagement,and other key stats to get comprehensive insights in real-time.</p>
            <button className='media-btn'>Get started for free</button>
        </div>
        
        <div className='social-media-img'>
        <img src={composerimg} alt="Image above background" className="foreground-image"/>

        </div>
      
    </div>
  )
}

export default Socialmedia
