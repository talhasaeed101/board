import React from 'react';
import './Herosection.css';
const Herosection = () => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX - innerWidth / 2) / 25;
    const y = (clientY - innerHeight / 2) / 25;
    setMousePos({ x, y });
  };

  return (
    <section className="hero" onMouseMove={handleMouseMove}>
      <div className="hero-glow-blobs">
        <div 
          className="glow-blob blob-1" 
          style={{ transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)` }}
        ></div>
        <div 
          className="glow-blob blob-2"
          style={{ transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)` }}
        ></div>
        <div className="glow-blob blob-3"></div>
      </div>

      <div 
        className="hero-container"
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
      >
        <div className="hero-content">
          <h1 className="hero-title">
            LET YOUR <br />
            MIND <span className="gradient-text">EXPLORE <br />
              NEW WORLD</span>
          </h1>
          <p className="hero-description">
            Playing electronic games, whether through consoles, computers, mobile phones or another medium altogether. Gaming is a nuanced term that suggests regular gameplay, possibly as a hobby.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary"><span className="btn-text">BUY NOW</span></button>
            <button className="btn-secondary"><span className="btn-text">PLAY NOW</span></button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <h3>300+</h3>
              <p>Unique Styles</p>
            </div>
            <div className="stat-item">
              <h3 className="highlight">200+</h3>
              <p>Projects Finished</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  )
};

export default Herosection;
