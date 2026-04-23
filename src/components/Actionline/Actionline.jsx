import React from 'react';
import './Actionline.css';

const Actionline = () => {
  const content = [
    { text: "GAMING SPANING", id: 1 },
    { text: "ACTION - PACKED", id: 2 },
    { text: "MIND - BENDING", id: 3 },
    { text: "COLLECTION OG GAMES", id: 4 },
  ];

  // Repeat for infinite marquee effect
  const repeatedContent = [...content, ...content, ...content, ...content];

  return (
    <div className="actionline-wrapper">
      <div className="actionline-container">
        <div className="marquee">
          <div className="marquee-content">
            {repeatedContent.map((item, index) => (
              <React.Fragment key={`${item.id}-${index}`}>
                <span className="action-text">{item.text}</span>
                <span className="sparkle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="url(#sparkle-grad)"/>
                    <defs>
                      <linearGradient id="sparkle-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F0147E" />
                        <stop offset="1" stopColor="#FF00FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </React.Fragment>
            ))}
          </div>
          {/* Second copy for seamless transition */}
          <div className="marquee-content" aria-hidden="true">
            {repeatedContent.map((item, index) => (
              <React.Fragment key={`copy-${item.id}-${index}`}>
                <span className="action-text">{item.text}</span>
                <span className="sparkle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="url(#sparkle-grad-copy)"/>
                    <defs>
                      <linearGradient id="sparkle-grad-copy" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F0147E" />
                        <stop offset="1" stopColor="#FF00FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actionline;
