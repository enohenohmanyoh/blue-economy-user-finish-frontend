import { useState } from "react";
import axios from "axios";
import { useLocation, Link, useNavigate } from "react-router-dom";
import "./Login.css"; // Use the same CSS as login page

export const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const query = new URLSearchParams(useLocation().search);
  const token = query.get("token"); // Get token from URL
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      setMessage("Invalid or missing token.");
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/auth/reset/password", {
        token,
        password,
      });

      setMessage("Password reset successful! Redirecting to login...");

      // Redirect to login after 2 seconds
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setMessage("Error resetting password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Reset Password</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter new password"
          required
        />
        <button type="submit">Reset Password</button>

        {message && (
          <p className={message.includes("successful") ? "success" : "error"}>
            {message}
          </p>
        )}

        <p style={{ textAlign: "center", marginTop: "15px" }}>
          <Link to="/login">Back to Login</Link>
        </p>
      </form>
    </div>
  );
};
