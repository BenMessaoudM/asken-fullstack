import React from "react";
import "./../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          📷 Follow us on{" "}
          <a
            href="https://www.instagram.com/askenfi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </p>
        <p>
          💻 Developed by{" "}
          <a
            href="https://www.linkedin.com/in/mubenmessaoud"
            target="_blank"
            rel="noopener noreferrer"
          >
            Musse
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
