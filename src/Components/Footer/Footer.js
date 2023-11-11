import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="loc-collective-footer">
      <section className="footer-container">
        <p className="footer-text">
          site by{' '}
          <a
            href="https://www.decemberdevelopment.com"
            target="_blank"
            rel="noopener noreferrer"
            className="production-link"
          >
            december design & development
          </a>
          .
        </p>
      </section>
    </footer>
  );
};

export default Footer;
