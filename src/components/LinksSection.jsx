import React from 'react'
import './Links-style.css'
import logo from '../assets/logo.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import youtube from '../assets/youtube.png'
import tiktok from '../assets/tiktok.png'



function LinksSection() {
  return (
    <div className='links-social-section'>
        <div className="links-social-img">
            <img src={logo} alt="logo" />
        </div>
        <div className="links-social-desc">
            <p>Dash Social Download is a comprehensive social media management platform that enables you to download and analyzeaccounts across TikTok, YouTube, and Instagram, providing valuable insights and data at your fingertips.</p>
        </div>
        <div className="links-social-media-section">
            <div className="logos">
            <img src={facebook} alt="facebook" />
            </div>
            <div className="logos">
            <img src={instagram} alt="instagram" />
            </div>
            <div className="logos">
            <img src={youtube} alt="youtube" />
            </div>
            <div id="tiktok">
            <img src={tiktok} alt="tiktok" />
            </div>
        </div>
      
    </div>
  )
}

export default LinksSection
