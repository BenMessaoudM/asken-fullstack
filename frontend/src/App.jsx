import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Info from "./pages/Info";
import Contact from "./pages/Contact";
import Board from "./pages/Board";
import Booking from "./pages/Booking";
import Membership from "./pages/Membership";
import Staff from "./pages/Staff";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/info" element={<Info />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/board" element={<Board />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/staff" element={<Staff />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
