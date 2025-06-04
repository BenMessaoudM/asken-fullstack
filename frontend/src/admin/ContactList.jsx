import React, { useEffect, useState } from "react";
import "../styles/admin.css";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/contact")
      .then((res) => res.json())
      .then((data) => setContacts(data))
      .catch((err) => console.error("Error fetching contacts:", err));
  }, []);

  return (
    <div className="admin-container">
      <h2>Contact Messages</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Reason</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c, i) => (
            <tr key={i}>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.reason}</td>
              <td>{c.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
