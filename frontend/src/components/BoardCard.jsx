// src/components/BoardCard.jsx
import React from "react";
import "./../styles/board.css";

function BoardCard({ member }) {
  return (
    <div className="board-card">
      <div className="board-card-inner">
        <div className="board-card-front">
          <img src={member.image} alt={member.name} />
          <h3>{member.name}</h3>
        </div>
        <div className="board-card-back">
          <h4>{member.titleEn}</h4>
          <em>{member.titleSv}</em>
          <div className="flags">{member.flags}</div>
          <div className="email">{member.email}</div>
        </div>
      </div>
    </div>
  );
}

export default BoardCard;
