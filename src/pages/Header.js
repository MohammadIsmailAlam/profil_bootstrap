import React from "react";
import CTA from './../assets/CTA';

const Header = () => {
  return (
    <header id="home" className="py-5">
      <div className="container-fluid header__container rainbow d-flex flex-column justify-content-center align-items-center">
        <h5 className="mb-2">Hello I'm</h5>
        <h1 className="mb-2">Mohammad Ismail Alam</h1>
        <h5 className="mb-4">Front-end Developer</h5>
        <h5 className="mb-4">React JS</h5>
        <CTA />
      </div>
    </header>
  );
};

export default Header;
