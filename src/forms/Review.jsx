import React from "react";
import "./Forms.css"; // ✅ shared styles

const Review = ({ formData, prevStep, nextStep }) => {
  return (
    <div className="personal-info-container">
      <h3>Review Your Information</h3>
      <p className="review-subtitle">
        Please confirm that all the details below are correct before proceeding to payment.
      </p>

      <dl className="review-grid">
        {formData.fullName && (
          <div className="review-item">
            <dt><strong>Full Name:</strong></dt>
            <dd>{formData.fullName}</dd>
          </div>
        )}

        {formData.email && (
          <div className="review-item">
            <dt><strong>Email:</strong></dt>
            <dd>{formData.email}</dd>
          </div>
        )}

        {formData.contactNumber && (
          <div className="review-item">
            <dt><strong>Phone:</strong></dt>
            <dd>{formData.contactNumber}</dd>
          </div>
        )}

        {formData.qualification && (
          <div className="review-item">
            <dt><strong>Qualification:</strong></dt>
            <dd>{formData.qualification}</dd>
          </div>
        )}

        {formData.specialization && (
          <div className="review-item">
            <dt><strong>Specialization:</strong></dt>
            <dd>{formData.specialization}</dd>
          </div>
        )}

        {formData.experience && (
          <div className="review-item">
            <dt><strong>Experience:</strong></dt>
            <dd>{formData.experience}</dd>
          </div>
        )}

        {formData.previousTraining && (
          <div className="review-item">
            <dt><strong>Previous Training:</strong></dt>
            <dd>{formData.previousTraining}</dd>
          </div>
        )}

        {formData.trainingGoals && (
          <div className="review-item">
            <dt><strong>Training Goals:</strong></dt>
            <dd>{formData.trainingGoals}</dd>
          </div>
        )}

        {formData.outcomes && (
          <div className="review-item">
            <dt><strong>Outcomes:</strong></dt>
            <dd>{formData.outcomes}</dd>
          </div>
        )}

        {formData.trainingMode && (
          <div className="review-item">
            <dt><strong>Training Mode:</strong></dt>
            <dd>{formData.trainingMode}</dd>
          </div>
        )}

        {formData.remarks && (
          <div className="review-item">
            <dt><strong>Remarks:</strong></dt>
            <dd>{formData.remarks}</dd>
          </div>
        )}

        {formData.competencies && Object.keys(formData.competencies).length > 0 && (
          <div className="review-item full-width">
            <dt><strong>Competencies:</strong></dt>
            <dd>
              <ul>
                {Object.entries(formData.competencies).map(([course, level]) => (
                  <li key={course}>
                    {course}: <em>{level}</em>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        )}
      </dl>

      {/* Navigation */}
      <div className="form-actions">
        <button type="button" className="prev-btn" onClick={prevStep}>
          ← Back
        </button>
        <button type="button" className="next-btn" onClick={nextStep}>
          Proceed to Payment →
        </button>
      </div>
    </div>
  );
};

export default Review;
