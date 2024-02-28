import React from "react";
import "../Stylesheets/Projects.css";
import { Link } from "react-router-dom";

const Projects = () => {
  const projectItems = [
    {
      id: 1,
      projectImg: "",
      projectTitle: "ABC",
      projectDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      projectImg: "",
      projectTitle: "ABC",
      projectDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      projectImg: "",
      projectTitle: "ABC",
      projectDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h1 className="uppercase text-center p-2 md:text-3xl  text-xl">
        projects
      </h1>
      <div className="container m-auto md:px-40">
        <div className="projects-items flex justify-center gap-8 md:flex-row flex-col flex-wrap items-center">
          {projectItems.map((item) => {
            return (
              <div
                className="project-item md:p-3 p-2 md:w-72 rounded-lg"
                key={item.id}
              >
                <div className="image-holder mx-5 my-2">
                  <img
                    src="./social-media-4140959_1280.jpg"
                    alt="project-img"
                    className="project-item-img rounded"
                  />
                </div>
                <div className="title text-center text-xl space-mono-regular my-3 border-b">
                  {item.projectTitle}
                </div>
                <p className="text-justify">{item.projectDesc}</p>
                <div className="text-center">
                  <a className=" rounded-sm cursor-pointer text-sm mt-2 check-link">
                    Check it out
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="my-5 text-center text-xl ">
          <Link to="/" className="hover:text-blue-800">
            Explore more {"> > >"}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
