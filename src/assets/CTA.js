import React from 'react';
import CV from './ismailResume2024.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn btn-info m-2">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
