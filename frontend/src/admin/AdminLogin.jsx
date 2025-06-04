import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/adminLogin.css";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "admin2024") {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin/dashboard");
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
