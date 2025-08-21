import React from 'react';
import './Header.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo.jpeg';   // ✅ replace with your actual logo file (PNG/JPG/SVG)




const Header = () => {
  return (
    <header className="ati-header">
      <div className="header-main">
        <div className="container">
          
          {/* ✅ Logo image instead of text */}
          <div className="logo">
            <a href="/">
              <img src={logo} alt="ATI Logo" className="logo-img" />
            </a>
          </div>

          <div className="header-contact">
            <a href="mailto:info@aims.org">
              <FaEnvelope /> info@alibel.org
            </a>
            <a href="tel:+27120232302">
              <FaPhone /> +27 12 033 6574
            </a>
          </div>

          {/* ✅ Navigation Menu (cleaned up) */}
          <nav className="main-nav">
            <ul>
              <li><a href="/">Home |</a></li>
              <li><a href="/about">About Us |</a></li>
              <li><a href="/contact">Contact Us |</a></li>
              <li><a href="/course/list">Our Training |</a></li>
              <li><a href="/online/course">Online Training |</a></li>
        
            </ul>
          </nav>

          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
   
            
    </header>
  );
};

export default Header;