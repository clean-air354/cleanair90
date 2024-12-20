import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css'; 

const Hero = () => {
  
  
  return (
    <section className="hero">
      {/* Top-left title */}
      <h1 className="hero-title">Breathe Fresh Air</h1>

      {/* "Learn More" Button */}
      <Link to="/learn-more" className="btn learn-more">Learn More</Link>

      {/* Shop Now Button */}
      <Link to="/" className="btn shop-now">Shop Now</Link>
    </section>
  );
};

export default Hero;
