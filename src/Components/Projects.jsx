import React from "react";
import "../Stylesheets/Projects.css";
import { Slide, Fade } from "react-awesome-reveal";

const Projects = () => {
  const projectItems = [
    {
      id: 1,
      img_file_name: "tasktrackin.png",
      projectTitle: "TaskTracking",
      projectDesc:
        "TaskTracking will help you to track your daily task with the feaure of tracking previous tasks and in case of mistake you can always undo you complete task to pending task. ",
      projectURl: "https://passiontocode-tasktracking.netlify.app",
    },
    {
      id: 2,
      img_file_name: "todoapp.png",
      projectTitle: "TodoApp",
      projectDesc:
        "This is a simple todo list app which is web based and authentication supported. build using ReactJS (frontend), ExpressJS (Backend) and MySQL (Database)",
      projectURl: "https://passiontocode-todoapp.netlify.app",
    },
    {
      id: 3,
      img_file_name: "ecomm_backend.png",
      projectTitle: "Ecomm-Backend API",
      projectDesc:
        "This is a ready backend APIs build using JAVA SPRINGBOOT. From creating user to add category, products. All the APIs are ready to use,  tested with SWAGGER added.",
      projectURl: "https://github.com/shibu2000/maamonoshatelecom",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <Fade direction="down" triggerOnce>
        <h1 className="uppercase text-center p-2 md:text-3xl text-xl">
          projects
        </h1>
      </Fade>
      <div className="container m-auto">
        <div className="projects-items flex justify-center gap-8 md:flex-row flex-col flex-wrap items-center">
          <Fade cascade direction="right" triggerOnce fraction={0.6}>
            {projectItems.map((project) => {
              return <Project_Items key={project.id} project={project} />;
            })}
          </Fade>
        </div>
        <Fade className="my-5 text-center text-xl" triggerOnce>
          <a
            href="https://github.com/shibu2000?tab=repositories"
            className="hover:text-blue-800"
            target="_blank"
          >
            Explore more {"> > >"}
          </a>
        </Fade>
      </div>
    </section>
  );
};

const Project_Items = ({ project }) => {
  return (
    <div className="project-item md:p-3 p-2 md:w-72 rounded-lg shadow-sm shadow-slate-700">
      <div className="image-holder mx-5 my-2">
        <img
          src={`./project-img/${project.img_file_name}`}
          alt={project.img_file_name}
          className="project-item-img rounded"
        />
      </div>
      <div className="title text-center text-xl space-mono-regular my-3 border-b">
        {project.projectTitle}
      </div>
      <p className="text-justify overflow-hidden">{project.projectDesc}</p>
      <div className="text-center pt-5">
        <a
          href={project.projectURl}
          className="rounded-sm hover:text-slate-500 text-sm check-link"
          target="_blank"
        >
          Check it out
        </a>
      </div>
    </div>
  );
};

export default Projects;
