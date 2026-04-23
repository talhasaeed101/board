import React from 'react'
import Navbar from '../../components/Navbar/Navbar' 
import Herosection from '../../components/Herosection/Herosection'
import Actionline from '../../components/Actionline/Actionline.jsx'
import FeaturedTitle from '../../components/featuredtitle/featuredtitle'
import CurrentDiv from '../../components/currentdiv/currentdiv'
import TopGames from '../../components/Topgames/TopGames.jsx'
import CommentsSection from '../../components/commentssection/CommentsSection.jsx'
import FooterSection from '../../components/footersection/FooterSection.jsx'
import CursorFollower from '../../components/CursorFollower/CursorFollower'
import Preloader from '../../components/Preloader/Preloader'

function LandingPage() {
  React.useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="landing-page">
      <Preloader />
      <CursorFollower />
      <Navbar />
      <div className="reveal"><Herosection /></div>
      <div className="reveal"><Actionline /></div>
      <div className="reveal"><FeaturedTitle /></div>
      <div className="reveal"><CurrentDiv /></div>
      <div className="reveal"><TopGames /></div>
      <div className="reveal"><CommentsSection /></div>
      <div className="reveal"><FooterSection /></div>
    </div>
  )
}

export default LandingPage