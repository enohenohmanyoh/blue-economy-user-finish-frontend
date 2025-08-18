import React from "react";

// full country list (shortened here for clarity – you can expand)
const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria",
  "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Botswana", "Brazil",
  "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Chad", "Chile", "China", "Colombia", 
  "Comoros", "Congo (Brazzaville)", "Congo (Kinshasa)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", 
  "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
  "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", 
  "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", 
  "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", 
  "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", 
  "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique",
  "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia",
  "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", 
  "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent", "Samoa", 
  "San Marino", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", 
  "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", 
  "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", 
  "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", 
  "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
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
