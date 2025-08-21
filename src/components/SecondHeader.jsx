import React, { useState, useEffect, useRef } from 'react';
import { FaUserCircle } from "react-icons/fa";
import './SecondHeader.css';

const SecondHeader = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRefs = useRef({});

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside any dropdown
      let clickedOutside = true;
      
      for (const key in dropdownRefs.current) {
        if (dropdownRefs.current[key] && dropdownRefs.current[key].contains(event.target)) {
          clickedOutside = false;
          break;
        }
      }
      
      if (clickedOutside) {
        setActiveDropdown(null);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownToggle = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  return (
    <div className="second-header">
      <div className="second-header-container">
        <nav className="second-nav">
          <ul className="second-nav-list">

            {/* Testimonials */}
            <li className="second-nav-item"
                ref={el => dropdownRefs.current.testimonials = el}
                onMouseEnter={() => setActiveDropdown('testimonials')}
                onMouseLeave={() => activeDropdown === 'testimonials' && setActiveDropdown(null)}>
              <span className="nav-link" onClick={() => handleDropdownToggle('testimonials')}>
                Testimonials ▼
              </span>
              {activeDropdown === 'testimonials' && (
                <div className="dropdown-menu">
                  <a href="/gallery" className="dropdown-item">Videos Testimonials</a>
                </div>
              )}
            </li>

            {/* Training Centres */}
            <li className="second-nav-item"
                ref={el => dropdownRefs.current.centres = el}
                onMouseEnter={() => setActiveDropdown('centres')}
                onMouseLeave={() => activeDropdown === 'centres' && setActiveDropdown(null)}>
              <span className="nav-link" onClick={() => handleDropdownToggle('centres')}>
                Training Centres ▼
              </span>
              {activeDropdown === 'centres' && (
                <div className="dropdown-menu">
                  <a href="/center/pretoria" className="dropdown-item">Pretoria</a>
                  <a href="/center/durban" className="dropdown-item">Durban</a>
                  <a href="/center/santon" className="dropdown-item">Sandton</a>
              
                  <a href="/center/capetown" className="dropdown-item">Cape Town</a>
                </div>
              )}
            </li>

            {/* Events Calendar */}
            <li className="second-nav-item">
              <a href="/event/list" className="nav-link">Events Calendar</a>
            </li>

            {/* Memberships / Accreditations */}
            <li className="second-nav-item"
                ref={el => dropdownRefs.current.memberships = el}
                onMouseEnter={() => setActiveDropdown('memberships')}
                onMouseLeave={() => activeDropdown === 'memberships' && setActiveDropdown(null)}>
              <span className="nav-link" onClick={() => handleDropdownToggle('memberships')}>
                Memberships/Accreditations ▼
              </span>
              {activeDropdown === 'memberships' && (
                <div className="dropdown-menu">
                  <a href="/memberships/sa-association" className="dropdown-item">Southern African Association</a>
                  <a href="/memberships/sa-quality" className="dropdown-item">South African Quality Institute</a>
                  <a href="/memberships/services-seta" className="dropdown-item">Services SETA Accreditation</a>
                  <a href="/memberships/lgseta" className="dropdown-item">LGSETA Accreditation</a>
                </div>
              )}
            </li>

            {/* Gallery */}
            <li className="second-nav-item">
              <a href="/gallery" className="nav-link">Gallery</a>
            </li>

            {/* Team Builder */}
            <li className="second-nav-item">
              <a href="/team" className="nav-link">Team Builder</a>
            </li>

            {/* Account Dropdown with human icon */}
            <li className="second-nav-item"
                ref={el => dropdownRefs.current.user = el}
                onMouseEnter={() => setActiveDropdown('user')}
                onMouseLeave={() => activeDropdown === 'user' && setActiveDropdown(null)}>
              <div className="user-icon-link" onClick={() => handleDropdownToggle('user')}>
                <FaUserCircle className="nav-icon" size={24} />
                <span className="dropdown-arrow">▼</span>
              </div>
              {activeDropdown === 'user' && (
                <div className="dropdown-menu">
                  <a href="/login" className="dropdown-item">Login</a>
                  <a href="/register" className="dropdown-item">Create Account</a>
                </div>
              )}
            </li>

          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SecondHeader;