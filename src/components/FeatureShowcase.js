import React, { useState, useEffect } from 'react';
import './FeatureShowcase.css';

const FeatureShowcase = ({ features, interval = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-cycle through highlights
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, interval);

    return () => clearInterval(timer);
  }, [features.length, interval]);

  // Manually select a highlight
  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="feature-showcase-container">
      <div className="feature-main-image">
        <img src={features[activeIndex].image} alt={features[activeIndex].title} />
        <div className="highlight-area" style={features[activeIndex].highlightStyle}></div>
      </div>
      
      <div className="feature-description">
        <h3>{features[activeIndex].title}</h3>
        <p>{features[activeIndex].description}</p>
      </div>
      
      <div className="feature-navigation">
        <div className="feature-dots">
          {features.map((feature, index) => (
            <span 
              key={index} 
              className={`feature-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureShowcase;