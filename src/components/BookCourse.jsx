// src/pages/BookCourse.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';   // ✅ added Link
import './BookCourse.css';
import logo from "../assets/logo.jpeg";

const BookCourse = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    date: '',
    message: ''
  });

  const courses = [
    'Web Development Bootcamp',
    'Data Science Fundamentals',
    'UX/UI Design Masterclass',
    'Digital Marketing Certification',
    'Cloud Computing Essentials'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.course || !formData.date) {
      alert('Please fill in all required fields before proceeding to payment.');
      return;
    }

    // ✅ Redirect to /payment and pass formData
    navigate('/payment', { state: { formData } });
  };

  return (
    <section className="booking-layout">
      <div className="logo-container">
        <img src={logo} alt="Institute Logo" className="booking-logo" />
      </div>

      <div className="form-container">
        <h2>Course Booking Form</h2>
        
        <form onSubmit={handleSubmit} className="booking-form">
          {/* --- Input fields --- */}
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+1 234 567 8900"
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Start Date *</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="course">Select Course *</label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">-- Select a Course --</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>{course}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Additional Notes</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Any special requirements or questions"
            ></textarea>
          </div>

          {/* Submit */}
          <button type="submit" className="submit-btn">
            Proceed to Payment
          </button>
        </form>

        {/* ✅ Extra Router Link to /payment */}
        
      </div>
    </section>
  );
};

export default BookCourse;
