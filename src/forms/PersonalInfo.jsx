import React from "react";
import "./Forms.css";
import countries from "./countries";
import { useNavigate } from "react-router-dom";

const PersonalInfo = ({ formData, handleChange, errors, nextStep }) => {
  const navigate = useNavigate();

  return (
    <div className="personal-info-container">
      <h3>
        Please note: Upon completion, a registration fee of $50 will be charged.
      </h3>
      <h3>Section A: Personal Information</h3>

      <div className="form-grid">
        {/* Full Name */}
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
          />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>

        {/* Gender */}
        <div className="form-group">
          <label>Gender</label>
          <select
            value={formData.gender}
            onChange={(e) => handleChange("gender", e.target.value)}
          >
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          {errors.gender && <p className="error">{errors.gender}</p>}
        </div>

        {/* Age Group */}
        <div className="form-group">
          <label>Age Group</label>
          <select
            value={formData.ageGroup}
            onChange={(e) => handleChange("ageGroup", e.target.value)}
          >
            <option value="">Select</option>
            <option>18–25</option>
            <option>26–35</option>
            <option>36–45</option>
            <option>46–55</option>
            <option>56+</option>
          </select>
          {errors.ageGroup && <p className="error">{errors.ageGroup}</p>}
        </div>

        {/* Nationality */}
        <div className="form-group">
          <label>Nationality</label>
          <select
            value={formData.nationality}
            onChange={(e) => handleChange("nationality", e.target.value)}
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          {errors.nationality && <p className="error">{errors.nationality}</p>}
        </div>

        {/* Contact Number */}
        <div className="form-group">
          <label>Contact Number</label>
          <input
            type="tel"
            value={formData.contactNumber}
            onChange={(e) => handleChange("contactNumber", e.target.value)}
            placeholder="+27 123 456 789"
          />
          {errors.contactNumber && (
            <p className="error">{errors.contactNumber}</p>
          )}
        </div>

        {/* Email */}
        <div className="form-group" style={{ gridColumn: "1 / -1" }}>
          <label>Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
      </div>

      <div className="form-actions">
        <button className="next-btn" onClick={nextStep}>
          Next →
        </button>
      </div>

      <p className="back-to-course">
        <button
          type="button"
          onClick={() => navigate("/course/list")}
          className="back-button"
        >
          ← Back to Course
        </button>
      </p>
    </div>
  );
};

export default PersonalInfo;
