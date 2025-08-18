import React from "react";

const competenciesList = [
  "Maritime Spatial Planning",
  "Blue economy resilience",
  "Climate finance",
  "Shipping and maritime transport management"
];

const SectionC = ({ formData, handleChange, errors }) => {
  const handleCompetencyChange = (course, level) => {
    handleChange("competencies", {
      ...formData.competencies,
      [course]: level,
    });
  };

  return (
    <div>
      <h3>Section C: Self-Assessment of Competencies</h3>
      {competenciesList.map((course) => (
        <div key={course} className="competency-row">
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
          {/* ✅ show error for each course if not selected */}
          {errors.competencies && !formData.competencies[course] && (
            <p className="error">Please select a level for {course}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionC;
