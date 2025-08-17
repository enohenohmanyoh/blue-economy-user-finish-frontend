import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
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

    // Get Card info
    const cardElement = elements.getElement(CardElement);

    // Create Payment Method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    // In real app, send paymentMethod.id to backend to confirm payment
    console.log("PaymentMethod created:", paymentMethod);

    setMessage("✅ Payment method created successfully!");
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
