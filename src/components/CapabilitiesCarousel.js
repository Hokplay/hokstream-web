import React, { useState, useEffect } from 'react';

const translations = {
  'zh-TW': {
    dynamicCost: '動員成本',
    dynamicCostItems: [
      '40組螢幕',
      '20位人員',
      '10台電腦',
      '5組控台',
      '4套軟體'
    ],
    venueStaff: '現場人力',
    venueStaffItems: [
      '導播',
      '音控',
      '字卡',
      'OB觀察者',
      '鋼管',
      '攝影師',
      '製作人'
    ],
    justUsing: '僅使用',
    justUsingItems: [
      '2組螢幕',
      '2位人員',
      '1台電腦',
      '1台 edge server',
      '1套線上導播機軟體'
    ],
    interfaceNote1: '雲機操作介面',
    interfaceNote2: '環節切換'
  },
  'en': {
    dynamicCost: 'Resources Required',
    dynamicCostItems: [
      '40 monitors',
      '20 staff members',
      '10 computers',
      '5 control stations',
      '4 software suites'
    ],
    venueStaff: 'Venue Staff',
    venueStaffItems: [
      'Director',
      'Sound control',
      'Graphics',
      'Observer',
      'Production manager',
      'Cameraman',
      'Producer'
    ],
    justUsing: 'Now Just Using',
    justUsingItems: [
      '2 monitors',
      '2 staff members',
      '1 computer',
      '1 edge server',
      '1 online directing software'
    ],
    interfaceNote1: 'Cloud operation interface',
    interfaceNote2: 'Section switching'
  }
};

const CapabilitiesCarousel = ({ language = 'zh-TW' }) => {
  const t = translations[language];
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 2; // Now showing 2 slides (with 2 items per slide)
  
  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);
  
  const slides = [
    [
      {
        title: t.dynamicCost,
        items: t.dynamicCostItems,
        image: "/images/cost.png",
        color: '#FF6F3D'
      },
      {
        title: t.venueStaff,
        items: t.venueStaffItems,
        image: "/images/man_power.png",
        color: '#FF6F3D'
      }
    ],
    [
      {
        title: t.justUsing,
        items: t.justUsingItems,
        image: "/images/usage.png",
        color: '#FF6F3D',
        notes: [t.interfaceNote1, t.interfaceNote2]
      }
    ]
  ];
  
  const goToSlide = (index) => {
    setActiveSlide(index);
  };
  
  return (
    <div className="capabilities-carousel" style={{ 
      backgroundColor: '#f8f8f8', 
      padding: '40px 0',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div className="container" style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 20px' 
      }}>
        <div className="carousel-container" style={{
          position: 'relative',
          overflow: 'hidden',
          marginBottom: '20px'
        }}>
          <div className="slides-wrapper" style={{
            display: 'flex',
            width: '100%',
            height: '400px',
            transition: 'transform 0.5s ease',
            transform: `translateX(-${activeSlide * 100}%)`
          }}>
            {slides.map((slidePair, slideIndex) => (
              <div 
                key={slideIndex} 
                className="slide-pair" 
                style={{
                  flex: '0 0 100%',
                  display: 'flex',
                  gap: '20px'
                }}
              >
                {slidePair.map((slide, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="slide-item" 
                    style={{
                      flex: '1 0 calc(50% - 10px)',
                      display: 'flex',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      background: '#fff',
                      height: '100%'
                    }}
                  >
                    <div className="slide-info" style={{
                      width: '40%',
                      padding: '15px',
                      background: 'rgba(240,240,240,0.9)',
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      <h3 style={{
                        color: slide.color,
                        fontSize: '1.2rem',
                        margin: '0 0 10px 0'
                      }}>
                        {slide.title}
                      </h3>
                      <ul style={{
                        listStyle: 'none',
                        padding: '0',
                        margin: '0'
                      }}>
                        {slide.items.map((item, i) => (
                          <li key={i} style={{
                            display: 'flex',
                            alignItems: 'center',
                            margin: '6px 0',
                            fontSize: '0.85rem'
                          }}>
                            <span style={{
                              marginRight: '8px',
                              fontSize: '0.7rem'
                            }}>•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="slide-image" style={{
                      width: '60%',
                      position: 'relative'
                    }}>
                      <img 
                        src={slide.image} 
                        alt={slide.title} 
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                      {slide.notes && (
                        <div style={{
                          position: 'absolute',
                          bottom: '15px',
                          right: '15px',
                          textAlign: 'right'
                        }}>
                          {slide.notes.map((note, i) => (
                            <p key={i} style={{
                              margin: '3px 0',
                              color: '#fff',
                              fontSize: '0.9rem',
                              textShadow: '0 1px 2px rgba(0,0,0,0.8)'
                            }}>
                              {note}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="progress-bar-container" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px'
        }}>
          <div className="progress-bar" style={{
            width: '100%',
            maxWidth: '400px',
            height: '6px',
            backgroundColor: '#ddd',
            borderRadius: '3px',
            overflow: 'hidden',
            position: 'relative'
          }}>
            {slides.map((_, index) => (
              <div 
                key={index} 
                className={`progress-segment ${index <= activeSlide ? 'active' : ''}`}
                style={{
                  position: 'absolute',
                  left: `${(index / totalSlides) * 100}%`,
                  width: `${100 / totalSlides}%`,
                  height: '100%',
                  background: index <= activeSlide ? '#FF6F3D' : 'transparent',
                  transition: 'background 0.3s ease'
                }}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
        
        {/* Dot Indicators */}
        <div className="dot-indicators" style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '15px'
        }}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: index === activeSlide ? '#FF6F3D' : '#ddd',
                border: 'none',
                margin: '0 5px',
                padding: 0,
                cursor: 'pointer',
                transition: 'background 0.3s ease'
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CapabilitiesCarousel;