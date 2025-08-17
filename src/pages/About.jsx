import React from 'react';
import './About.css';
import aboutHeroImg from '../assets/blue-about.png';
import aboutImage from '../assets/logo.jpeg'; // Add your image file to assets

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section - Unchanged */}
      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${aboutHeroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '500px'
        }}
      >
        <div className="hero-content">
          <h1>About AIMS</h1>
          <p>The Hub of Africa's Blue Economy Capacity Building</p>
        </div>
      </section>

      {/* Modified Who We Are Section */}
      <section className="intro-section">
        <div className="intro-container">
          <div className="intro-text">
            <h2>Who We Are</h2>
            <p>
              The African Institute of Maritime Studies (AIMS) is the central hub dedicated to
              building capacity to harness the economic opportunities of Africa's blue economy. 
              Our approach combines robust academic programs, practical research, and experiential 
              learning through collaborative program design with stakeholders. This enables us to 
              cultivate the necessary skills to support both economic development and the preservation 
              of Africa's marine ecosystems, resources, and biodiversity.
            </p>
          </div>
          <div className="intro-image">
            <img src={aboutImage} alt="AIMS Maritime Studies" />
          </div>
        </div>
      </section>

      {/* Rest of the content remains EXACTLY as before */}
      <section className="vision-mission">
        <div className="vm-box">
          <h2>Vision</h2>
          <p>
            To drive the development of Africa's maritime sector by promoting the growth of the 
            blue economy through enhanced skills development, education, training, and capacity 
            building to support inclusive and sustainable development.
          </p>
        </div>
        <div className="vm-box">
          <h2>Mission</h2>
          <ul>
            <li>Encourage and promote partnerships among multiple stakeholders for the development of the blue economy to ensure inclusivity at local, national, and regional levels.</li>
            <li>Offer tailored training programs designed in collaboration with stakeholders to balance economic growth with marine conservation efforts.</li>
            <li>Implement a master-class awareness program for blue economy development to enhance inclusivity through participatory training, stakeholder engagement, and advocacy tools.</li>
            <li>Deliver maritime education and training programs, both generic and industry-specific, to enhance the skills of the maritime workforce, boost competitiveness, and foster innovation and creativity in the maritime sectors.</li>
          </ul>
        </div>
      </section>

      {/* Values, Goals, and Competitive Edge sections remain unchanged */}
      <section className="values-section">
        {/* ... existing values content ... */}
      </section>

      <section className="goals-section">
        {/* ... existing goals content ... */}
      </section>

      <section className="edge-section">
        {/* ... existing competitive edge content ... */}
      </section>
    </div>
  );
};

export default About;