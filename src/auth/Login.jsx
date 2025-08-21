import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"; // make sure this is your CSS file from above

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", { email, password });
      const { token, id, role, firstName } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("userId", id);
      localStorage.setItem("role", role);
      localStorage.setItem("firstName", firstName);

      navigate(`/user/dashboard/${id}`);
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>

        {/* Forgot Password link */}
        <div style={{ marginTop: "15px", textAlign: "center" }}>
          <Link to="/forgot/password" style={{ color: "#8e44ad", textDecoration: "underline" }}>
            Forgot Password?
          </Link>
        </div>

        {/* Create Account link */}
        <div className="register-link">
          <Link to="/register">Don't have an account? Create Account</Link>
        </div>
      </form>
    </div>
  );
}
