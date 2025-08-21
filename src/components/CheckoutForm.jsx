// src/components/CheckoutForm.jsx
import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const CheckoutForm = ({ onPaymentSuccess, onPaymentError, setProcessing }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);
    setError(null);

    const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            email: formData.email,
          },
        }
      }
    );

    if (stripeError) {
      setError(stripeError.message);
      onPaymentError(stripeError);
      setProcessing(false);
    } else if (paymentIntent.status === 'succeeded') {
      onPaymentSuccess(paymentIntent);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="stripe-form">
      <div className="form-group">
        <label htmlFor="card-element">Credit or debit card</label>
        <CardElement 
          id="card-element"
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
      </div>

      {error && <div className="payment-error">{error}</div>}

      <button 
        type="submit" 
        className="pay-button"
        disabled={!stripe}
      >
        Pay $499.00
      </button>
    </form>
  );
};

export default CheckoutForm;