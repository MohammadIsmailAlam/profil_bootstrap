import React, { useState } from 'react';

const Topbar = () => {
  const [activeNav, setActiveNav] = useState('#home');

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home" onClick={() => setActiveNav('#home')}>
          My Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#home" onClick={() => setActiveNav('#home')} className={`nav-link ${activeNav === '#home' ? 'active' : ''}`}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" onClick={() => setActiveNav('#about')} className={`nav-link ${activeNav === '#about' ? 'active' : ''}`}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#experience" onClick={() => setActiveNav('#experience')} className={`nav-link ${activeNav === '#experience' ? 'active' : ''}`}>
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={`nav-link ${activeNav === '#portfolio' ? 'active' : ''}`}>
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" onClick={() => setActiveNav('#contact')} className={`nav-link ${activeNav === '#contact' ? 'active' : ''}`}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
