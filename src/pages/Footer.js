import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-5 mt-7">
      <a
        href="#home"
        className="footer__logo d-block fs-3 fw-bold mb-3 text-decoration-none text-light"
      >
        Mohammad Ismail Alam
      </a>
      <ul className="d-flex flex-wrap justify-content-center gap-3 mb-3 list-unstyled">
        <li>
          <a href="#home" className="text-light text-decoration-none">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-light text-decoration-none">
            About
          </a>
        </li>
        <li>
          <a href="#experience" className="text-light text-decoration-none">
            Skills
          </a>
        </li>
        <li>
          <a href="#portfolio" className="text-light text-decoration-none">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" className="text-light text-decoration-none">
            Contact
          </a>
        </li>
      </ul>
      <div className="footer__socials d-flex justify-content-center gap-3 mb-4">
        <a
          href="https://www.linkedin.com/in/mohammad-ismail-alam-859504233/"
          target="_blank"
          rel="noreferrer"
          className="bg-light text-primary p-2 rounded d-flex align-items-center justify-content-center border border-transparent">
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/MohammadIsmailAlam"
          target="_blank"
          rel="noreferrer"
          className="bg-light text-primary p-2 rounded d-flex align-items-center justify-content-center border border-transparent">
          <FaGithub />
        </a>
      </div>
      <div className="footer__copyright mb-4 text-light">
        <small>&copy; 2023. All rights reserved By Mohammad Ismail Alam.</small>
      </div>
    </footer>
  );
};

export default Footer;
