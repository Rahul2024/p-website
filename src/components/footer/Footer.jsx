// src/components/Footer.js
import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="about">
          <h3>About Me</h3>
          <p>I am a passionate frontend developer with experience in creating responsive and dynamic web applications.</p>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#portfolio">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="social-media">
          <h3>Follow Me</h3>
          <a href="https://www.linkedin.com/in/r-raj-7132b8245/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/Rahul2024" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="mailto:your-email@example.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Rahul Raj. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
