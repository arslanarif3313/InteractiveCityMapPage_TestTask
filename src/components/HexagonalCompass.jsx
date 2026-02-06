import React from 'react';
import './HexagonalCompass.css';

const HexagonalCompass = ({ currentSide, onSideClick, totalSides = 6 }) => {
  // Generate hexagon points for SVG polygon
  const generateHexagonPoints = (centerX, centerY, radius) => {
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 2; // Start from top
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      points.push(`${x},${y}`);
    }
    return points.join(' ');
  };

  // Generate individual segment paths for clickable areas
  const generateSegmentPath = (index, centerX, centerY, innerRadius, outerRadius) => {
    const startAngle = (Math.PI / 3) * index - Math.PI / 2;
    const endAngle = (Math.PI / 3) * (index + 1) - Math.PI / 2;

    const x1 = centerX + innerRadius * Math.cos(startAngle);
    const y1 = centerY + innerRadius * Math.sin(startAngle);
    const x2 = centerX + outerRadius * Math.cos(startAngle);
    const y2 = centerY + outerRadius * Math.sin(startAngle);
    const x3 = centerX + outerRadius * Math.cos(endAngle);
    const y3 = centerY + outerRadius * Math.sin(endAngle);
    const x4 = centerX + innerRadius * Math.cos(endAngle);
    const y4 = centerY + innerRadius * Math.sin(endAngle);

    return `M ${x1} ${y1} L ${x2} ${y2} A ${outerRadius} ${outerRadius} 0 0 1 ${x3} ${y3} L ${x4} ${y4} A ${innerRadius} ${innerRadius} 0 0 0 ${x1} ${y1} Z`;
  };

  const centerX = 60;
  const centerY = 60;
  const outerRadius = 50;
  const innerRadius = 20;

  return (
    <div className="hexagonal-compass">
      <svg width="120" height="120" viewBox="0 0 120 120">
        {/* Outer hexagon border */}
        <polygon
          points={generateHexagonPoints(centerX, centerY, outerRadius)}
          className="compass-border"
        />

        {/* Inner hexagon */}
        <polygon
          points={generateHexagonPoints(centerX, centerY, innerRadius)}
          className="compass-center"
        />

        {/* Clickable segments */}
        {Array.from({ length: totalSides }).map((_, index) => (
          <g key={index}>
            <path
              d={generateSegmentPath(index, centerX, centerY, innerRadius, outerRadius)}
              className={`compass-segment ${currentSide === index ? 'active' : ''}`}
              onClick={() => onSideClick(index)}
            />
            {/* Segment divider lines */}
            <line
              x1={centerX + innerRadius * Math.cos((Math.PI / 3) * index - Math.PI / 2)}
              y1={centerY + innerRadius * Math.sin((Math.PI / 3) * index - Math.PI / 2)}
              x2={centerX + outerRadius * Math.cos((Math.PI / 3) * index - Math.PI / 2)}
              y2={centerY + outerRadius * Math.sin((Math.PI / 3) * index - Math.PI / 2)}
              className="compass-divider"
            />
          </g>
        ))}

        {/* Center circle */}
        <circle cx={centerX} cy={centerY} r="8" className="compass-center-dot" />
      </svg>
      
      {/* Compass label */}
      <div className="compass-label">View {currentSide + 1}</div>
    </div>
  );
};

export default HexagonalCompass;
