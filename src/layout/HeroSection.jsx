import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Unlock the Potential of Blue Economy</h1>
        <p>Discover sustainable ocean-based solutions for economic growth and environmental preservation</p>
        <div className="hero-buttons">
          <button className="primary-btn">Explore Courses</button>
          <button className="secondary-btn">Book a Course</button>
        </div>
      </div>
      <div className="hero-image">
        {/* Placeholder for hero image */}
        <div className="image-placeholder">[Ocean Sustainability Image]</div>
      </div>
    </section>
  );
};

export default HeroSection;