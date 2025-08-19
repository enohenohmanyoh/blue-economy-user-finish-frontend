import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionA from "./SectionA";
import SectionB from "./SectionB";
import SectionC from "./SectionC";
import SectionD from "./SectionD";
import PaymentPage from "./PaymentPage";
import "./Forms.css";

const Forms = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // --- Capability Gap ---
    fullName: "",
    gender: "",
    ageGroup: "",
    nationality: "",
    contactNumber: "",
    email: "",
    occupation: "",
    organization: "",
    qualification: "",
    specialization: "",
    experience: "",
    previousTraining: "",
    competencies: {},
    trainingGoals: "",
    outcomes: "",
    trainingMode: "",
    remarks: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // ✅ Validation per step
  const validateStep = () => {
    let newErrors = {};

    if (step === 1) {
      if (!formData.fullName) newErrors.fullName = "Full Name is required";
      if (!formData.gender) newErrors.gender = "Gender is required";
      if (!formData.ageGroup) newErrors.ageGroup = "Age group is required";
      if (!formData.email) newErrors.email = "Email is required";
    }

    if (step === 2) {
      if (!formData.qualification) newErrors.qualification = "Qualification is required";
      if (!formData.specialization) newErrors.specialization = "Specialization is required";
      if (!formData.experience) newErrors.experience = "Experience is required";
    }

    if (step === 3) {
      // Optional: validate competencies
    }

    if (step === 4) {
      if (!formData.trainingGoals) newErrors.trainingGoals = "Please enter your training goals";
      if (!formData.trainingMode) newErrors.trainingMode = "Please select a training mode";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    // Only validate before moving forward if not payment
    if (step < 5 && !validateStep()) return;
    setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="capability-form-container">
      <h2>AIMS Capability Gap Assessment & Course Booking</h2>

      {step === 1 && <SectionA formData={formData} handleChange={handleChange} errors={errors} />}
      {step === 2 && <SectionB formData={formData} handleChange={handleChange} errors={errors} />}
      {step === 3 && <SectionC formData={formData} handleChange={handleChange} errors={errors} />}
      {step === 4 && <SectionD formData={formData} handleChange={handleChange} errors={errors} />}
      {step === 5 && <PaymentPage formData={formData} />}

      {/* Navigation */}
      <div className="form-navigation">
        {step > 1 && step < 5 && <button onClick={prevStep}>Back</button>}
        {step < 5 && (
          <button onClick={nextStep}>
            {step === 4 ? "Finish & Pay" : "Next"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Forms;
