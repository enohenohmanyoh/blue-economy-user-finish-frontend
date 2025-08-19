import React from "react";

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina",
  "Australia", "Austria", "Belgium", "Brazil", "Cameroon", "Canada",
  "China", "Denmark", "Egypt", "Ethiopia", "Finland", "France", "Germany",
  "Ghana", "Greece", "India", "Indonesia", "Ireland", "Italy", "Japan",
  "Kenya", "Mexico", "Netherlands", "Nigeria", "Norway", "Pakistan",
  "Russia", "Saudi Arabia", "South Africa", "South Korea", "Spain",
  "Sweden", "Switzerland", "Tanzania", "Turkey", "Uganda", "United Kingdom",
  "United States", "Vietnam", "Zambia", "Zimbabwe"
];

const SectionA = ({ formData, handleChange, errors }) => (
  <div>
    <h3>Section A: Personal Information</h3>

    <label>Full Name</label>
    <input
      type="text"
      value={formData.fullName}
      onChange={(e) => handleChange("fullName", e.target.value)}
    />
    {errors.fullName && <p className="error">{errors.fullName}</p>}

    <label>Gender</label>
    <select value={formData.gender} onChange={(e) => handleChange("gender", e.target.value)}>
      <option value="">Select</option>
      <option>Male</option>
      <option>Female</option>
      <option>Other</option>
    </select>
    {errors.gender && <p className="error">{errors.gender}</p>}

    <label>Age Group</label>
    <select value={formData.ageGroup} onChange={(e) => handleChange("ageGroup", e.target.value)}>
      <option value="">Select</option>
      <option>18–25</option>
      <option>26–35</option>
      <option>36–45</option>
      <option>46–55</option>
      <option>56+</option>
    </select>
    {errors.ageGroup && <p className="error">{errors.ageGroup}</p>}

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

    <label>Email</label>
    <input
      type="email"
      value={formData.email}
      onChange={(e) => handleChange("email", e.target.value)}
    />
    {errors.email && <p className="error">{errors.email}</p>}
  </div>
);

export default SectionA;
