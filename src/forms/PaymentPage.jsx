import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Link } from "react-router-dom";
import "./PaymentPage.css";

// Stripe publishable key
const stripePromise = loadStripe("pk_test_51RtNZF9YTMu5aWlFkbJhPi08kweOp61U3GyKnFjjzbdirmkwXC9pfJx5eZtpbCuI2cRruYv5U2AvcM8sqeO2H8l900wpPFSiMM");

const CheckoutForm = ({ formData, paymentAmount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [clientSecret, setClientSecret] = useState(null);
  const [localPaymentId, setLocalPaymentId] = useState(null);

  const safeFormData = formData || {};
  const amountInCents = (paymentAmount || 50) * 100;

  useEffect(() => {
    if (!safeFormData.fullName || !safeFormData.email) return;

    const createPayment = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/payments/create/payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: safeFormData.fullName,
            email: safeFormData.email,
            contactNumber: safeFormData.contactNumber || "",
            gender: safeFormData.gender || "",
            ageGroup: safeFormData.ageGroup || "",
            nationality: safeFormData.nationality || "",

            // Professional Background
            occupation: safeFormData.occupation || "",
            organization: safeFormData.organization || "",
            qualification: safeFormData.qualification || "",
            specialization: safeFormData.specialization || "",
            experience: safeFormData.experience || "",
            previousTraining: safeFormData.previousTraining || "",

            // Training Goals
            trainingGoals: safeFormData.trainingGoals || "",
            outcomes: safeFormData.outcomes || "",
            trainingMode: safeFormData.trainingMode || "",
            remarks: safeFormData.remarks || "",

            // Competencies
            competencies: safeFormData.competencies || {},

            amount: amountInCents,
            currency: "usd",
          }),
        });

        if (!response.ok) throw new Error("Failed to create payment");

        const data = await response.json();
        setClientSecret(data.clientSecret);
        setLocalPaymentId(data.paymentId);
      } catch (error) {
        console.error("Payment initialization error:", error);
        setPaymentError("Failed to initialize payment. Please try again.");
      }
    };

    createPayment();
  }, [safeFormData, amountInCents]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements || !clientSecret) return;

    setProcessing(true);
    setPaymentError(null);

    try {
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: safeFormData.fullName || "Anonymous",
            email: safeFormData.email || "noemail@example.com",
          },
        },
      });

      if (result.error) {
        setPaymentError(result.error.message);
      } else if (result.paymentIntent.status === "succeeded") {
        if (localPaymentId) {
          await fetch(`http://localhost:8080/api/payments/confirm/payment/${localPaymentId}`, {
            method: "POST",
          });
        }
        setPaymentSuccess(true);
      }
    } catch (error) {
      console.error("Payment error:", error);
      setPaymentError("An unexpected error occurred. Please try again.");
    } finally {
      setProcessing(false);
    }
  };

  if (paymentSuccess) {
    return (
      <div className="payment-success">
        <div className="success-icon">✓</div>
        <h3>Payment Successful!</h3>
        <p>Your registration has been completed successfully.</p>
        <Link to="/course/list" className="back-btn">
          Return to Courses
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <div className="form-section">
        <h3>Card Information</h3>
        <CardElement
          options={{
            style: {
              base: { fontSize: "16px", color: "#424770", "::placeholder": { color: "#aab7c4" } },
            },
          }}
        />
      </div>

      <div className="form-section">
        <h3>Billing Details</h3>
        <div className="billing-details">
          <div className="detail-row">
            <span>Name:</span>
            <span>{safeFormData.fullName || "Not provided"}</span>
          </div>
          <div className="detail-row">
            <span>Email:</span>
            <span>{safeFormData.email || "Not provided"}</span>
          </div>
          <div className="detail-row">
            <span>Amount:</span>
            <span>${(paymentAmount || 50).toFixed(2)}</span>
          </div>
        </div>
      </div>

      {paymentError && <div className="payment-error">{paymentError}</div>}

      <button type="submit" className="pay-button" disabled={!stripe || processing || !clientSecret}>
        {processing ? "Processing..." : `Pay $${(paymentAmount || 50).toFixed(2)}`}
      </button>

      <div className="back-to-forms">
        <Link to="/payment/forms" className="back-link">
          ← Back to Forms
        </Link>
      </div>
    </form>
  );
};

const PaymentPage = ({ formData, paymentAmount }) => {
  if (!formData || !formData.fullName || !formData.email) {
    return (
      <div className="payment-wrapper">
        <p>Please provide your registration details to proceed with payment.</p>
        <Link to="/form/payment" className="back-link">
          ← Return to Forms
        </Link>
      </div>
    );
  }

  return (
    <div className="payment-wrapper">
      <div className="payment-container">
        <div className="payment-header">
          <h1 className="payment-title">Complete Your Registration</h1>
          <p className="payment-subtitle">Pay securely with Stripe</p>
        </div>

        <div className="payment-content">
          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="summary-item">
              <span>Registration Fee</span>
              <span>${(paymentAmount || 50).toFixed(2)}</span>
            </div>
            <div className="summary-item total">
              <span>Total</span>
              <span>${(paymentAmount || 50).toFixed(2)}</span>
            </div>
          </div>

          <div className="payment-form-container">
            <Elements stripe={stripePromise}>
              <CheckoutForm formData={formData} paymentAmount={paymentAmount} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
