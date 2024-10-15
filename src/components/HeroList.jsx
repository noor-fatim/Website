import React from 'react'
import './Herolist-style.css'
import { TiTickOutline } from "react-icons/ti";


function HeroList() {
  return (
    <div className='list-section'>
        <ul>
            <li className='list'>
                <div className='list-img'>
                <TiTickOutline className='list-icon' />
                </div>
                <p><strong>Effortless Bulk Downloads: </strong> Download all videos from any profile with a single click.</p>
            </li>
            <li className='list'>
            <div className='list-img'>
                <TiTickOutline className='list-icon' />
                </div>
                <p><strong>Automatic Backups: </strong>  Securely back up your videos for easy access anytime.</p>
            </li>
            <li className='list'>
            <div className='list-img'>
                <TiTickOutline className='list-icon' />
                </div>
                <p><strong>Fast and Secure Management:  </strong>  Experience quick downloads and reliable content storage.</p>
            </li>
        </ul>

        <div className='list-btn'>
            <button className='herolist-btn'>Try it Now</button>
        </div>
      

    </div>
  )
}

export default HeroList
