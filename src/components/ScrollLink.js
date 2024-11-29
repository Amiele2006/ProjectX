import React from 'react';

const ScrollLink = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a href="#f" className="footer-links" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
      Get in Touch
    </a>
  );
};

export default ScrollLink;