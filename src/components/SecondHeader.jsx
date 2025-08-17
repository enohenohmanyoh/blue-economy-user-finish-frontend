import React, { useState } from 'react';
import './SecondHeader.css';

const SecondHeader = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <div className="second-header">
      <div className="second-header-container">
        <nav className="second-nav">
          <ul className="second-nav-list">

            {/* Testimonials */}
            <li
              className="second-nav-item dropdown"
              onMouseEnter={() => toggleDropdown('testimonials')}
              onMouseLeave={() => toggleDropdown(null)}
            >
              <span className="nav-link">
                Testimonials <span className="dropdown-arrow">▼</span>
              </span>
              {activeDropdown === 'testimonials' && (
                <div className="dropdown-menu">
                   <a href="/testimonials" className="dropdown-item">Testimonials</a>
                  <a href="/videos" className="dropdown-item">Videos Testimonials</a>
                </div>
              )}
            </li>

            {/* Team Building */}
            <li className="second-nav-item">
              <a href="/team-building" className="nav-link">Team Building</a>
            </li>

            {/* Training Centres */}
            <li
              className="second-nav-item dropdown"
              onMouseEnter={() => toggleDropdown('centres')}
              onMouseLeave={() => toggleDropdown(null)}
            >
              <span className="nav-link">
                Training Centres <span className="dropdown-arrow">▼</span>
              </span>
              {activeDropdown === 'centres' && (
                <div className="dropdown-menu">
                  <a href="/centres/pretoria" className="dropdown-item">Pretoria</a>
                  <a href="/centres/durban" className="dropdown-item">Durban</a>
                  <a href="/centres/cape-town" className="dropdown-item">Cape Town</a>
                  <a href="/centres/victoria-falls" className="dropdown-item">Victoria Falls</a>
                  <a href="/centres/dubai" className="dropdown-item">Dubai</a>
                  <a href="/centres/kigali" className="dropdown-item">Kigali</a>
                  <a href="/centres/other" className="dropdown-item">Other Popular Centers</a>
                </div>
              )}
            </li>

            {/* Events Calendar */}
            <li className="second-nav-item">
              <a href="/events" className="nav-link">Events Calendar</a>
            </li>

            {/* Memberships */}
            <li
              className="second-nav-item dropdown"
              onMouseEnter={() => toggleDropdown('memberships')}
              onMouseLeave={() => toggleDropdown(null)}
            >
              <span className="nav-link">
                Memberships/Accreditations <span className="dropdown-arrow">▼</span>
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

            {/* Downloads */}
            <li className="second-nav-item">
              <a href="/downloads" className="nav-link">Downloads</a>
            </li>

            {/* Gallery */}
            <li className="second-nav-item">
              <a href="/gallery" className="nav-link">Gallery</a>
            </li>

          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SecondHeader;
