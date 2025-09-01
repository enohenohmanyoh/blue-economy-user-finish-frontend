import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Use environment variable for base URL with fallback
  const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8080/api";
  
  // Debug: check environment
  console.log("Environment:", import.meta.env.MODE);
  console.log("API URL:", API_BASE);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    try {
      const res = await axios.post(`${API_BASE}/auth/login`, { 
        email, 
        password 
      }, {
        timeout: 10000 // 10 second timeout
      });

      const { token, id, role, firstName } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("userId", id);
      localStorage.setItem("role", role);
      localStorage.setItem("firstName", firstName);

      navigate(`/user/dashboard/${id}`);
    } catch (err) {
      console.error("Login error:", err);
      if (err.response?.status === 401) {
        setError("Invalid email or password");
      } else if (err.code === 'ECONNABORTED') {
        setError("Request timeout - please try again");
      } else if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Cannot connect to server. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login to Your Account</h2>
        
        {error && <div className="error-message">{error}</div>}
        
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={isLoading}
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            disabled={isLoading}
          />
        </div>
        
        <button 
          type="submit" 
          disabled={isLoading}
          className={isLoading ? "loading" : ""}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>

        <div className="links-container">
          <Link to="/forgot/password" className="link">
            Forgot Password?
          </Link>
          
          <div className="register-link">
            <span>Don't have an account? </span>
            <Link to="/register" className="link">
              Create Account
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}