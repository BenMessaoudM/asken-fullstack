import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Info from './pages/Info';
import Board from './pages/Board';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Membership from './pages/Membership';
import Staff from './pages/Staff';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/board" element={<Board />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/staff" element={<Staff />} />
      </Routes>
    </>
  );
}
