import React from "react";
import "./../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src="/images/ASK logo vit.png" alt="ASKEN logo" className="footer-logo" />
          <p className="footer-address">
            Majstadsgatan 11, 00560 Helsingfors<br />
            info@asken.fi
          </p>
        </div>
        <div className="footer-right">
          <a href="https://www.instagram.com/askenfi" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.linkedin.com/in/mubenmessaoud" target="_blank" rel="noopener noreferrer">Developed by Musse</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ASKEN. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
