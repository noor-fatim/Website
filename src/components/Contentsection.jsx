import React from 'react'
import './Content-section.css'
import { FaInstagramSquare } from "react-icons/fa";


function Contentsection() {
  return (
    <div className='content-section'>
        <div className='content-title'>
            <h1><span>Download Videos, Reels & Shorts</span> Download Accounts Analytics Instantly</h1>
        </div>
        <div className='content-desc'>
            <p>Easily download videos, reels, shorts, stories, and profile analytics from all major social media platforms Whether its <strong> Instagram, TikTok, YouTube, or Facebook.</strong> Our platform allows you to access and save content with just a few clicks.
            </p>
        </div>
        <div className='buttons'>
            <button className='social-btn'>
            <FaInstagramSquare />
            Get Started</button>
            <button className='social-btn2'>Preview Your Growth</button>

        </div>
      
    </div>
  )
}

export default Contentsection
