import React from "react";

const SectionD = ({ formData, handleChange, errors }) => (
  <div>
    <h3>Section D: Training Goals</h3>

    <label>Which specific courses are you most interested in?</label>
    <textarea
      value={formData.trainingGoals}
      onChange={(e) => handleChange("trainingGoals", e.target.value)}
    />
    {errors.trainingGoals && <p className="error">{errors.trainingGoals}</p>}

    <label>Expected Professional/Organizational Outcomes</label>
    <textarea
      value={formData.outcomes}
      onChange={(e) => handleChange("outcomes", e.target.value)}
    />
    {errors.outcomes && <p className="error">{errors.outcomes}</p>}

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

    <label>Additional Remarks</label>
    <textarea
      value={formData.remarks}
      onChange={(e) => handleChange("remarks", e.target.value)}
    />
  </div>
);

export default SectionD;
