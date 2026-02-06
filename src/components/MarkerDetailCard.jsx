import React from 'react';
import { ELEMENT_COLORS } from '../data/markersData';
import './MarkerDetailCard.css';

const MarkerDetailCard = ({ marker, onClose }) => {
  if (!marker) return null;

  const elementColor = ELEMENT_COLORS[marker.element] || '#808080';

  return (
    <div className="marker-detail-overlay" onClick={onClose}>
      <div className="marker-detail-card" onClick={(e) => e.stopPropagation()}>
        {/* Gradient border effect */}
        <div className="card-border-gradient"></div>
        
        {/* Card content */}
        <div className="card-content">
          {/* Close button */}
          <button className="card-close-btn" onClick={onClose} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M15 5L5 15M5 5L15 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Title */}
          <h2 className="card-title">{marker.title}</h2>

          {/* Stats grid */}
          <div className="card-stats">
            <div className="stat-item">
              <span className="stat-label">Level</span>
              <span className="stat-value">{marker.level}</span>
            </div>

            <div className="stat-item">
              <span className="stat-label">Element</span>
              <span className="stat-value" style={{ color: elementColor }}>
                {marker.element}
              </span>
            </div>

            <div className="stat-item">
              <span className="stat-label">Attack</span>
              <span className="stat-value stat-attack">{marker.attack}</span>
            </div>

            <div className="stat-item">
              <span className="stat-label">Defense</span>
              <span className="stat-value stat-defense">{marker.defense}</span>
            </div>
          </div>

          {/* Element indicator */}
          <div className="element-indicator">
            <div
              className="element-dot"
              style={{ backgroundColor: elementColor }}
            ></div>
            <span className="element-text">{marker.element} Type</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkerDetailCard;
