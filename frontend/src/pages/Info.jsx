import React from "react";
import "./../styles/info.css";

const Info = () => {
  return (
    <div className="info-page">
      <h1>About ASK</h1>

      <section>
        <h2>🏛️ Who We Are</h2>
        <p>
          ASK (Arcada Studentkår) is the official student union at Arcada University of Applied Sciences.
          We represent students’ interests, support their academic and personal growth, and enrich student life through advocacy, services, and events.
        </p>
      </section>

      <section>
        <h2>🧭 What We Do</h2>
        <ul>
          <li>📣 Advocacy: Representing student voices in university decisions</li>
          <li>🎉 Events: Organizing sitsits, parties, and cultural activities</li>
          <li>🧑‍🏫 Tutoring: Supporting new students with peer guidance</li>
          <li>🛡️ Anti-Harassment: Providing a safe and supportive environment</li>
          <li>🧾 Membership Benefits: Discounts, activities, and more</li>
        </ul>
      </section>

      <section>
        <h2>👥 Who Can Join?</h2>
        <p>
          Everyone studying at Arcada is welcome to become a member of ASK! Whether you’re a degree student, international, or on exchange — we’re here for you.
        </p>
      </section>

      <section>
        <h2>💸 Membership</h2>
        <p>
          You can register as a member via <a href="https://kide.app" target="_blank" rel="noopener noreferrer">Kide.app</a>.
          Members get access to:
        </p>
        <ul>
          <li>🎟️ Discounted event tickets</li>
          <li>📬 Voting rights in ASK elections</li>
          <li>📌 Use of member-only resources and spaces</li>
        </ul>
      </section>

      <section>
        <h2>🌐 Contact</h2>
        <ul>
          <li>📧 Email: <a href="mailto:info@asken.fi">info@asken.fi</a></li>
          <li>📸 Instagram: <a href="https://instagram.com/arcadastudentkar" target="_blank" rel="noopener noreferrer">@arcadastudentkar</a></li>
          <li>📍 Office: 2nd Floor Lobby, Arcada Campus</li>
        </ul>
      </section>
    </div>
  );
};

export default Info;
