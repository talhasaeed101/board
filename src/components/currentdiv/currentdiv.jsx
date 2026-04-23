import React, { useEffect, useRef, useState } from 'react';
import './currentdiv.css';

const CurrentDiv = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    // Immediate visibility to prevent "dark block" issue
    setIsVisible(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.01 } // More forgiving threshold
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation (max 10 degrees)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="current-section" ref={sectionRef}>
      <div className={`current-container ${isVisible ? 'animate-in' : ''}`}>
        {/* Top Control Buttons */}
        <div className="nav-controls">
          <button className="skew-btn primary">
            <span className="skew-text">VIEW ALL</span>
          </button>
          <button className="skew-btn secondary">
            <span className="skew-text">PLAY NOW</span>
          </button>
        </div>

        {/* Featured VR Card */}
        <div 
          className="main-feature-card"
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
          }}
        >
          <div className="card-content">
            <div className="feature-image-side">
              {/* Neon Glow Blobs */}
              <div className="glow-blob blob-1"></div>
              <div className="glow-blob blob-2"></div>
              
              <div className="parallax-wrapper" style={{
                transform: `translateX(${tilt.y * 0.5}px) translateY(${tilt.x * -0.5}px)`
              }}>
                <img src="/Images/current1.svg" alt="VR Gamer" className="vr-image" />
              </div>
            </div>
            
            <div className="feature-info-side">
              <h2 className="feature-title">
                DISCOVER THE <br />
                <span className="gradient-text-vr">VIRTUAL</span> REALITY <br />
                GAMING
              </h2>
              <p className="feature-description">
                A well-designed gaming header often incorporates elements such 
                as game characters, iconic symbols, vibrant colors, and dynamic 
                visuals to convey excitement, adventure, and the immersive 
                nature of gaming.
              </p>
              <button className="skew-btn cta-btn-border">
                <span className="skew-text">PLAY NOW</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Branding Ribbon - Keeping this as it's part of the component structure */}
      <div className="branding-ribbon">
        <div className="ribbon-track">
          <div className="ribbon-item">
            <span className="star-icon">✦</span>
            <span className="item-text">PANING</span>
          </div>
          <div className="ribbon-item">
            <span className="star-icon">✦</span>
            <span className="item-text">ACTION - PACKED</span>
          </div>
          <div className="ribbon-item">
            <span className="star-icon">✦</span>
            <span className="item-text">MIND - BENDING</span>
          </div>
          <div className="ribbon-item">
            <span className="star-icon">✦</span>
            <span className="item-text">COLLECTION</span>
          </div>
          {/* Duplicated for loop */}
          <div className="ribbon-item">
            <span className="star-icon">✦</span>
            <span className="item-text">PANING</span>
          </div>
          <div className="ribbon-item">
            <span className="star-icon">✦</span>
            <span className="item-text">ACTION - PACKED</span>
          </div>
          <div className="ribbon-item">
            <span className="star-icon">✦</span>
            <span className="item-text">MIND - BENDING</span>
          </div>
          <div className="ribbon-item">
            <span className="star-icon">✦</span>
            <span className="item-text">COLLECTION</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentDiv;
