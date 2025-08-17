import React from "react";
import "./Contact.css";
import logo from "../assets/logo.jpeg"; // replace with your logo
import mapImg from "../assets/map.png"; // replace with your static map image

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Main Content - Modified layout */}
      <div className="contact-content">
        {/* Left Section with Logo and Contact Info */}
        <div className="left-section">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo-image" />
          </div>
          <div className="contact-info">
            <h2>Contact Info</h2>
            <div className="info-card">
              <h3><i className="fas fa-map-marker-alt"></i> Address</h3>
              <p>679 stanza bopape street, Pretoria</p>
            </div>
            <div className="info-card">
              <h3><i className="fas fa-phone"></i> Phone</h3>
              <p>+27 123 456 789</p>
            </div>
            <div className="info-card">
              <h3><i className="fas fa-envelope"></i> Email</h3>
              <p><a href="mailto:info@example.com">info@example.com</a></p>
            </div>
          </div>
        </div>

        {/* Right Section with Contact Form */}
        <div className="right-section">
          <h1 className="form-title">Contact Us</h1>
          <p className="form-subtitle">We'd love to hear from you</p>
          <div className="contact-form-container">
            <form>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Your Name" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="Your Email" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Write your message here"></textarea>
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="contact-map">
        <h2>Find Us</h2>
        <div className="map-container">
          {/* ✅ Static map image instead of live map */}
          <img src={mapImg} alt="Our Location Map" className="map-placeholder" />
        </div>
      </div>
    </div>
  );
};

export default Contact;