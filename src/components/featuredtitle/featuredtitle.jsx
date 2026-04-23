import React from 'react';
import './featuredtitle.css';

const FeaturedTitle = () => {
  return (
    <section className="featured-games" id="featured">
      <div className="section-header">
        <h2 className="section-title">
          CHOOSE YOUR <span className="gradient-text">FAVORITE</span> GAMES
        </h2>
        <p className="section-subtitle">
          Offer sneak peeks and previews of upcoming games, including 
          trailers, screenshots, and information about release.
        </p>
      </div>

      <div className="featured-content">
        <div className="featured-image-container">
          <img 
            src="/Images/feautred1.svg" 
            alt="Featured Games Carousel" 
            className="featured-svg" 
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedTitle;
