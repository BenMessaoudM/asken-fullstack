import React, { useState } from "react";
import "./../styles/booking.css";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    startTime: "",
    endTime: "",
    sauna: false,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        startTime: "",
        endTime: "",
        sauna: false,
        message: "",
      });
    }
  };

  const timeOptions = [];
  for (let hour = 7; hour <= 23; hour++) {
    const h = hour.toString().padStart(2, "0");
    timeOptions.push(`${h}:00`, `${h}:30`);
  }

  return (
    <div className="booking-page">
      <h2>Book the Cor House</h2>
      <form onSubmit={handleSubmit}>
        <label>Name or Organisation:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>Phone:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>

        <label>Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </label>

        <label>Start Time:
          <select name="startTime" value={formData.startTime} onChange={handleChange} required>
            <option value="">-- Select --</option>
            {timeOptions.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </label>

        <label>End Time:
          <select name="endTime" value={formData.endTime} onChange={handleChange} required>
            <option value="">-- Select --</option>
            {timeOptions.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </label>

        <label>
          <input type="checkbox" name="sauna" checked={formData.sauna} onChange={handleChange} />
          I would like to use the sauna
        </label>

        <label>Short Message:
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </label>

        <button type="submit">Send Booking</button>
        {submitted && <p className="success">✅ Booking request sent!</p>}
      </form>
    </div>
  );
};

export default Booking;
