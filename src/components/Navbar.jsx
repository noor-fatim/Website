import React, { useState } from 'react'
import logo from '../assets/logo.png'
import './Navbar-style.css'
import { RxHamburgerMenu } from "react-icons/rx";


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
        <div className='navbar-logo'>
            <img src={logo} alt="logo" />
        </div>
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
            <ul className='navbar-links-list'>
                <li><a href="#">Features</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">FAQ</a></li>
            </ul>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
      </div>
        </div>
      
    </div>
  )
}

export default Navbar
