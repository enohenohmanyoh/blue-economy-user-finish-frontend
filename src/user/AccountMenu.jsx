import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa"; // user icon
import "./AccountMenu.css";

export default function AccountMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="account-menu">
      {/* User Icon Toggle */}
      <button className="menu-toggle" onClick={() => setOpen(!open)}>
        <FaUserCircle size={28} />
      </button>

      {/* Dropdown */}
      {open && (
        <ul className="dropdown">
          <li>💰 Deposit</li>
          <li>💸 Withdraw</li>
          <li>👤 My Details</li>
          <li>📑 My Statements</li>
          <li>🔑 Change Password</li>
        </ul>
      )}
    </div>
  );
}
