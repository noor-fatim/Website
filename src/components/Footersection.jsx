import React from 'react'
import './Footer-style.css'
import logo from '../assets/logo.png'

function Footersection() {
  return (
    <div class="footer-container">
            <div class="footer-section">
                <div class="left-footer-section">
                    <div class="logo-footer">
                        <div class="logo-img-footer"><img src={logo} alt="logo"/></div>
                    </div>
                    <p class="left-footer-desc">Dash Social download is a versatile project allowing users to easily download videos from our website.</p>
                </div>
                <div class="right-footer-section">
                    <div class="footer-products">
                        <h3>Tiktok Links</h3>
                        <ul>
                            <li>Analytics</li>
                            <li>Hashtag Generator</li>
                            <li>Video Downloader</li>
                            <li>Money Calculator</li>
                            <li>Follower Counters</li>
                            <li>Video Views</li>
                        </ul>
                    </div>
                    <div class="footer-products">
                        <h3>Instagram Links</h3>
                        <ul>
                            <li>Videos</li>
                            <li>Story</li>
                            <li>Reels</li>
                            <li>Photos</li>
                        </ul>
                    </div>
                    <div class="footer-products">
                        <h3>Facebook Links</h3>
                        <ul>
                            <li>Video</li>
                            <li>Story</li>
                            <li>Reels</li>
                            <li>Photos</li>
                            <li>Profile</li>
                            <li>Music</li>
                        </ul>
                    </div>
                    <div class="footer-products">
                        <h3>Youtube Links
                        </h3>
                        <ul>
                            <li>Profile</li>
                            <li>Videos</li>
                            <li>Playlist</li>
                            <li>Shorts</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="copyright-section">
                <p>&copy; 2020-2024 Present EduQuest. All rights reserved.</p>
            </div>
          </div>
  )
}

export default Footersection
