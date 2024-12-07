import React from 'react';
import './ScrollToTopButton.css';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className="scroll-to-top-btn" onClick={scrollToTop}>
      ↑
    </button>
  );
};

export default ScrollToTopButton;
