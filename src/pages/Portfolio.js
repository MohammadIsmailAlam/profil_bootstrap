import React from "react";
import IMG1 from "../assets/khuda-lagse.png";
import IMG2 from "../assets/Gadget_lagbe.png";
import IMG3 from "../assets/Feedback.png";
import IMG4 from "../assets/my-todo.png";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Khuda-lagse",
      img: IMG1,
      description:
        "An treat given website is a huge interactive platform to present various treats for people.",
      technologies:
        "Html | CSS | React Js | Material UI | Bootstrap | React-Router-Dom | React Hook From",
      link: "https://khuda-lagse.vercel.app/",
      github: "https://github.com/MohammadIsmailAlam/Treat-Managment-System",
    },
    {
      id: 2,
      title: "Gadget Lagbe",
      img: IMG2,
      description:
        "An innovative e-commerce website for gadgets, offering a wide range of cutting-edge products and an intuitive shopping experience.",
      technologies: "React Js | Tailwind CSS | React-Router-Dom | React Icons",
      link: "https://gadget-lagbe.vercel.app/",
      github: "https://github.com/MohammadIsmailAlam/Ecommerec-Shoping-Website",
    },
    {
      id: 3,
      title: "FeedBack Plot App",
      img: IMG3,
      description:
        "This site is a kind of social media platform. You can collect feedbacks and share your feedback.",
      technologies: "React | Redux",
      link: "https://react-redux-project-sage.vercel.app/",
      github: "https://github.com/MohammadIsmailAlam/react-redux-project",
    },
    {
      id: 4,
      title: "My TO-DO List",
      img: IMG4,
      description: "Create a to-do, Store your data, Remember your tasks",
      technologies: "JavaScript",
      link: "https://my-todo-app-list.vercel.app/",
      github: "https://github.com/MohammadIsmailAlam/my-todo-app",
    },
  ];

  return (
    <section id="portfolio" className="py-5">
      <h5 className="text-muted text-center">My Recent Work</h5>
      <h2 className="text-center">Portfolio</h2>

      <div className="container d-flex justify-content-center">
        <div className="row">
          {soloProjects.map((pro) => (
            <article
              className="portfolio__item col-md-4 p-2"
              key={pro.id}
            >
              <div className="portfolio__item-image rounded border">
                <img
                  src={pro.img}
                  alt={pro.img}
                  className="img-fluid rounded"
                />
                <div className="portfolio__item-content">
                  <h3>{pro.title}</h3>
                  <p>{pro.description}</p>
                  <p>{pro.technologies}</p>
                  <div className="portfolio__item-cta d-flex justify-content-center mb-4">
                    <a
                      href={pro.github}
                      target="_blank"
                      className="btn btn-secondary me-3"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      href={pro.link}
                      target="_blank"
                      className="btn btn-primary"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
