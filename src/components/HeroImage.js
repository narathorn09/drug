import React from 'react';

const HeroImage = ({ image, title, subtitle }) => {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${image})` }}>
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
};

export default HeroImage;
