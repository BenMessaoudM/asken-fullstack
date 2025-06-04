import React from "react";

const BookingList = ({ bookings }) => {
  return (
    <div className="admin-section">
      <h2>Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul>
          {bookings.map((b, i) => (
            <li key={i}>
              {b.name} - {b.date} ({b.time})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookingList;
