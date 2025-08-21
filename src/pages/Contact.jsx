import React, { useState } from "react";
import axios from "axios"; // make sure axios is installed
import "./Contact.css";
import logo from "../assets/logo.jpeg";
import mapImg from "../assets/map.png";
import Header from "../components/Header";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/contact", formData); // Spring Boot endpoint
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Try again later.");
    }
  };

  return (
    <div className="contact-page">
      <Header />
      <div className="contact-content">
        <div className="left-section">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo-image" />
          </div>
          <div className="contact-info">
            <h2>Contact Info</h2>
            <div className="info-card">
              <h3>Address</h3>
              <p>679 stanza bopape street, Pretoria</p>
            </div>
            <div className="info-card">
              <h3>Phone</h3>
              <p>+27 123 456 789</p>
            </div>
            <div className="info-card">
              <h3>Email</h3>
              <p><a href="mailto:info@example.com">info@example.com</a></p>
            </div>
          </div>
        </div>

        <div className="right-section">
          <h1 className="form-title">Contact Us</h1>
          <p className="form-subtitle">We'd love to hear from you</p>
          <div className="contact-form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      <div className="contact-map">
        <h2>Find Us</h2>
        <div className="map-container">
          <img src={mapImg} alt="Our Location Map" className="map-placeholder" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
