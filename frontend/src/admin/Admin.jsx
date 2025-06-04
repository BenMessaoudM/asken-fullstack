import React, { useEffect, useState } from "react";
import "../styles/admin.css";

const Admin = () => {
  const [bookings, setBookings] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true); // For loading state

  useEffect(() => {
    // Fetch bookings
    fetch("http://localhost:5000/api/booking")
      .then((res) => res.json())
      .then((data) => {
        console.log("📦 Bookings data:", data);
        setBookings(data);
      })
      .catch((err) => console.error("❌ Error fetching bookings:", err));

    // Fetch contact messages
    fetch("http://localhost:5000/api/contact")
      .then((res) => res.json())
      .then((data) => {
        console.log("✉️ Messages data:", data);
        setMessages(data);
      })
      .catch((err) => console.error("❌ Error fetching messages:", err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <section>
            <h2>Bookings</h2>
            {bookings.length === 0 ? (
              <p>No bookings found.</p>
            ) : (
              <ul>
                {bookings.map((b) => (
                  <li key={b._id}>
                    {b.name} - {b.date} - {b.time}
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section>
            <h2>Messages</h2>
            {messages.length === 0 ? (
              <p>No messages found.</p>
            ) : (
              <ul>
                {messages.map((m) => (
                  <li key={m._id}>
                    <strong>{m.name}</strong> ({m.email})<br />
                    <em>{m.reason}</em>: {m.message}
                  </li>
                ))}
              </ul>
            )}
          </section>
        </>
      )}
    </div>
  );
};

export default Admin;
