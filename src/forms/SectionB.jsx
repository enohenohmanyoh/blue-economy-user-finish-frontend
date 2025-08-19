import React from "react";

const SectionB = ({ formData, handleChange, errors }) => (
  <div>
    <h3>Section B: Professional Background</h3>

    <label>Highest Qualification Attained</label>
    <input
      type="text"
      value={formData.qualification}
      onChange={(e) => handleChange("qualification", e.target.value)}
    />
    {errors.qualification && <p className="error">{errors.qualification}</p>}

    <label>Area of Specialization</label>
    <input
      type="text"
      value={formData.specialization}
      onChange={(e) => handleChange("specialization", e.target.value)}
    />
    {errors.specialization && <p className="error">{errors.specialization}</p>}

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

    <label>Previous Relevant Training</label>
    <input
      type="text"
      value={formData.previousTraining}
      onChange={(e) => handleChange("previousTraining", e.target.value)}
    />
  </div>
);

export default SectionB;
