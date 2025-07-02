// src/components/Contact.jsx
import React from 'react';
import '../stylesheets/Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="section-header">Contact Me</h2>
      <div className="icons">
        <a href="https://www.linkedin.com/in/manish-kumar-madipadige/" target="_blank" rel="noopener noreferrer">
          <img src="images/linkedin.png" alt="LinkedIn" />
        </a>
        <a  href="https://leetcode.com/u/oomanish459/" target="_blank" rel="noopener noreferrer">
          <img src="images/lc.png" alt="Leetcode" />
        </a>
        <a href="https://github.com/Madipadige-ManishKumar" target="_blank" rel="noopener noreferrer">
          <img src="images/github.png" alt="GitHub" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
