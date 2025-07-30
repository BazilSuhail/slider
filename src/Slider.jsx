import React from 'react';
import './Slider.css';

const Slider = ({ slides = [] }) => {
  const loopedSlides = [...slides, ...slides]; // clone slides for looping

  return (
    <div className="infinite-slider">
      <div className="infinite-slider__track">
        {loopedSlides.map((slide, idx) => (
          <div className="infinite-slider__slide" key={idx}>
            <img src={slide} alt={`Slide ${idx}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
