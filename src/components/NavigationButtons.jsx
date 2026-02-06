import React from 'react';
import './NavigationButtons.css';

const NavigationButtons = ({ onPrevious, onNext, disabled = false }) => {
  return (
    <div className="navigation-buttons">
      <button
        className="nav-button nav-button-prev"
        onClick={onPrevious}
        disabled={disabled}
        aria-label="Previous view"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Previous</span>
      </button>

      <button
        className="nav-button nav-button-next"
        onClick={onNext}
        disabled={disabled}
        aria-label="Next view"
      >
        <span>Next</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default NavigationButtons;
