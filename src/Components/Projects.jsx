import React from "react";
import "../Stylesheets/Projects.css";

const Projects = () => {
  return (
    <section className="projects-section bg-slate-600 p-3 pt-20 text-white">
      <h1 className="uppercase">Projects</h1>
      <div className="projects-items flex md:flex-row flex-col items-center mt-8">
        <div className="project-item border p-2 w-64 text-right mx-6 my-6">
          <img
            src="./social-media-4140959_1280.jpg"
            alt="project-img"
            className="project-item-img rounded"
          />
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
            nihil earum assumenda praesentium consequuntur.
          </p>
          <button className="bg-slate-700 rounded-sm p-2 text-sm hover:bg-slate-800 mt-2">
            More Details
          </button>
        </div>
        <div className="project-item border p-2 w-64 text-right">
          <img
            src="./social-media-4140959_1280.jpg"
            alt="project-img"
            className="project-item-img rounded"
          />
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
            nihil earum assumenda praesentium consequuntur.
          </p>
          <button className="bg-slate-700 rounded-sm p-2 text-sm hover:bg-slate-800 mt-2">
            More Details
          </button>
        </div>
        <div className="project-item"></div>
      </div>
    </section>
  );
};

export default Projects;
