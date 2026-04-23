import React from 'react';
import './TopGames.css';
import Marquee from '../Marquee/Marquee';

const TopGames = () => {
  const games = [
    { 
      id: 1, 
      img: '/Images/card1.svg', 
      title: 'Core Philosophies', 
      userName: 'Cameron Williamson', 
      userRole: 'Gillette',
      avatar: 'https://i.pravatar.cc/150?u=cameron'
    },
    { 
      id: 2, 
      img: '/Images/card2.svg', 
      title: 'Core Philosophies', 
      userName: 'Dianne Russell', 
      userRole: 'Louis Vuitton',
      avatar: 'https://i.pravatar.cc/150?u=dianne'
    },
    { 
      id: 3, 
      img: '/Images/card3.svg', 
      title: 'Core Philosophies', 
      userName: 'Jane Cooper', 
      userRole: 'MasterCard',
      avatar: 'https://i.pravatar.cc/150?u=jane'
    },
    { 
      id: 4, 
      img: '/Images/card4.svg', 
      title: 'Core Philosophies', 
      userName: 'Cody Fisher', 
      userRole: 'The Walt Disney Company',
      avatar: 'https://i.pravatar.cc/150?u=cody'
    },
    { 
      id: 5, 
      img: '/Images/card5.svg', 
      title: 'Core Philosophies', 
      userName: 'Wade Warren', 
      userRole: 'Gillette',
      avatar: 'https://i.pravatar.cc/150?u=wade'
    },
    { 
      id: 6, 
      img: '/Images/card6.svg', 
      title: 'Core Philosophies', 
      userName: 'Robert Fox', 
      userRole: "L'Oreal",
      avatar: 'https://i.pravatar.cc/150?u=robert'
    },
  ];

  const categories = [
    { id: 'mewest', label: 'MEWEST GAMES', active: true },
    { id: 'latest', label: 'LATEST GAMES', active: false },
    { id: 'fight', label: 'FIGHT GAMES', active: false },
    { id: 'sport', label: 'SPORT GAMES', active: false }
  ];

  const marqueeItems = [
    "ACTION - PACKED",
    "MIND - BENDING",
    "COLLECTION",
    "ADVENTURE HUB",
    "EPIC JOURNEY",
    "DYNAMIC WORLDS"
  ];

  const SparkleStar = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sparkle-icon">
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="url(#star-grad)" />
      <defs>
        <linearGradient id="star-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4D17E2" />
          <stop offset="1" stopColor="#FF007A" />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <section className="top-games-section" id="top-games">
      <div className="top-games-container">
        <div className="top-games-header">
          <h2 className="top-games-title">
            WELCOME TO THE <br /> <span className="gradient-title">TOP GAMES</span>
          </h2>
          
          <div className="filter-tabs">
            {categories.map((cat) => (
              <div 
                key={cat.id} 
                className={`filter-tab ${cat.active ? 'active' : ''}`}
              >
                <span className="tab-text">{cat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="games-grid">
          {games.map((game) => (
            <div key={game.id} className="game-card">
              <div className="game-card-image">
                <img src={game.img} alt={game.title} />
              </div>
              
              <div className="game-card-content">
                <h3 className="game-title">{game.title}</h3>
                
                <div className="user-info-row">
                  <div className="avatar-wrapper">
                    <img src={game.avatar} alt={game.userName} className="user-avatar" />
                  </div>
                  <div className="user-meta">
                    <span className="user-name">{game.userName}</span>
                    <span className="user-role">{game.userRole}</span>
                  </div>
                </div>

                <div className="card-action">
                  <button className="live-demo-btn">
                    <span className="btn-text">LIVE DEMO</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Marquee />
    </section>
  );
};

export default TopGames;
