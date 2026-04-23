import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      // Wait for exit animation to finish before unmounting
      setTimeout(() => setShouldRender(false), 800);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) return null;

  return (
    <div className={`preloader ${!loading ? 'exit' : ''}`}>
      <div className="loader-content">
        <div className="loader-logo">
          <img src="/Images/mainlogo1.svg" alt="Logo" />
          <span className="logo-text">board</span>
        </div>
        <div className="loader-bar">
          <div className="loader-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
