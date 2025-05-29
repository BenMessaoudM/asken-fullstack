// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">ASK</div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        &#9776;
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/info" onClick={() => setIsOpen(false)}>Info</Link></li>
        <li><Link to="/board" onClick={() => setIsOpen(false)}>Board</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        <li><Link to="/booking" onClick={() => setIsOpen(false)}>Booking</Link></li>
        <li><Link to="/membership" onClick={() => setIsOpen(false)}>Membership</Link></li>
        <li><Link to="/staff" onClick={() => setIsOpen(false)}>Staff</Link></li>
      </ul>
    </nav>
  );
}
