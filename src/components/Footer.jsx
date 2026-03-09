import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>RealEstate</h3>
          <p>
            Find your dream home with us. We provide the best properties
            with trusted services and expert guidance.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/properties">Properties</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@realestate.com</p>
          <p>Phone: +91 7505700853</p>
          <p>Location: New Delhi, India</p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com">Facebook</a>
            <a href="https://instagram.com">Instagram</a>
            <a href="https://twitter.com">Twitter</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 RealEstate. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;