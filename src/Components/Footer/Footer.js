import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="loc-collective-footer">
      <section className="footer-container">
        <p>designed and built by</p>
        <a
          href="https://www.decemberdevelopment.com"
          target="_blank"
          rel="noopener noreferrer"
          className="production-link"
        >
          december design & development
          <span className="period">.</span>
        </a>
      </section>
    </footer>
  );
};

export default Footer;
