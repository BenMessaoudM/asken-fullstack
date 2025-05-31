import React, { useState } from "react";
import "./../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.reason.trim()) newErrors.reason = "Reason is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully.");
        setFormData({ name: "", email: "", reason: "", message: "" });
        setErrors({});
      } else {
        setStatus("Error sending message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Server error.");
    }
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <input
          type="email"
          name="email"
          placeholder="Your contact email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <select
          name="reason"
          value={formData.reason}
          onChange={handleChange}
        >
          <option value="">Select reason</option>
          <option value="general">General Contact</option>
          <option value="harassment">Anti-Harassment</option>
        </select>
        {errors.reason && <span className="error">{errors.reason}</span>}

        <textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <span className="error">{errors.message}</span>}

        <button type="submit">Send Message</button>
        {status && <p className="status">{status}</p>}
      </form>
    </div>
  );
};

export default Contact;
