import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import ProfessionalBackground from "./ProfessionalBackground";
import Compentencies from "./Compentencies";   // ✅ Added import
import TrainingGoals from "./TrainingGoals";
import Review from "./Review";
import PaymentPage from "./PaymentPage";

const Forms = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
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

  // ✅ Update state for any field
  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  // ✅ Validation per step
  const validateStep = () => {
    let stepErrors = {};

    if (step === 1) {
      if (!formData.fullName) stepErrors.fullName = "Full Name is required";
      if (!formData.gender) stepErrors.gender = "Gender is required";
      if (!formData.ageGroup) stepErrors.ageGroup = "Age Group is required";
      if (!formData.nationality) stepErrors.nationality = "Nationality is required";
      if (!formData.email) stepErrors.email = "Email is required";
    }

    if (step === 2) {
      if (!formData.qualification) stepErrors.qualification = "Qualification is required";
      if (!formData.specialization) stepErrors.specialization = "Specialization is required";
      if (!formData.experience) stepErrors.experience = "Experience is required";
    }

    if (step === 4) {
      if (!formData.trainingGoals) stepErrors.trainingGoals = "Please enter your training goals";
      if (!formData.outcomes) stepErrors.outcomes = "Please specify expected outcomes";
      if (!formData.trainingMode) stepErrors.trainingMode = "Select training mode";
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => setStep(step - 1);

  // ✅ Final submit handler
  const handleSubmit = (paymentData) => {
    console.log("Final Submission ✅", { ...formData, payment: paymentData });

    // here you could send to backend API
    alert("Form submitted successfully!");
  };

  switch (step) {
    case 1:
      return (
        <PersonalInfo
          formData={formData}
          handleChange={handleChange}
          errors={errors}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <ProfessionalBackground
          formData={formData}
          handleChange={handleChange}
          errors={errors}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <Compentencies
          formData={formData}
          handleChange={handleChange}
          errors={errors}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 4:
      return (
        <TrainingGoals
          formData={formData}
          handleChange={handleChange}
          errors={errors}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 5:
      return (
        <Review
          formData={formData}
          prevStep={prevStep}
          nextStep={nextStep}
        />
      );
    case 6:
      return (
        <PaymentPage
          formData={formData}
          prevStep={prevStep}
          handleSubmit={handleSubmit}  // ✅ passed submit function
        />
      );
    default:
      return null;
  }
};

export default Forms;
