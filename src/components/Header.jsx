import React, { useState } from 'react';
import './Header.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhone, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.jpeg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="ati-header">
      <div className="header-main">
        <div className="container">

          {/* ✅ Logo + Contact grouped together */}
          <div className="logo-contact">
            <div className="logo">
              <a href="/">
                <img src={logo} alt="ATI Logo" className="logo-img" />
              </a>
            </div>

            <div className="header-contact">
              <a href="mailto:info@alibel.org"><FaEnvelope /> info@alibel.org</a>
              <a href="tel:+27120232302"><FaPhone /> +27 12 033 6574</a>
            </div>
          </div>

          {/* ✅ Hamburger (mobile only) */}
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </div>

          {/* ✅ Nav + Social */}
          <div className={`nav-wrapper ${menuOpen ? "open" : ""}`}>
            <nav className="main-nav">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/course/list">Our Training</a></li>
                <li><a href="/online/course">Online Training</a></li>
              </ul>
            </nav>

            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
              <a href="https://whatsapp.com" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
