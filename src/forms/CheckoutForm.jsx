// src/components/CheckoutForm.js
import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import paymentService from "../services/paymentService";
import "./CheckoutForm.css";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);
    setMessage("");

    try {
      // Step 1: Create payment via backend
      const paymentData = { amount: 5000, currency: "usd" }; // Example: $50
      const result = await paymentService.createPayment(paymentData);
      
      // Step 2: Get client secret and payment ID from response
      const clientSecret = result.clientSecret;
      const paymentId = result.paymentId;

      // Step 3: Confirm card payment with Stripe
      const cardElement = elements.getElement(CardElement);

      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (error) {
        setMessage(`❌ Payment failed: ${error.message}`);
      } else if (paymentIntent.status === "succeeded") {
        setMessage("✅ Payment successful! 🎉");
        
        // Step 4: Confirm payment on backend
        await paymentService.confirmPayment(paymentId);
      }
    } catch (err) {
      console.error("Payment error:", err);
      setMessage("❌ Something went wrong with the payment.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <label className="checkout-label">Card Details</label>
      <CardElement className="card-element" />
      <button
        type="submit"
        disabled={!stripe || loading}
        className="pay-button"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
      {message && <p className="checkout-message">{message}</p>}
    </form>
  );
};

export default CheckoutForm;