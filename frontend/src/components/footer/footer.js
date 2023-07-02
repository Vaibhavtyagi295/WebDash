import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-column">
        <div className="footer-logo">
          <img src="/path/to/logo.png" alt="Company Logo" className="img-logo" />
        </div>
      </div>
      <div className="footer-column">
        <h4 className="footer-title">Explore</h4>
        <ul className="footer-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/join">Join Us</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4 className="footer-title">Contact</h4>
        <div className="footer-contact">
          <p>info@company.com</p>
          <p>(123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
