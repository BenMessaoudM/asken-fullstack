import React, { useState } from 'react';
import '../styles/Contact.css';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.reason || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }

    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', reason: '', message: '' });
    } else {
      setStatus('Error sending message. Please try again later.');
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email *"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <select
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          required
        >
          <option value="">-- Select Reason * --</option>
          <option value="general">General Contact</option>
          <option value="harassment">Anti-Harassment</option>
        </select>
        <textarea
          name="message"
          placeholder="Your Message *"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
        {status && <p className="status">{status}</p>}
      </form>
    </div>
  );
}

export default Contact;
