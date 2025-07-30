import React from 'react';
import './Slider.css'; // or use styled-components / CSS Modules

const Slider = ({ slides = [] }) => {
  return (
    <div className="slider">
      <div className="slider__track">
        {slides.map((slide, idx) => (
          <div className="slider__slide" key={idx}>
            <img src={slide} alt={`Slide ${idx}`} />
          </div>
        ))}
      </div>
      <div className="slider__nav">
        {slides.map((_, idx) => (
          <a href={`#slide-${idx}`} key={idx} className="slider__dot" />
        ))}
      </div>
    </div>
  );
};

export default Slider;
