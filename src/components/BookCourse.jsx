import React from "react";
import "./BookCourse.css";   // ✅ reuse same styling as BookCourse

const courses = [
  "Web Development Bootcamp",
  "Data Science Fundamentals",
  "UX/UI Design Masterclass",
  "Digital Marketing Certification",
  "Cloud Computing Essentials"
];

const SectionE = ({ formData, handleChange, errors }) => (
  <div className="form-container">
    <h3>Section E: Book a Course</h3>

    <div className="form-group">
      <label htmlFor="name">Full Name *</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.fullName}
        onChange={(e) => handleChange("fullName", e.target.value)}
        placeholder="John Doe"
      />
      {errors.fullName && <p className="error">{errors.fullName}</p>}
    </div>

    <div className="form-group">
      <label htmlFor="email">Email *</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={(e) => handleChange("email", e.target.value)}
        placeholder="john@example.com"
      />
      {errors.email && <p className="error">{errors.email}</p>}
    </div>

    <div className="form-group">
      <label htmlFor="phone">Phone *</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.contactNumber}
        onChange={(e) => handleChange("contactNumber", e.target.value)}
        placeholder="+1 234 567 8900"
      />
      {errors.contactNumber && <p className="error">{errors.contactNumber}</p>}
    </div>

    <div className="form-group">
      <label htmlFor="date">Start Date *</label>
      <input
        type="date"
        id="date"
        name="date"
        value={formData.date}
        min={new Date().toISOString().split("T")[0]}
        onChange={(e) => handleChange("date", e.target.value)}
      />
      {errors.date && <p className="error">{errors.date}</p>}
    </div>

    <div className="form-group">
      <label htmlFor="course">Select Course *</label>
      <select
        id="course"
        name="course"
        value={formData.course}
        onChange={(e) => handleChange("course", e.target.value)}
      >
        <option value="">-- Select a Course --</option>
        {courses.map((c, index) => (
          <option key={index} value={c}>
            {c}
          </option>
        ))}
      </select>
      {errors.course && <p className="error">{errors.course}</p>}
    </div>

    <div className="form-group">
      <label htmlFor="message">Additional Notes</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={(e) => handleChange("message", e.target.value)}
        rows="4"
        placeholder="Any special requirements or questions"
      ></textarea>
    </div>
  </div>
);

export default SectionE;
