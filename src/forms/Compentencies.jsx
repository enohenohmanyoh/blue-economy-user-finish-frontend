import React from "react";
import "./Forms.css"; // ✅ shared CSS

const competenciesList = [
  "Maritime Spatial Planning",
  "Blue economy resilience",
  "Climate finance",
  "Shipping and maritime transport management",
];

const Competencies = ({ formData, handleChange, errors, nextStep, prevStep }) => {
  const handleCompetencyChange = (course, level) => {
    handleChange("competencies", {
      ...formData.competencies,
      [course]: level,
    });
  };

  return (
    <div className="personal-info-container">
      <h3>Section C: Self-Assessment of Competencies</h3>

      <div className="form-grid">
        {competenciesList.map((course) => (
          <div key={course} className="form-group">
            <label>{course}</label>
            <select
              value={formData.competencies[course] || ""}
              onChange={(e) => handleCompetencyChange(course, e.target.value)}
            >
              <option value="">Select</option>
              <option>None</option>
              <option>Basic</option>
              <option>Intermediate</option>
              <option>Advanced</option>
              <option>High Priority</option>
            </select>

            {errors.competencies && !formData.competencies[course] && (
              <p className="error">Please select a level for {course}</p>
            )}
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="form-actions">
        <button className="prev-btn" onClick={prevStep}>← Back</button>
        <button className="next-btn" onClick={nextStep}>Next →</button>
      </div>
    </div>
  );
};

export default Competencies;
