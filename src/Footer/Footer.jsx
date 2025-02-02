
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} MuthamilSelvan,All Rights Reserved.</p>
        <p>
          <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a> | 
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

