// src/pages/PaymentPage.js
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Link } from "react-router-dom";   // ✅ import Link
import CheckoutForm from "./CheckoutForm";
import "./PaymentPage.css";

// Load Stripe with your publishable key
const stripePromise = loadStripe("pk_test_12345YOURKEYHERE");

const PaymentPage = () => {
  return (
    <div className="payment-container">
      <h1 className="payment-title">Complete Your Registration</h1>
      <p className="payment-subtitle">
        Pay the registration fee securely with Stripe
      </p>

      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>

      {/* ✅ Back to booking button styled same as payment button */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <Link to="/book-course" className="submit-btn">
          ← Back to Book a Course
        </Link>
      </div>
    </div>
  );
};

export default PaymentPage;
