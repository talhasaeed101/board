import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Left Section: Logo */}
        <div className="navbar-logo">
          <img src="/Images/mainlogo1.svg" alt="board logo" />
          <span className="logo-text">board</span>
        </div>

        {/* Center Section: Navigation Links */}
        <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="#products" className="nav-link active" onClick={closeMenu}>PRODUCTS</a>
          </li>
          <li className="nav-item">
            <a href="#apps-games" className="nav-link" onClick={closeMenu}>APPS & GAMES</a>
          </li>
          <li className="nav-item">
            <a href="#features" className="nav-link" onClick={closeMenu}>FEATURES</a>
          </li>
          <li className="nav-item">
            <a href="#support" className="nav-link" onClick={closeMenu}>SUPPORT</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={closeMenu}>ABOUT</a>
          </li>
        </ul>

        {/* Right Section: Icons & Menu */}
        <div className="navbar-right">
          <div className="cart-icon-wrapper">
            <svg 
              className="cart-icon" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M3 6H21" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <span className="cart-dot"></span>
          </div>

          {/* Hamburger Menu Icon */}
          <div className={isMenuOpen ? "hamburger active" : "hamburger"} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && <div className="menu-backdrop" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navbar;
