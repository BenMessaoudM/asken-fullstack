import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Info from "./pages/Info";
import Contact from "./pages/Contact";
import Board from "./pages/Board";
import Booking from "./pages/Booking";
import Membership from "./pages/Membership";
import Staff from "./pages/Staff";
import Footer from "./components/Footer";

import Admin from "./admin/Admin";
import AdminDashboard from "./admin/AdminDashboard";
import BookingList from "./admin/BookingList";
import ContactList from "./admin/ContactList";
import RequireAdmin from "./admin/RequireAdmin";
import AdminLogin from "./admin/AdminLogin";

import { isLoggedIn } from "./services/auth"; 

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<Info />} />
        <Route path="/info" element={<Info />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/board" element={<Board />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/staff" element={<Staff />} />

        {/* Admin Login */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Protected Admin Pages */}
         
  <Route path="/admin/dashboard" element={<RequireAdmin><AdminDashboard /></RequireAdmin>} />
  <Route path="/admin/booking" element={<RequireAdmin><BookingList /></RequireAdmin>} />
  <Route path="/admin/contact" element={<RequireAdmin><ContactList /></RequireAdmin>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
