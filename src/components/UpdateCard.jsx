import React from 'react'
import './UpdateCard-style.css'
import blog from '../assets/blog.png'

function UpdateCard() {
  return (
    <div className='card-container'>
        <div className="card-image-section">
            <img src={blog} alt="Blog-image" />
        </div>
        <div className="card-title-section">
            <h3>The All-New Explore Tab in Dashboard Social Download: Your One-Stop Shop for Content Ideas and Industry News</h3>
        </div>
        <div className="card-desc-section">
            <p>Struggling to find fresh content & stay on top of industry news? Discover Dashboard Social Downloads all-new Explore Tab! It streamlines content discovery, curates trending articles, & integrates your favorite RSS Feeds. Schedule high-quality social media posts in minutes & take your content creation to the next level!</p>
        </div>
        <div className="card-date-section">
            <p>Apr 3, 2024</p>
        </div>

    </div>
  )
}

export default UpdateCard
