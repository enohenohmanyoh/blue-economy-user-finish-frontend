import React from "react";
import "./Forms.css";

const TrainingGoals = ({ formData, handleChange, errors, nextStep, prevStep }) => (
  <div className="personal-info-container">
    <h3>Section D: Training Goals</h3>

    <div className="form-grid">
      <div className="form-group" style={{ gridColumn: "1 / -1" }}>
        <label>Which specific courses are you most interested in?</label>
        <textarea
          value={formData.trainingGoals}
          onChange={(e) => handleChange("trainingGoals", e.target.value)}
          rows={3}
        />
        {errors.trainingGoals && <p className="error">{errors.trainingGoals}</p>}
      </div>

      <div className="form-group" style={{ gridColumn: "1 / -1" }}>
        <label>Expected Professional/Organizational Outcomes</label>
        <textarea
          value={formData.outcomes}
          onChange={(e) => handleChange("outcomes", e.target.value)}
          rows={3}
        />
        {errors.outcomes && <p className="error">{errors.outcomes}</p>}
      </div>

      <div className="form-group">
        <label>Preferred Training Mode</label>
        <select
          value={formData.trainingMode}
          onChange={(e) => handleChange("trainingMode", e.target.value)}
        >
          <option value="">Select</option>
          <option>In-person</option>
          <option>Online</option>
          <option>Hybrid</option>
          <option>Field-based</option>
        </select>
        {errors.trainingMode && <p className="error">{errors.trainingMode}</p>}
      </div>

      <div className="form-group" style={{ gridColumn: "1 / -1" }}>
        <label>Additional Remarks</label>
        <textarea
          value={formData.remarks}
          onChange={(e) => handleChange("remarks", e.target.value)}
          rows={3}
        />
      </div>
    </div>

    <div className="form-actions">
      <button className="prev-btn" onClick={prevStep}>← Back</button>
      <button className="next-btn" onClick={nextStep}>Next →</button>
    </div>
  </div>
);

export default TrainingGoals;
