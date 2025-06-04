import React from "react";
import "../styles/staff.css";

const staffMembers = [
  {
    name: "Maria Schmidt",
    title: "Communication and Membership Secretary",
    email: "maria@asken.fi",
  },
  {
    name: "Andreas Lohse",
    title: "ASK General Secretary ",
    email: "andreas@asken.fi",
  },
];

const Staff = () => {
  return (
    <div className="staff-page">
      <h2>ASK Staff</h2>
      <p>
        Our staff works behind the scenes to support the student board, provide guidance,
        and ensure ASK runs smoothly for our student community.
      </p>
      <div className="staff-list">
        {staffMembers.map((staff, index) => (
          <div key={index} className="staff-card">
            <h3>{staff.name}</h3>
            <p>{staff.title}</p>
            <a href={`mailto:${staff.email}`}>{staff.email}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staff;
