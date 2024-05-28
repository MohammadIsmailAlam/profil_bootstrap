import React from "react";
import "../CSS/experience.css"
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience" className="py-5">
      <h5 className="text-muted">The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="experience__frontend bg-light p-4 rounded border border-primary">
              <h3 className="text-center mb-4">Front-end Development</h3>
              <div className="row g-3">
                <div className="col-lg-6 col-md-6">
                  <article className="experience__details d-flex align-items-center gap-2">
                    <BsFillPatchCheckFill className="experience__details-icon" />
                    <h4>React JS</h4>
                  </article>
                  <article className="experience__details d-flex align-items-center gap-2">
                    <BsFillPatchCheckFill className="experience__details-icon" />
                    <h4>HTML</h4>
                  </article>
                  <article className="experience__details d-flex align-items-center gap-2">
                    <BsFillPatchCheckFill className="experience__details-icon" />
                    <h4>CSS</h4>
                  </article>
                  <article className="experience__details d-flex align-items-center gap-2">
                    <BsFillPatchCheckFill className="experience__details-icon" />
                    <h4>Bootstrap</h4>
                  </article>
                  <article className="experience__details d-flex align-items-center gap-2">
                    <BsFillPatchCheckFill className="experience__details-icon" />
                    <h4>Material UI</h4>
                  </article>
                </div>
                <div className="col-lg-6 col-md-6">
                  <article className="experience__details d-flex align-items-center gap-2">
                    <BsFillPatchCheckFill className="experience__details-icon" />
                    <h4>React-Router-Dom</h4>
                  </article>
                  <article className="experience__details d-flex align-items-center gap-2">
                    <BsFillPatchCheckFill className="experience__details-icon" />
                    <h4>React Hook Form</h4>
                  </article>
                  <article className="experience__details d-flex align-items-center gap-2">
                    <BsFillPatchCheckFill className="experience__details-icon" />
                    <h4>Tailwind CSS</h4>
                  </article>
                  <article className="experience__details d-flex align-items-center gap-2">
                    <BsFillPatchCheckFill className="experience__details-icon" />
                    <h4>JavaScript</h4>
                  </article>
                  <article className="experience__details d-flex align-items-center gap-2">
                    <BsFillPatchCheckFill className="experience__details-icon" />
                    <h4>Java(Basic)</h4>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
