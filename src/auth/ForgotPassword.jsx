import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./AuthForms.css";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/auth/forgot/password", { email });
      setMessage("Check your email for the reset link!");
    } catch (err) {
      setMessage("Error sending reset email");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Forgot Password</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <button type="submit">Send Reset Link</button>
      <p className={message.includes("Check") ? "success" : "error"}>{message}</p>
      <p style={{ textAlign: "center", marginTop: "15px" }}>
        <Link to="/login">Back to Login</Link>
      </p>
    </form>
  );
};
