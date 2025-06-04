import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/admin.css"; 

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin"); 
    navigate("/admin/login"); 
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Welcome to the Admin Dashboard</h1>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      <div className="admin-links">
        <p>Use the links below to manage content:</p>
        <ul>
          <li><a href="/admin/booking">View Bookings</a></li>
          <li><a href="/admin/contact">View Messages</a></li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
