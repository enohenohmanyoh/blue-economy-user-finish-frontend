import React from 'react';
import './ATI.css';

const ATI = () => {
  return (
    <div className="ati-page">
      <section className="ati-hero">
        <h1>Advanced Training Institute</h1>
        <p>Specialized programs for blue economy professionals</p>
      </section>

      <section className="ati-programs">
        <h2>Our Programs</h2>
        <div className="programs-grid">
          <div className="program-card">
            <h3>Marine Spatial Planning</h3>
            <p>Learn to balance conservation and development in marine areas</p>
            <button>View Details</button>
          </div>
          <div className="program-card">
            <h3>Ocean Renewable Energy</h3>
            <p>Master technologies for harnessing ocean energy sustainably</p>
            <button>View Details</button>
          </div>
          <div className="program-card">
            <h3>Blue Carbon Strategies</h3>
            <p>Develop expertise in coastal ecosystem carbon sequestration</p>
            <button>View Details</button>
          </div>
        </div>
      </section>

      <section className="ati-facilities">
        <h2>World-Class Facilities</h2>
        <div className="facilities-content">
          <div className="facilities-text">
            <p>Our institute features state-of-the-art laboratories, research vessels, and simulation centers to provide hands-on training in blue economy technologies.</p>
            <ul>
              <li>Marine Biotechnology Lab</li>
              <li>Offshore Energy Simulation Center</li>
              <li>Coastal Zone Management Studio</li>
              <li>Aquaculture Research Facility</li>
            </ul>
          </div>
          <div className="facilities-image">
            {/* Placeholder for facilities image */}
            <div className="image-placeholder">[ATI Facilities Image]</div>
          </div>
        </div>
      </section>

      <section className="ati-partners">
        <h2>Our Partners</h2>
        <div className="partners-logos">
          {/* Placeholder for partner logos */}
          <div className="logo-placeholder">Partner 1</div>
          <div className="logo-placeholder">Partner 2</div>
          <div className="logo-placeholder">Partner 3</div>
          <div className="logo-placeholder">Partner 4</div>
        </div>
      </section>
    </div>
  );
};

export default ATI;