import React from "react";
import "./../styles/board.css";

const boardMembers = [
  {
    name: "Jessica Lindfors",
    titleEn: "Chairperson of the Board, harassment contact person",
    titleSv: "Styrelseordförande, trakasseriombud",
    image: "/images/Jessica-1.jpg",
    flags: ["🇸🇪", "🇫🇮", "🇬🇧"],
    email: "jessica@asken.fi",
  },
  {
    name: "Mustapha Ben Messaoud “Musse”",
    titleEn: "Vice chairperson of the Board",
    titleSv: "Vice ordförande",
    image: "/images/Musse-1.jpg",
    flags: ["🇲🇦", "🇫🇷", "🇬🇧", "🇸🇪"],
    email: "musse@asken.fi",
  },
  {
    name: "Annika Leppä",
    titleEn: "Member of the Board, marketing & communication",
    titleSv: "Styrelsemedlem, marknadsföring & kommunikation",
    image: "/images/Annika-1.jpg",
    flags: ["🇸🇪", "🇫🇮", "🇬🇧"],
    email: "annika@asken.fi",
  },
  {
    name: "Musawir Ahmad",
    titleEn: "Member of the Board, collaborations & advocacy",
    titleSv: "Styrelsemedlem, samarbeten & intressebevakning",
    image: "/images/Musa-3.jpg",
    flags: ["🇵🇰", "🇬🇧"],
    email: "musawir@asken.fi",
  },
  {
    name: "Vedant Athreya",
    titleEn: "Member of the Board, finance & administration",
    titleSv: "Styrelsemedlem, ekonomi & förvaltning",
    image: "/images/Vedant-4.jpg",
    flags: ["🇮🇳", "🇬🇧"],
    email: "vedant@asken.fi",
  },
  {
    name: "Elin Högback",
    titleEn: "Member of the Board, events & tutoring",
    titleSv: "Styrelsemedlem, evenemang & tutorering",
    image: "/images/Elin-4.jpg",
    flags: ["🇸🇪", "🇫🇮", "🇬🇧"],
    email: "elin@asken.fi",
  },
  {
    name: "Frej Knichter",
    titleEn: "Member of the Board, events, tutoring & harassment contact person",
    titleSv: "Styrelsemedlem, evenemang, tutorering & trakasseriombud",
    image: "/images/Frej-3.jpg",
    flags: ["🇸🇪", "🇫🇮", "🇬🇧"],
    email: "frej@asken.fi",
  },
  {
    name: "Abubokor Rifat",
    titleEn: "Member of the Board, events & tutoring",
    titleSv: "Styrelsemedlem, evenemang & tutorering",
    image: "/images/Rifat-5.jpg",
    flags: ["🇧🇩", "🇬🇧"],
    email: "rifat@asken.fi",
  }
];

const Board = () => {
  return (
    <div className="board-page">
      <h2 className="board-title">Our Board</h2>
      <div className="board-carousel">
        <div className="board-scroll">
          {boardMembers.map((member, index) => (
            <div key={index} className="board-card">
              <div className="board-card-inner">
                <div className="board-card-front">
                  <img src={member.image} alt={member.name} />
                  <h3>{member.name}</h3>
                </div>
                <div className="board-card-back">
                  <p>{member.titleEn}</p>
                  <em>{member.titleSv}</em>
                  <div className="flags">{member.flags.join(" ")}</div>
                  <div className="email">{member.email}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
