import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import img from "../assets/ismail (2).jpeg";

const Intro = () => {
  return (
    <section id="about" className="py-5">
      <div className="container text-center">
        <h5 className="text-muted">Get to know</h5>
        <h2 className="mb-4">About Me</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="position-relative d-flex align-items-center justify-content-center">
              <div className="overflow-hidden rounded-4">
                <img
                  src={img}
                  alt="Mohammad Ismail Alam"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-md-8 text-start">
            <div className="rainbow">
              <div className="row g-3 fs-5">
                <div className="col-md-6">
                  <div className="p-3 bg-light border rounded-3 text-center">
                    <FaAward className="text-primary mb-3" />
                    <h5>Experience</h5>
                    <div>
                      <small>8 months Intern at Kona SL</small>
                    </div>
                    <div>
                      <small>
                        3 months Associate Software Engineer at Dot BD Solution
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 bg-light border rounded text-center">
                    <VscFolderLibrary className="text-primary mb-3" />
                    <h5>Projects</h5>
                    <small>
                      <strong>30+</strong> Completed Projects
                    </small>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 bg-light border rounded text-center">
                    <VscFolderLibrary className="text-primary mb-3" />
                    <h5>Recent Project</h5>
                    <span>Gadget Labge</span>
                    <h5>An Ecommerce Website</h5>
                  </div>
                </div>
              </div>
              <p className="text-muted mt-3">
                8 months experienced Front End Developer with hands-on
                experience in identifying web-based user interactions along with
                designing and implementing highly-responsive user interface
                components by deploying React concepts. Proficient in writing
                application interface code via React JS and JavaScript
                workflows. Adept at monitoring and maintaining frontend
                performance and troubleshooting and debugging the same to
                bolster overall performance.
              </p>
              <p className="text-muted">
                At the time in Dot BD Solution, I have prepared User Requirement
                Specification documentation, UI design, and implementation using
                Next.js with Tailwind CSS.
              </p>
              <a href="#contact" className="btn btn-primary">
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
