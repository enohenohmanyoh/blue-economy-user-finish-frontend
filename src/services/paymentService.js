// src/services/paymentService.js
import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/payments";

const paymentService = {
  createPayment: async (paymentData) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/create`, // Updated to match your new endpoint
        paymentData,
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data; 
    } catch (error) {
      console.error("Error creating payment:", error);
      throw error;
    }
  },
  
  confirmPayment: async (paymentId) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/confirm-payment/${paymentId}`,
        null,
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data;
    } catch (error) {
      console.error("Error confirming payment:", error);
      throw error;
    }
  },
};

export default paymentService;