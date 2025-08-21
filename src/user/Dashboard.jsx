import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AccountMenu from "./AccountMenu";
import "./Dashboard.css";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const id = localStorage.getItem("userId");
        if (!token || !id) {
          navigate("/login");
          return;
        }

        const res = await axios.get(
          `http://localhost:8080/api/user/get/user/${id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setUser(res.data);
      } catch (err) {
        console.error(err);
        navigate("/login");
      }
    };
    fetchUser();
  }, [navigate]);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    toast.info("Signed out successfully 👋");
    navigate("/login");
  };

  if (!user) return <div className="loading">Loading your dashboard...</div>;

  return (
    <div className="dashboard-wrapper">
      {/* 🔹 TOP HEADER BAR */}
      <div className="top-header">
        <div className="logo">⚽POLO Bet </div>
        <div className="header-actions">
          <AccountMenu />
          <span className="balance">
            Balance: <strong>R {user.balance || "0.00"}</strong>
          </span>
          <button className="signout-btn" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>

      {/* 🔹 NAVIGATION BAR */}
      <div className="nav-bar">
        <ul>
          <li>Sports</li>
          <li>Live Betting</li>
          <li>Jackpot</li>
          <li>Casino</li>
          <li>My Bets</li>
          <li>Promotions</li>
        </ul>
      </div>

      {/* 🔹 MAIN DASHBOARD CONTENT */}
      <div className="dashboard-main">
        <div className="left-panel">
          <div className="card">
            <h2>Quick Links</h2>
            <ul>
              <li>Deposit</li>
              <li>Withdraw</li>
              <li>My Details</li>
              <li>My Statements</li>
              <li>Change Password</li>
            </ul>
          </div>
        </div>

        <div className="center-panel">
          <div className="card">
            <h2>Account Overview</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Username:</strong> {user.username}</p>
            {/* ✅ Role removed */}
          </div>
        </div>

        <div className="right-panel">
          <div className="card">
            <h2>Latest Promotions</h2>
            <ul>
              <li>🎁 Welcome Bonus</li>
              <li>🔥 Weekend Free Bets</li>
              <li>💰 Cashback Offers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
