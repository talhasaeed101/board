import React from 'react';
import './Marquee.css';

const Marquee = () => {
  const marqueeItems = [
    "GAMING SPANING",
    "ACTION - PACKED",
    "MIND - BENDING",
    "COLLECTION OG GAMES"
  ];

  const SparkleStar = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sparkle-icon">
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="url(#star-grad-marquee)" />
      <defs>
        <linearGradient id="star-grad-marquee" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4D17E2" />
          <stop offset="1" stopColor="#FF007A" />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <div className="marquee-section-shared">
      <div className="marquee-content-shared">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
          <React.Fragment key={index}>
            <span className="marquee-item-shared">{item}</span>
            <SparkleStar />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
