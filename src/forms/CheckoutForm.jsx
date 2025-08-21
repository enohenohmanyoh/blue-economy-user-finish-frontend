import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import paymentService from "../services/paymentService";

const CheckoutForm = ({ formData }) => {
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
      // Step 1: send formData + payment info to backend
      const paymentData = {
        ...formData,
        amount: 50, // registration fee in cents
        currency: "usd",
      };

      const result = await paymentService.createPayment(paymentData);

      const clientSecret = result.clientSecret;
      const paymentId = result.paymentId;

      // Step 2: confirm with Stripe
      const cardElement = elements.getElement(CardElement);
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement },
      });

      if (error) {
        setMessage(`❌ Payment failed: ${error.message}`);
      } else if (paymentIntent.status === "succeeded") {
        // Step 3: update status in backend
        await paymentService.confirmPayment(paymentId);

        setMessage("✅ Payment successful & registration saved!");
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
      <button type="submit" disabled={!stripe || loading} className="pay-button">
        {loading ? "Processing..." : "Pay Now"}
      </button>
      {message && <p className="checkout-message">{message}</p>}
    </form>
  );
};

export default CheckoutForm;
