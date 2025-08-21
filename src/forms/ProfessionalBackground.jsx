import React from "react";
import "./Forms.css";

const ProfessionalBackground = ({ formData, handleChange, errors, nextStep, prevStep }) => (
  <div className="personal-info-container">
    <h3>Section B: Professional Background</h3>

    <div className="form-grid">
      {/* Occupation */}
      <div className="form-group">
        <label>Occupation</label>
        <input
          type="text"
          value={formData.occupation}
          onChange={(e) => handleChange("occupation", e.target.value)}
        />
        {errors.occupation && <p className="error">{errors.occupation}</p>}
      </div>

      {/* Organization */}
      <div className="form-group">
        <label>Organization</label>
        <input
          type="text"
          value={formData.organization}
          onChange={(e) => handleChange("organization", e.target.value)}
        />
        {errors.organization && <p className="error">{errors.organization}</p>}
      </div>

      {/* Qualification */}
      <div className="form-group">
        <label>Highest Qualification Attained</label>
        <input
          type="text"
          value={formData.qualification}
          onChange={(e) => handleChange("qualification", e.target.value)}
        />
        {errors.qualification && <p className="error">{errors.qualification}</p>}
      </div>

      {/* Specialization */}
      <div className="form-group">
        <label>Area of Specialization</label>
        <input
          type="text"
          value={formData.specialization}
          onChange={(e) => handleChange("specialization", e.target.value)}
        />
        {errors.specialization && <p className="error">{errors.specialization}</p>}
      </div>

      {/* Experience */}
      <div className="form-group">
        <label>Years of Experience</label>
        <select
          value={formData.experience}
          onChange={(e) => handleChange("experience", e.target.value)}
        >
          <option value="">Select</option>
          <option>None</option>
          <option>1–3</option>
          <option>4–6</option>
          <option>7–10</option>
          <option>10+</option>
        </select>
        {errors.experience && <p className="error">{errors.experience}</p>}
      </div>

      {/* Previous Training */}
      <div className="form-group" style={{ gridColumn: "1 / -1" }}>
        <label>Previous Relevant Training</label>
        <input
          type="text"
          value={formData.previousTraining}
          onChange={(e) => handleChange("previousTraining", e.target.value)}
        />
      </div>
    </div>

    <div className="form-actions">
      <button className="prev-btn" onClick={prevStep}>← Back</button>
      <button className="next-btn" onClick={nextStep}>Next →</button>
    </div>
  </div>
);

export default ProfessionalBackground;
