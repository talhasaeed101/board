import React, { useEffect, useRef, useState } from 'react';
import './CommentsSection.css';
import Marquee from '../Marquee/Marquee';

const CommentsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
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

  const testimonials = [
    {
      id: 1,
      name: 'Arlene McCoy',
      role: "McDonald's",
      comment: 'One of the standout features of this gaming website is its extensive library of game guides and tutorials. It has helped me level up my skills, conquer challenging quests, and discover hidden secrets within games. The guides are comprehensive, easy to follow, and have undoubtedly elevated my gaming performance.',
      avatar: 'https://i.pravatar.cc/150?u=arlene',
      rating: 5,
    },
    {
      id: 2,
      name: 'Kathryn Murphy',
      role: 'General Electric',
      comment: 'Another aspect that sets this website apart is its vibrant and passionate community. The forum section provides a platform for gamers from all walks of life to connect, share their experiences, and discuss their favorite titles. I’ve made valuable friendships and found like-minded individuals who share my enthusiasm for gaming.',
      avatar: 'https://i.pravatar.cc/150?u=kathryn',
      rating: 5,
    }
  ];

  const QuoteIcon = () => (
    <div className="quote-icon-wrapper">
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0 L25 25 L25 60 L0 60 Z" fill="url(#quote-grad-1)" />
        <path d="M35 0 L60 25 L60 60 L35 60 Z" fill="url(#quote-grad-2)" />
        <rect x="1" y="1" width="58" height="58" fill="none" stroke="#0ea5e9" strokeWidth="2" />
        <defs>
          <linearGradient id="quote-grad-1" x1="15" y1="0" x2="15" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF007A" />
            <stop offset="1" stopColor="#4D17E2" />
          </linearGradient>
          <linearGradient id="quote-grad-2" x1="47.5" y1="0" x2="47.5" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4D17E2" />
            <stop offset="1" stopColor="#7B61FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );

  const StarRating = ({ count }) => (
    <div className="star-rating">
      {[...Array(count)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="white">
          <path d="M12 .587l3.668 7.431 8.214 1.196-5.941 5.792 1.402 8.182L12 18.898l-7.343 3.86 1.402-8.182-5.941-5.792 8.214-1.196z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="comments-section" ref={sectionRef}>
      <div className="comments-container">
        <div className="comments-grid">
          {testimonials.map((t, index) => (
            <div 
              key={t.id} 
              className={`testimonial-card ${isVisible ? 'animate-in' : ''} delay-${index}`}
            >
              <QuoteIcon />
              <div className="card-top">
                <StarRating count={t.rating} />
                <p className="testimonial-text">{t.comment}</p>
              </div>
              
              <div className="card-divider"></div>
              
              <div className="card-bottom">
                <div className="user-profile">
                  <div className="user-avatar-small">
                    <img src={t.avatar} alt={t.name} />
                  </div>
                  <div className="user-details">
                    <h4 className="user-name-comment">{t.name}</h4>
                    <span className="user-role-comment">{t.role}</span>
                  </div>
                </div>
                
                <div className="verified-badge">
                  <div className="verified-icon">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                    </svg>
                  </div>
                  <span className="verified-text">Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination-dots">
          <div className="dot"></div>
          <div className="dot active"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
      <Marquee />
    </section>
  );
};

export default CommentsSection;
