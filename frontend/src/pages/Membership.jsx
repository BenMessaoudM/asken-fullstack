import React from "react";
import "./../styles/membership.css";

const Membership = () => {
  return (
    <div className="membership-page">
      <h1>ASK Membership</h1>

      <section>
        <h2>🎯 Why Become a Member?</h2>
        <p>
          Becoming a member of ASK means joining a vibrant student community at Arcada UAS. We support your well-being, represent your interests, and organize unforgettable student life experiences.
        </p>
      </section>

      <section>
        <h2>💰 Membership Prices</h2>
        <ul>
          <li><strong>1 semester:</strong> 25€</li>
          <li><strong>1 academic year:</strong> 35€</li>
          <li><strong>2 academic years:</strong> 62€</li>
          <li><strong>3.5 academic years:</strong> 85€</li>
          <li><strong>4 academic years:</strong> 110€</li>
        </ul>
      </section>

      <section>
        <h2>🛍️ Member Benefits</h2>
        <ul>
          <li>Discounted tickets to sitsits and parties</li>
          <li>Access to student rooms and the Cor-house</li>
          <li>Right to vote and run in ASK elections</li>
          <li>Support from tutors and the student union</li>
          <li>Special deals through student partners</li>
        </ul>
      </section>

      <section>
        <h2>📝 How to Join</h2>
        <p>
          Register as a member on <a href="https://kide.app" target="_blank" rel="noopener noreferrer">Kide.app</a>.
        </p>
      </section>
    </div>
  );
};

export default Membership;
